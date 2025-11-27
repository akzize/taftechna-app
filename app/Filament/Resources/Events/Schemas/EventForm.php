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
                    ->label(__('resources.event.title'))
                    ->reactive()
                    ->live()
                    ->afterStateUpdated(function (string $operation, $state, callable $set, callable $get) {
                        $slug = Str::slug($state);
                        $set('slug', $slug);
                    })
                    ->required(),
                TextInput::make('slug')
                    ->reactive()
                    ->hidden()
                    ->required(),
                Select::make('category_id')
                    ->label(__('resources.event.category'))
                    ->required()
                    ->relationship('category', 'name')
                    ->createOptionForm([
                        TextInput::make('name')
                            ->reactive()
                            ->required()
                            ->afterStateUpdated(function ($state, callable $set) {
                                $slug = Str::slug($state);
                                $set('slug', $slug);
                            }),
                        TextInput::make('slug'),
                    ]),
                Textarea::make('content')
                    ->label(__('resources.event.content'))
                    ->required()
                    ->columnSpanFull(),
                DatePicker::make('start_date')
                    ->label(__('resources.event.start_date'))
                    ->required(),
                DatePicker::make('end_date')
                    ->label(__('resources.event.end_date'))
                    ->required(),
                TextInput::make('location')
                    ->label(__('resources.event.location')),
                FileUpload::make('cover_image')
                    ->label(__('resources.event.cover_image'))
                    ->image()
                    ->disk('public')
                    ->directory('events/images')
                    ->required(),
                Toggle::make('is_published')
                    ->label(__('resources.event.is_published'))
                    ->required(),
            ]);
    }
}
