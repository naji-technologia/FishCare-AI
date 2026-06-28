<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('analysis_results', function (Blueprint $table) {

            $table->id();

            $table->foreignId('sensor_data_id')
                  ->references('id')
                  ->on('sensor_data')
                  ->cascadeOnDelete();

            $table->decimal('predicted_weight', 8, 2);

            $table->integer('cluster');

            $table->string('cluster_label');

            $table->text('interpretation');

            $table->enum('analysis_status', [
                'Success',
                'Failed'
            ])->default('Success');

            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('analysis_results');
    }
};