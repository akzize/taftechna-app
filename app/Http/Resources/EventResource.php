<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'titleAr' => $this->title_ar,
            'titleEn' => $this->title_en,
            'titleFr' => $this->title_fr,
            'slug' => $this->slug,
            'categoryAr' => $this->category->name,
            'content' => $this->content,
            'startDate' => $this->start_date,
            'endDate' => $this->end_date,
            'location' => $this->location,
            'coverImage' => $this->cover_image,
            'isPublished' => $this->is_published,
            'publishedAt' => $this->published_at,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
