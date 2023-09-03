<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\HealthCheckController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class IndexController extends Controller
{
    public function __construct(
        private HealthCheckController $healthCheckController
    ) {
    }

    public function index()
    {
        $response = Http::get('https://api.thedogapi.com/v1/images/search?limit=1');
        $dog = $response->json()[0];

        $response = $this->healthCheckController->index();
        $healthCheck = $response->content();

        return view('index', [
            'dog'         => $dog,
            'healthCheck' => $healthCheck,
        ]);
    }
}
