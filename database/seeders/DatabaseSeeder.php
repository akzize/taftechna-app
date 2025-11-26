<?php

namespace Database\Seeders;

use App\Models\EventCategory;
use App\Models\NewsCategory;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $newsCategories = [
            [
                'name' => 'مشروع',
                'slug' => 'mshroaa'
            ],
            [
                'name' => 'إنجازات',
                'slug' => 'injazat'
            ],
            [
                'name' => 'إعلانات',
                'slug' => 'iaalanat'
            ],
            [
                'name' => 'أخبار',
                'slug' => 'akhbar'
            ]
        ];

        foreach($newsCategories as $category){
            NewsCategory::create($category);
        }

        $eventsCategories = [
            [
                'name' => 'احتفال',
                'slug' => 'ahtfal'
            ],
            [
                'name' => 'أكاديمي',
                'slug' => 'akadimy'
            ],
            [
                'name' => 'رياضة',
                'slug' => 'ryada'
            ],
            [
                'name' => 'ثقافي',
                'slug' => 'thakafy'
            ]
        ];

        foreach ($eventsCategories as $category) {
            EventCategory::create($category);
        }
    }
}
