<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListingController;


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

// Common Resource Routes:
// index - Show all listings
// show - Show single listing
// create - Show form to create new listing
// store - Store new listing (from create)
// edit - Show form to edit listing
// update - Update listing(from edit)
// destroy - Delete listing  

// All listing
Route::get('/', [ListingController::class, 'index']);

// Single Listing
Route::get('/listing/{listing}', [ListingController::class, 'show']);

// Route::get('/hello', function () {
//     // return 'hello'

//     //if we want to return with the response helper to 
//     // to specify different propertire
//     return response('<h1>hello</h1>')
//         //->header('Content-Type','text/plain') // HTML header property
//         // personal customized header property
//         ->header('foo', 'bar');
// });

// Route::get('/posts/{id}', function ($id) {
//     return response('post ' . $id);
// })->where('id', '[0-9]+'); // restricting the value of the variable

// //dd() debuging helper function
// Route::get('/search', function (Request $request) {
//     return ($request->name);
// });
