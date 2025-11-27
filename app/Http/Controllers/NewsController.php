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

    public function show($slug)
    {
        $event = News::where('slug', $slug)->firstOrFail();
        $relatedNews = News::where('category_id', $event->category->id)->where('id', '<>', $event->id)->latest()->limit(4)->get();
        return Inertia::render('NewsDetail', [
            'news' => new NewsResource($event),
            'relatedNews' => NewsResource::collection($relatedNews)

        ]);
    }
}
