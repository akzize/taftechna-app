<?php

namespace App\Filament\Resources\Events\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class EventsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('cover_image')
                    ->label(__('resources.event.cover_image'))
                    ->disk('public') // Specify the disk where the image lives (required for ImageColumn)
                    ->circular(),
                TextColumn::make('title_ar')
                    ->label(__('resources.event.title'))
                    ->searchable(),
                TextColumn::make('start_date')
                    ->label(__('resources.event.start_date'))
                    ->date()
                    ->sortable(),
                TextColumn::make('end_date')
                    ->label(__('resources.event.end_date'))
                    ->date()
                    ->sortable(),
                TextColumn::make('location')
                    ->label(__('resources.event.location'))
                    ->default("--------")
                    ->searchable(),
                IconColumn::make('is_published')
                    ->label(__('resources.event.is_published'))
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->boolean(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
