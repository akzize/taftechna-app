<?php

namespace App\Filament\Resources\Emails;

use App\Filament\Resources\Emails\Pages\CreateEmail;
use App\Filament\Resources\Emails\Pages\EditEmail;
use App\Filament\Resources\Emails\Pages\ListEmails;
use App\Filament\Resources\Emails\Schemas\EmailForm;
use App\Filament\Resources\Emails\Tables\EmailsTable;
use App\Models\Email;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use RickDBCN\FilamentEmail\Filament\Resources\EmailResource as RickEmailResource;
use RickDBCN\FilamentEmail\Filament\Resources\EmailResource\Pages\ViewEmail;
// use RickDBCN\FilamentEmail\Models\Email;

class EmailResource extends RickEmailResource
{
    protected static ?string $model = Email::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function getPluralModelLabel(): string
    {
        return __('resources.email.pluralModelLabel');
    }

    public static function getModelLabel(): string
    {
        return __('resources.email.modelLabel');
    }

    public static function getNavigationLabel(): string
    {
        return __('resources.email.navigationLabel');
    }

    public static function getNavigationGroup(): ?string
    {
        return __('resources.email.navigationLabel');
    }
    public static function form(Schema $schema): Schema
    {
        return EmailForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return EmailsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListEmails::route('/'),
        ];
    }
}
