<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? config('app.name') }}</title>
    <meta name="description" content="{{ $description ?? 'This is Bref Test' }}" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <x-navbar></x-navbar>
    <main>
        {{ $slot }}
    </main>
</body>
</html>
