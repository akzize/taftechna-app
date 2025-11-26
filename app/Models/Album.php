<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $guarded = [];

    protected $casts = [
        'images' => 'array',
    ];

    public function images(){
        return $this->hasMany(AlbumMedia::class);
    }
}
