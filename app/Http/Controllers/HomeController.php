<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\NewsResource;
use App\Models\Album;
use App\Models\Event;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $latestNews = News::latest()->take(4)->get();
        $upcomingEvents = Event::latest()->take(4)->get();
        $recentAlbum = Album::latest()->first();
        
        return Inertia::render('Home', [
            "latestNews" => NewsResource::collection($latestNews),
            "upcomingEvents" => EventResource::collection($upcomingEvents),
            "recentAlbum" => $recentAlbum ? new AlbumResource($recentAlbum) : [],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
