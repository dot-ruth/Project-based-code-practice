<?php

use App\Http\Controllers\ProductController;
use App\Models\product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
//All crud functionalities in one statment
Route::resource('products', ProductController::class);

// Route::get('/product', [ProductController::class, 'index']);

// // Route::post('/product', function () {
// //     return product::create([
// //         'name' => 'Product One',
// //         'slug' => 'product-one',
// //         'description' => 'This is product one',
// //         'price' => '99.99',
// //     ]);
// // });

// Route::post('/product', [ProductController::class, 'store']);

// Route::get('/product/{id}', [ProductController::class, 'show']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
