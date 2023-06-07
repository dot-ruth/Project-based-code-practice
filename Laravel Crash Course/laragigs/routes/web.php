<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Listing;

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

// All listing
Route::get('/', function () {
    return view('listings', [
        'heading' => 'latest listings',
        'listings' => Listing::all()
    ]);
});

// Single Listing
Route::get('/listing/{id}', function ($id) {
    return view('listing', [
        'heading' => 'single Listing',
        'listing' => Listing::find($id)
    ]);
});

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
