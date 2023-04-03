<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\Auth\LoginController;

use App\Http\Controllers\General;
use App\Http\Controllers\Home;
use App\Http\Controllers\Kategori;




use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', [Home::class, 'index']);
Route::get('/kategori', [Kategori::class, 'index']);
Route::get('/kategori/{id_kategori}', [Kategori::class, 'index']);
Route::get('/reference', [Home::class, 'reference']);


Route::post('/create_kategori', [Kategori::class, 'store']);
Route::post('/update_kategori', [Kategori::class, 'update']);
Route::get('/delete_kategori/{id_kategori}', [Kategori::class, 'delete']);
