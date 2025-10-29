<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\Admin\DashboardController;

// Route untuk halaman landing
Route::get('/', [LandingController::class, 'index'])->name('landing');

// Route untuk halaman dashboard admin
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
});

// Default route Laravel (bisa dipakai kalau mau)
Route::get('/', function () {
    return view('welcome');
});

