<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HealthCheckController extends Controller
{
    public function index()
    {
        return response()->json([
            'Server Name'    => $_SERVER['SERVER_NAME'],
            'PHP Version'    => phpversion(),
            'Larave Version' => app()->version(),
        ]);
    }
}
