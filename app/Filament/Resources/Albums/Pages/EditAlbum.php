<?php

namespace App\Filament\Resources\Albums\Pages;

use App\Filament\Resources\Albums\AlbumResource;
use App\Models\Album;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Str;

class EditAlbum extends EditRecord
{
    protected static string $resource = AlbumResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $record = $this->getRecord(); // Get the current record being edited (returns null for Create)
        // dd($data);
        $baseSlug = Str::slug($data['title']);
        $slug = $baseSlug;

        // 1. Start the uniqueness query
        $query = Album::where('slug', $slug);

        // 2. EXCLUSION CHECK (Crucial for Edit Operations)
        // If we are editing an existing record, exclude its own ID from the check.
        if ($record) {
            $query->where('id', '!=', $record->id);
        }

        // 3. Check for existence against *other* records
        while ($query->exists()) {

            // 4. If the slug is found on another record, append a random string
            $slug = $baseSlug . '-' . Str::random(5);

            // Reset the query base for the next iteration of the loop (if needed)
            // This makes the query check against the newly generated slug.
            $query = Album::where('slug', $slug);

            // Re-apply the exclusion for the current record ID
            if ($record) {
                $query->where('id', '!=', $record->id);
            }
        }

        // 5. Update the slug in the data array before it's saved
        $data['slug'] = $slug;

        return parent::mutateFormDataBeforeSave($data);
    }
}
