<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

use function Aws\filter;

class DogController extends Controller
{
    public function index()
    {
        $response = Http::get('https://api.thedogapi.com/v1/images/search?size=thumb&limit=10');
        $dogs = $response->json();

        return view('dog.index', [
            'dogs' => $dogs,
        ]);
    }

    public function breed($breed)
    {
        $response = Http::get('https://api.thedogapi.com/v1/images/search?size=thumb&has_breeds=true&limit=50');
        $dogs = $response->json();

        $filteredDogs = (new Collection($dogs))->filter(function ($dog) use ($breed) {
            return preg_match('/' . $breed . '/', Str::lower($dog['id']));
        });

        return view('dog._breed', [
            'breed'        => $breed,
            'filteredDogs' => $filteredDogs,
        ]);
    }
}
