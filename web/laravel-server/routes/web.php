<?php

use App\Http\Controllers\DogController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

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

Route::get('/',             [IndexController::class, 'index']);
Route::get('/dogs',         [DogController::class, 'index']);
Route::get('/dogs/{breed}', [DogController::class, 'breed']);

Route::get('/welcome', function () {
    return view('welcome');
});
