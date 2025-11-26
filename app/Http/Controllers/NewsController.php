<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();
        return Inertia::render('News', [
            'newsItems' => NewsResource::collection($news)
        ]);
    }

    public function show($id)
    {
        $event = News::find($id);
        return Inertia::render('NewsDetail', [
            'news' => new NewsResource($event)
        ]);
    }
}
