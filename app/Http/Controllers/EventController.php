<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index(){
        $events = Event::all();
        return Inertia::render('Events', [
            'events' => EventResource::collection($events)
        ]);
    }

    public function show($slug)
    {
        $event = Event::where('slug', $slug)->firstOrFail();
        $relatedEvents = Event::where('category_id', $event->category->id)->where('id', '<>', $event->id)->latest()->limit(4)->get();
        return Inertia::render('EventDetail', [
            'event' => new EventResource($event),
            'relatedEvents' => EventResource::collection($relatedEvents)

        ]);
    }
}
