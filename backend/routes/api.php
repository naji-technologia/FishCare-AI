<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SensorDataController;
use App\Http\Controllers\Api\AnalysisController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\HistoryController;
use App\Http\Controllers\Api\StatisticsController;
/*
|--------------------------------------------------------------------------
| FishCare AI API Routes
|--------------------------------------------------------------------------
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('sensor-data', SensorDataController::class);

    Route::post('/analyze', [AnalysisController::class, 'analyze']);

    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::get('/history', [HistoryController::class, 'index']);

    Route::get('/history/{id}', [HistoryController::class, 'show']);

    Route::delete('/history/{id}', [HistoryController::class, 'destroy']);

    Route::get('/statistics', [StatisticsController::class, 'index']);

    Route::put('/history/{id}', [HistoryController::class, 'update']);

});