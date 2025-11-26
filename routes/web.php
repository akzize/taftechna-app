<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\NewsController;
use App\Models\News;
use App\Models\Event;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/news', [NewsController::class, 'index'])->name('news');

Route::get('/news/{id}', function ($id) {
    return Inertia::render('NewsDetail', [
        'newsId' => $id,
        'news' => News::find($id)
    ]);
});

Route::get('/events', [EventController::class, 'index'])->name('events');

Route::get('/events/{id}', [EventController::class, 'show']);

Route::get('/gallery', function () {
    return Inertia::render('Gallery', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('gallery');

Route::get('/about', function () {
    return Inertia::render('About', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
