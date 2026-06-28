<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SensorData;
use App\Models\AnalysisResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AnalysisController extends Controller
{
    public function analyze(Request $request)
    {
        // ===============================
        // Validasi Input
        // ===============================
        $validated = $request->validate([
            'temperature' => 'required|numeric',
            'dissolved_oxygen' => 'required|numeric',
            'ph' => 'required|numeric',
            'turbidity' => 'required|numeric',
        ]);

        // ===============================
        // Simpan Sensor Data
        // ===============================
        $sensor = SensorData::create([
            'user_id' => auth()->id(),
            'temperature' => $validated['temperature'],
            'dissolved_oxygen' => $validated['dissolved_oxygen'],
            'ph' => $validated['ph'],
            'turbidity' => $validated['turbidity'],
            'recorded_at' => now(),
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
                'message' => 'Tidak dapat terhubung ke FastAPI.',
                'error' => $e->getMessage(),
            ], 500);

        }

        // ===============================
        // Jika FastAPI gagal
        // ===============================
        if (!$response->successful()) {

            return response()->json([
                'message' => 'FastAPI mengembalikan error.',
                'status' => $response->status(),
                'response' => $response->body(),
            ], 500);

        }

        // ===============================
        // Ambil hasil dari FastAPI
        // ===============================
        $result = $response->json();

        // ===============================
        // Simpan Hasil Analisis
        // ===============================
        $analysis = AnalysisResult::create([
            'sensor_data_id' => $sensor->id,
            'predicted_weight' => $result['predicted_weight'],
            'cluster' => $result['cluster'],
            'cluster_label' => $result['cluster_label'],
            'interpretation' => $result['interpretation'],
        ]);

        // ===============================
        // Response
        // ===============================
        return response()->json([
            'success' => true,
            'message' => 'Analisis berhasil.',
            'sensor_data' => $sensor,
            'analysis_result' => $analysis,
        ], 200);
    }
}