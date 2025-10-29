<?php

use Illuminate\Support\Facades\Route;
<<<<<<< HEAD
use App\Http\Controllers\LandingController;
use App\Http\Controllers\Admin\DashboardController;

// Route untuk halaman landing
Route::get('/', [LandingController::class, 'index'])->name('landing');

// Route untuk halaman dashboard admin
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
=======

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
>>>>>>> c8cb8b3d2489cc5ddad50e6e3299c622e5bd5a4c
});
