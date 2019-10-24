<?php

use Illuminate\Http\Request;

Route::resource('/check', 'Stateful\CheckController', ['except' => ['create', 'edit', 'store', 'show', 'update', 'destroy']]);
Route::resource('/senryu', 'Stateful\StatefulSenryuController', ['except' => ['create', 'edit']]);
Route::resource('/word', 'Stateful\WordController', ['except' => ['create', 'edit', 'store', 'update', 'destroy']]);
Route::resource('/like', 'Stateful\LikeController', ['except' => ['create', 'destroy']]);

