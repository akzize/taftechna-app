<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Models\Album;
use App\Models\News;
use App\Models\Event;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/news', [NewsController::class, 'index'])->name('news');

Route::get('/news/{id}', function ($id) {
    return Inertia::render('NewsDetail', [
        'newsId' => $id,
        'news' => News::find($id)
    ]);
});

Route::get('/events', [EventController::class, 'index'])->name('events');

Route::get('/events/{id}', [EventController::class, 'show']);

Route::get('/gallery', [AlbumController::class, 'index'])->name('gallery');

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

Route::post('/email-send', [EmailController::class, 'store'])->name('email-send');

Route::fallback(function(){
    return Inertia::render('NotFound');
});

require __DIR__ . '/settings.php';
