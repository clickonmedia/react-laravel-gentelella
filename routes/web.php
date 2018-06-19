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

Route::get('/redirect/{social}','Auth\LoginController@socialLogin')->where('social','twitter|facebook|linkedin|google');


Route::get('foo', function () {
    return 'Hello World';
});

// uploading images
Route::get('/upload', 'UploadImagesController@create');
Route::post('/images-save', 'UploadImagesController@store');
Route::post('/images-delete', 'UploadImagesController@destroy');
Route::get('/images-show', 'UploadImagesController@index');

// place any requests not to be handled by react above here
// sends all request to the home view to be handled by react 
Route::get('{slug}', function() {
    return view('home');
})->where('slug', '(?!api)([A-z\d-\/_.]+)?');