<?php

namespace App\Filament\Resources\Emails\Tables;

use App\Models\Email;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Support\Enums\Width;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Actions\AdvancedResendEmailAction;
use RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Actions\ResendEmailAction;
use RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Actions\ResendEmailBulkAction;
use RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Actions\ViewEmailAction;

class EmailsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('from')
                    ->prefix(__('resources.email.from') . ': ')
                    ->label(__('resources.email.sender'))
                    ->searchable(),
                TextColumn::make('subject')
                    ->label(__('resources.email.subject'))
                    ->limit(50),
                TextColumn::make('created_at')
                    ->label(__('resources.email.sent_at'))
                    ->dateTime(config('filament-email.resource.datetime_format'))
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make()
                ->label('')
                ->iconSize('md')
                ->modalSubmitAction(false) // Hide the 'Save' or 'Submit' button (since it's view-only)
                ->modalWidth('lg')
                ->modalCancelActionLabel('Close'), // Change the cancel button text,
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->persistFiltersInSession()
            // ->filters(self::getFilters())
            ->filtersFormWidth(Width::ExtraLarge)
            ->paginationPageOptions(function (Table $table) {
                $options = config('filament-email.pagination_page_options');

                return ! empty($options) && is_array($options) ? $options : $table->getPaginationPageOptions();
            });
    }
}
