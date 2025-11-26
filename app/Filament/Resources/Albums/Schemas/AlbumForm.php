<?php

namespace App\Filament\Resources\Albums\Schemas;

use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class AlbumForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->reactive()
                    ->live()
                    ->afterStateUpdated(function (string $operation, $state, callable $set, callable $get) {
                        $slug = Str::slug($state);
                        $set('slug', $slug);
                    })
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
                FileUpload::make('cover_image')
                    ->image()
                    ->disk('public')
                    ->directory('album/images')
                    ->required(),
                // FileUpload::make('images')
                //     ->multiple()
                //     ->directory('album/images')
                //     ->disk('public'),
                Repeater::make('images')
                    ->label('Album Images')
                    ->schema([
                        FileUpload::make('path')
                            ->disk('public')
                            ->directory('album/images')
                            ->image()
                            ->required(),

                        // TextInput::make('caption')
                        //     ->label('Caption')
                        //     ->maxLength(255),

                        // TextInput::make('alt')
                        //     ->label('Alt Text')
                        //     ->maxLength(255),
                    ])
                    ->grid(3)
                    ->addActionLabel('Add Image')
                    ->collapsible()
                    ->columnSpanFull(),
                DatePicker::make('date')
                    ->required(),
                DateTimePicker::make('published_at')
                    ->default(today())
                    ->required(),
            ]);
    }
}
