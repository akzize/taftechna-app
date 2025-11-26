<?php

namespace App\Filament\Resources\Events\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class EventForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title_ar')
                    ->reactive()
                    ->live()
                    ->afterStateUpdated(function (string $operation, $state, callable $set, callable $get) {
                        $slug = Str::slug($state);
                        $set('slug', $slug);
                    })
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->createOptionForm([
                        TextInput::make('name')
                        ->reactive()
                        ->required()
                        ->afterStateUpdated(function($state, callable $set){
                            $slug = Str::slug($state);
                            $set('slug', $slug);
                        }),
                        TextInput::make('slug'),
                    ]),
                Textarea::make('content')
                    ->required()
                    ->columnSpanFull(),
                DatePicker::make('start_date')
                    ->required(),
                DatePicker::make('end_date')
                    ->required(),
                TextInput::make('location'),
                FileUpload::make('cover_image')
                    ->image()
                    ->disk('public')
                    ->directory('events/images')
                    ->required(),
                Toggle::make('is_published')
                    ->required(),
            ]);
    }
}
