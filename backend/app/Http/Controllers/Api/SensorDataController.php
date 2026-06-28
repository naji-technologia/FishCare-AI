<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSensorDataRequest;
use App\Http\Requests\UpdateSensorDataRequest;
use App\Models\SensorData;
use Illuminate\Http\JsonResponse;

class SensorDataController extends Controller
{
    /**
     * Menampilkan semua data sensor.
     */
    public function index(): JsonResponse
    {
        $sensorData = SensorData::latest()->get();

        return response()->json([
            'success' => true,
            'message' => 'Data sensor berhasil diambil.',
            'data' => $sensorData
        ]);
    }

    /**
     * Menyimpan data sensor.
     */
    public function store(StoreSensorDataRequest $request): JsonResponse
    {
        $sensorData = SensorData::create([
            'user_id' => auth()->id(),
            'temperature' => $request->temperature,
            'dissolved_oxygen' => $request->dissolved_oxygen,
            'ph' => $request->ph,
            'turbidity' => $request->turbidity,
            'recorded_at' => $request->recorded_at,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Data sensor berhasil ditambahkan.',
            'data' => $sensorData
        ], 201);
    }

    /**
     * Menampilkan detail data sensor.
     */
    public function show(SensorData $sensorDatum): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $sensorDatum
        ]);
    }

    /**
     * Mengupdate data sensor.
     */
    public function update(UpdateSensorDataRequest $request, SensorData $sensorDatum): JsonResponse
    {
        $sensorDatum->update($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Data sensor berhasil diupdate.',
            'data' => $sensorDatum
        ]);
    }

    /**
     * Menghapus data sensor.
     */
    public function destroy(SensorData $sensorDatum): JsonResponse
    {
        $sensorDatum->delete();

        return response()->json([
            'success' => true,
            'message' => 'Data sensor berhasil dihapus.'
        ]);
    }
}