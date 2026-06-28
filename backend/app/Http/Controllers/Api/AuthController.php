<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    /**
     * Register User
     */
    public function register(Request $request)
    {
        $validated = $request->validate([

            'name' => ['required', 'string', 'max:255'],

            'email' => ['required', 'email', 'unique:users,email'],

            'password' => [
                'required',
                'confirmed',
                Password::min(8),
            ],

        ]);

        $user = User::create([

            'name' => $validated['name'],

            'email' => $validated['email'],

            // otomatis di-hash oleh casts()
            'password' => $validated['password'],

        ]);

        return response()->json([

            'success' => true,

            'message' => 'Registrasi berhasil.',

            'user' => $user,

        ], 201);
    }

    /**
     * Login
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([

            'email' => ['required', 'email'],

            'password' => ['required'],

        ]);

        if (!Auth::attempt($credentials)) {

            return response()->json([

                'success' => false,

                'message' => 'Email atau password salah.'

            ], 401);

        }

        $user = $request->user();

        $token = $user->createToken('fishcare-token')->plainTextToken;

        return response()->json([

            'success' => true,

            'message' => 'Login berhasil.',

            'token' => $token,

            'user' => $user,

        ]);
    }

    /**
     * Logout
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([

            'success' => true,

            'message' => 'Logout berhasil.'

        ]);
    }
}