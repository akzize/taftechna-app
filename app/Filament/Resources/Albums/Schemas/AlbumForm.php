<?php

namespace App\Filament\Resources\Albums\Schemas;

use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class AlbumForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make()
                    ->schema([
                        TextInput::make('title')
                            ->label(__('resources.album.title'))
                            ->columnSpan(3)
                            ->required(),
                        Textarea::make('description')
                            ->label(__('resources.album.description'))
                            ->columnSpan(3)
                            ->rows(10),
                    ]),
                FileUpload::make('cover_image')
                    ->label(__('resources.album.cover_image'))
                    ->image()
                    ->disk('public')
                    ->directory('album/images')
                    ->required(),
                Repeater::make('images')
                    ->label(__('resources.album.album_images'))
                    ->schema([
                        FileUpload::make('path')
                            ->label(__('resources.album.image'))
                            ->disk('public')
                            ->directory('album/images')
                            ->image()
                            ->required(),
                    ])
                    ->grid(3)
                    ->addActionLabel(__('resources.album.add_image'))
                    ->collapsible()
                    ->columnSpanFull(),
                DatePicker::make('date')
                    ->label(__('resources.album.date'))
                    ->required(),
                DatePicker::make('published_at')
                    ->label(__('resources.album.published_at'))
                    ->default(today())
                    ->required(),
            ]);
    }
}
