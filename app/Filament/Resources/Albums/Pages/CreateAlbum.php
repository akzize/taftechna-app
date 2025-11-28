<?php

namespace App\Filament\Resources\Albums\Pages;

use App\Filament\Resources\Albums\AlbumResource;
use App\Models\Album;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Str;

class CreateAlbum extends CreateRecord
{
    protected static string $resource = AlbumResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $baseSlug = $data['slug'];
        $slug = $baseSlug;

        // 1. Check if the generated slug already exists in the database
        // We check against the model relevant to the resource (e.g., Event::class)
        while (Album::where('slug', $slug)->exists()) {

            // 2. If the slug exists, append a random unique string (e.g., 5 characters)
            // This guarantees a unique slug for the new record.
            $slug = $baseSlug . '-' . Str::random(5);
        }

        // 3. Update the slug in the data array before it's saved
        $data['slug'] = $slug;

        // The rest of the data is passed to the parent method for final creation.
        return parent::mutateFormDataBeforeCreate($data);
    }
}
