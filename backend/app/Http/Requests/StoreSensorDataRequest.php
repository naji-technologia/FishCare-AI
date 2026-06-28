<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSensorDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'temperature' => 'required|numeric|between:0,50',
            'dissolved_oxygen' => 'required|numeric|between:0,20',
            'ph' => 'required|numeric|between:0,14',
            'turbidity' => 'required|numeric|min:0',
            'recorded_at' => 'nullable|date',
        ];
    }

    /**
     * Custom validation messages.
     */
    public function messages(): array
    {
        return [
            'temperature.required' => 'Temperature wajib diisi.',
            'temperature.numeric' => 'Temperature harus berupa angka.',

            'dissolved_oxygen.required' => 'Dissolved Oxygen wajib diisi.',
            'dissolved_oxygen.numeric' => 'Dissolved Oxygen harus berupa angka.',

            'ph.required' => 'pH wajib diisi.',
            'ph.numeric' => 'pH harus berupa angka.',

            'turbidity.required' => 'Turbidity wajib diisi.',
            'turbidity.numeric' => 'Turbidity harus berupa angka.',
        ];
    }
}