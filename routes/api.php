<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/senryu', 'SenryuController', ['except' => ['create', 'edit']]);

//###
Route::resource('/senryu', 'Stateful\StatefulSenryuController', ['except' => ['create', 'edit', 'show']]);
Route::resource('/word', 'Stateful\WordController', ['except' => ['create', 'edit', 'store', 'update', 'destroy']]);
Route::resource('/like', 'Stateful\LikeController', ['except' => ['create', 'destroy']]);

