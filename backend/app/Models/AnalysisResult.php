<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AnalysisResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'sensor_data_id',
        'predicted_weight',
        'cluster',
        'cluster_label',
        'interpretation',
    ];

    /**
     * Relasi ke SensorData
     */
    public function sensorData()
    {
        return $this->belongsTo(SensorData::class);
    }
}