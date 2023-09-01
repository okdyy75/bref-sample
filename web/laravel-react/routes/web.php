<?php

use App\Http\Controllers\ImgController;
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

Route::get('/img/{filename}', [ImgController::class, 'index']);

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
