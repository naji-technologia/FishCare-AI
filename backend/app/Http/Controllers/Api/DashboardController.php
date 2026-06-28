<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AnalysisResult;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // Total analisis milik user
        $totalAnalysis = AnalysisResult::whereHas('sensorData', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })->count();

        // Berat prediksi rata-rata
        $averageWeight = round(
            AnalysisResult::whereHas('sensorData', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })->avg('predicted_weight'),
            2
        );

        // Total tiap cluster
        $clusterStatistics = AnalysisResult::whereHas('sensorData', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })
        ->selectRaw('cluster, COUNT(*) as total')
        ->groupBy('cluster')
        ->orderBy('cluster')
        ->get();

        // 5 analisis terbaru
        $latestAnalysis = AnalysisResult::with('sensorData')
            ->whereHas('sensorData', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->latest()
            ->take(5)
            ->get();

        return response()->json([
            'success' => true,
            'dashboard' => [
                'total_analysis' => $totalAnalysis,
                'average_weight' => $averageWeight ?? 0,
                'cluster_statistics' => $clusterStatistics,
                'latest_analysis' => $latestAnalysis,
            ]
        ]);
    }
}