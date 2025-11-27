<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', [HomeController::class, 'index'])->name('home');

/* ------------------------------- news routes ------------------------------ */
Route::get('/news', [NewsController::class, 'index'])->name('news');

Route::get('/news/{news:slug}', [NewsController::class, 'show']);

/* -------------------------------------------------------------------------- */
/*                                events routes                               */
/* -------------------------------------------------------------------------- */
Route::get('/events', [EventController::class, 'index'])->name('events');

Route::get('/events/{event:slug}', [EventController::class, 'show']);

// gallery routes
Route::get('/gallery', [AlbumController::class, 'index'])->name('gallery');

// about routes
Route::get('/about', function () {
    return Inertia::render('About', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('about');

/* ---------------------------- contact us routes --------------------------- */
Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('contact');

/* ---------------------------- dashboard routes --------------------------- */
Route::post('/email-send', [EmailController::class, 'store'])->name('email-send');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

/* ---------------------- default route for 404 errors ---------------------- */
Route::fallback(function(){
    return Inertia::render('NotFound');
});

require __DIR__ . '/settings.php';
