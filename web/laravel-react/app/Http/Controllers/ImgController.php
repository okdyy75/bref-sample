<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ImgController extends Controller
{
    public function index(string $filename)
    {
        $files = File::files(resource_path('js/assets/img'));
        $imgFile = null;
        foreach($files as $file) {
            if ($file->getFilename() === $filename) {
                $imgFile = $file;
            }
        }
        if (empty($imgFile)) {
            abort(404);
        }

        return response()->file($imgFile);
    }
}
