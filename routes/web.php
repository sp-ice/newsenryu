<?php

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

Route::get('/', function () {
    // return view('welcome');
    return redirect('/app');
});

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

//twitter login
Route::get('auth/{provider}', 'OAuthLoginController@getAuth');
Route::get('auth/callback/{provider}', 'OAuthLoginController@authCallback');

//Facebook
//Route::get('auth/facebook', 'OAuthLoginController@getAuth');
//Route::get('auth/callback/facebook', 'OAuthLoginController@authCallback');

//Google
//Route::get('auth/google', 'OAuthLoginController@getAuth');
//Route::get('auth/callback/google', 'OAuthLoginController@authCallback');
