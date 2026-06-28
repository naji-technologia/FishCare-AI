<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sensor_data', function (Blueprint $table) {

            $table->id();

            $table->foreignId('user_id')
                  ->constrained()
                  ->cascadeOnDelete();

            $table->decimal('temperature', 5, 2);

            $table->decimal('dissolved_oxygen', 5, 2);

            $table->decimal('ph', 4, 2);

            $table->decimal('turbidity', 5, 2);

            $table->timestamp('recorded_at')->nullable();

            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sensor_data');
    }
};