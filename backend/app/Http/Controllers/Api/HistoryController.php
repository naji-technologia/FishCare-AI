<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AnalysisResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class HistoryController extends Controller
{
    /**
     * Menampilkan seluruh riwayat analisis milik user
     * Support:
     * - search
     * - cluster
     * - sort
     */
    public function index(Request $request)
    {
        $query = AnalysisResult::with('sensorData')
            ->whereHas('sensorData', function ($q) use ($request) {
                $q->where('user_id', $request->user()->id);
            });

        /*
        |--------------------------------------------------------------------------
        | Search
        |--------------------------------------------------------------------------
        */

        if ($request->filled('search')) {

            $search = strtolower($request->search);

            $query->where(function ($q) use ($search) {

                $q->where('cluster_label', 'LIKE', "%{$search}%")
                    ->orWhere('predicted_weight', 'LIKE', "%{$search}%")
                    ->orWhere('interpretation', 'LIKE', "%{$search}%")

                    ->orWhereHas('sensorData', function ($sensor) use ($search) {

                        $sensor->where('temperature', 'LIKE', "%{$search}%")
                            ->orWhere('dissolved_oxygen', 'LIKE', "%{$search}%")
                            ->orWhere('ph', 'LIKE', "%{$search}%")
                            ->orWhere('turbidity', 'LIKE', "%{$search}%");

                    });

            });

        }

        /*
        |--------------------------------------------------------------------------
        | Filter Cluster
        |--------------------------------------------------------------------------
        */

        if ($request->filled('cluster')) {

            $query->where('cluster', $request->cluster);

        }

        /*
        |--------------------------------------------------------------------------
        | Sorting
        |--------------------------------------------------------------------------
        */

        switch ($request->sort) {

            case 'oldest':

                $query->oldest();

                break;

            case 'weight_desc':

                $query->orderByDesc('predicted_weight');

                break;

            case 'weight_asc':

                $query->orderBy('predicted_weight');

                break;

            default:

                $query->latest();

                break;

        }

        $history = $query->get();

        return response()->json([

            'success' => true,

            'total' => $history->count(),

            'data' => $history,

        ]);
    }

    /**
     * Detail History
     */
    public function show(Request $request, $id)
    {
        $history = AnalysisResult::with('sensorData')
            ->whereHas('sensorData', function ($query) use ($request) {
                $query->where('user_id', $request->user()->id);
            })
            ->findOrFail($id);

        return response()->json([

            'success' => true,

            'data' => $history

        ]);
    }

    /**
     * Delete History
     */
    public function destroy(Request $request, $id)
    {
        $history = AnalysisResult::with('sensorData')
            ->whereHas('sensorData', function ($query) use ($request) {
                $query->where('user_id', $request->user()->id);
            })
            ->findOrFail($id);

        $history->delete();

        return response()->json([

            'success' => true,

            'message' => 'Riwayat berhasil dihapus.'

        ]);
    }

    public function update(Request $request, $id)
    {
        // ===============================
        // Validasi
        // ===============================
        $validated = $request->validate([
            'temperature' => 'required|numeric',
            'dissolved_oxygen' => 'required|numeric',
            'ph' => 'required|numeric',
            'turbidity' => 'required|numeric',
        ]);

        // ===============================
        // Cari History milik user
        // ===============================
        $analysis = AnalysisResult::with('sensorData')
            ->whereHas('sensorData', function ($query) use ($request) {
                $query->where('user_id', $request->user()->id);
            })
            ->findOrFail($id);

        // ===============================
        // Update Sensor Data
        // ===============================
        $analysis->sensorData->update([
            'temperature' => $validated['temperature'],
            'dissolved_oxygen' => $validated['dissolved_oxygen'],
            'ph' => $validated['ph'],
            'turbidity' => $validated['turbidity'],
        ]);

        // ===============================
        // Kirim ke FastAPI
        // ===============================
        try {

            $response = Http::asJson()
                ->acceptJson()
                ->timeout(30)
                ->post('http://127.0.0.1:8001/analyze', [

                    'temperature' => $validated['temperature'],

                    'dissolved_oxygen' => $validated['dissolved_oxygen'],

                    'ph' => $validated['ph'],

                    'turbidity' => $validated['turbidity'],

                ]);

        } catch (\Exception $e) {

            return response()->json([

                'success' => false,

                'message' => 'Tidak dapat terhubung ke FastAPI.',

                'error' => $e->getMessage(),

            ], 500);

        }

        // ===============================
        // FastAPI Error
        // ===============================
        if (!$response->successful()) {

            return response()->json([

                'success' => false,

                'message' => 'FastAPI mengembalikan error.',

                'status' => $response->status(),

                'response' => $response->body(),

            ], 500);

        }

        // ===============================
        // Ambil hasil FastAPI
        // ===============================
        $result = $response->json();

        // ===============================
        // Update Analysis Result
        // ===============================
        $analysis->update([

            'predicted_weight' => $result['predicted_weight'],

            'cluster' => $result['cluster'],

            'cluster_label' => $result['cluster_label'],

            'interpretation' => $result['interpretation'],

        ]);

        // Reload relasi
        $analysis->load('sensorData');

        // ===============================
        // Response
        // ===============================
        return response()->json([

            'success' => true,

            'message' => 'Analisis berhasil diperbarui.',

            'data' => $analysis,

        ]);

    }
}