<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumResource;
use App\Models\Album;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlbumController extends Controller
{
    public function index(){
        $albums = Album::all();
        return Inertia::render('Gallery', [
            'galleryAlbums' => AlbumResource::collection($albums)
        ]);
    }

    public function show($id){

    }
}
