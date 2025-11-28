<?php

namespace App\Providers;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Support\Facades\FilamentColor;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();
        FilamentColor::register([
            'primary' => '#cb6342',
            'secondary' => '#77b4d6',
        ]);
        // set DatePicker and DateTimePicker don't use native 
        DatePicker::configureUsing(function(DatePicker $component){
            $component->native(false);
        });

        DateTimePicker::configureUsing(function (DateTimePicker $component) {
            $component->native(false);
        });
    }
}
