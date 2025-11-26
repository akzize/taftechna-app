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

    public function show($id)
    {
        $event = Event::find($id);
        return Inertia::render('EventDetail', [
            'event' => new EventResource($event)
        ]);
    }
}
