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
                    ->reactive()
                    ->live()
                    ->afterStateUpdated(function (string $operation, $state, callable $set, callable $get) {
                        $slug = Str::slug($state);
                        $set('slug', $slug);
                    })
                    ->required(),
                TextInput::make('slug')
                    ->reactive()
                    ->unique(ignoreRecord: true)
                    ->required(),
                Textarea::make('excerpt'),
                RichEditor::make('content')
                    ->required()
                    ->toolbarButtons([
                        ['bold', 'italic', 'underline', 'strike', 'link'],
                        ['h1', 'h2', 'h3', 'alignStart', 'alignCenter', 'alignEnd'],
                        ['blockquote', 'bulletList', 'orderedList'],
                        ['attachFiles'], // The `customBlocks` and `mergeTags` tools are also added here if those features are used.
                        ['undo', 'redo'],
                    ])
                    ->columnSpanFull(),
                Select::make('category_id')
                ->relationship('category', 'name'),
                FileUpload::make('cover_image')
                    ->image()
                    ->disk('public')
                    ->directory('news/images')
                    ->required(),
                Toggle::make('is_published')
                    ->required(),
                DatePicker::make('published_at')
                    ->default(today())
                    ->native(false)
                    ->required(),
            ]);
    }
}
