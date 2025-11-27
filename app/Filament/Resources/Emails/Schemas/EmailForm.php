<?php

namespace App\Filament\Resources\Emails\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ViewField;
use Filament\Schemas\Components\Fieldset;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\View;
use Filament\Schemas\Schema;

class EmailForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Fieldset::make('Envelope')
                    ->label('')
                    ->schema([
                        TextInput::make('from')
                            ->label(__('resources.email.from'))
                            ->columnSpan(1),
                        DatePicker::make('created_at')
                            ->format(config('filament-email.resource.datetime_format'))
                            ->columnSpan(1)
                            ->label(__('resources.email.created_at')),
                TextInput::make('phone')
                    ->label(__('resources.email.phone'))
                    ->columnSpanFull(),
                        TextInput::make('subject')
                            ->label(__('resources.email.subject'))
                            ->columnSpanFull(),
                    ])->columnSpanFull(),
                Textarea::make('text_body')
                    ->label(__('resources.email.content'))
                    ->rows(10)
                    ->columnSpanFull(),
            ]);
    }
}
