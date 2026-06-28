<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AnalysisResult;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // Statistik Cluster
        $clusterStatistics = AnalysisResult::whereHas('sensorData', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })
        ->selectRaw('cluster, cluster_label, COUNT(*) as total')
        ->groupBy('cluster', 'cluster_label')
        ->orderBy('cluster')
        ->get();

        // Perkembangan Berat Ikan
        $weightTrend = AnalysisResult::with('sensorData')
            ->whereHas('sensorData', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->orderBy('created_at')
            ->get()
            ->map(function ($item) {
                return [
                    'date' => $item->created_at->format('Y-m-d H:i'),
                    'predicted_weight' => $item->predicted_weight,
                    'cluster' => $item->cluster,
                    'cluster_label' => $item->cluster_label
                ];
            });

        return response()->json([
            'success' => true,
            'statistics' => [
                'cluster_statistics' => $clusterStatistics,
                'weight_trend' => $weightTrend
            ]
        ]);
    }
}