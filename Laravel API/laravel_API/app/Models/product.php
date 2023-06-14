<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    //need to specify the arguments using fillable
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
    ];
}
