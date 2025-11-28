<?php

namespace App\Filament\Resources\News\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

use function Symfony\Component\Clock\now;

class NewsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title_ar')
                    ->label(__('resources.news.title'))
                    ->required(),
                Select::make('category_id')
                    ->label(__('resources.news.category'))
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
                Textarea::make('excerpt')
                    ->label(__('resources.news.excerpt')),
                FileUpload::make('cover_image')
                    ->label(__('resources.news.cover_image'))
                    ->image()
                    ->disk('public')
                    ->directory('news/images')
                    ->required(),
                RichEditor::make('content')
                    ->label(__('resources.news.content'))
                    ->toolbarButtons([
                        ['bold', 'italic', 'underline', 'strike', 'link'],
                        ['h1', 'h2', 'h3', 'alignStart', 'alignCenter', 'alignEnd'],
                        ['blockquote', 'bulletList', 'orderedList'],
                        ['attachFiles'], // The `customBlocks` and `mergeTags` tools are also added here if those features are used.
                        ['undo', 'redo'],
                    ])
                    ->required()
                    ->columnSpanFull(),

                Toggle::make('is_published')
                    ->label(__('resources.news.is_published'))
                    ->required(),
                DatePicker::make('published_at')
                    ->label(__('resources.news.published_at'))
                    ->default(today())
                    ->native(false)
                    ->required(),
            ]);
    }
}
