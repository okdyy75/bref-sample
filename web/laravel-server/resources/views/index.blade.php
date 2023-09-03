
<x-layout>
    <div>
        <h1>This is the Front Page.</h1>
        <h3>Random dog of the day:</h3>
        <pre>
            {{ json_encode($dog); }}
        </pre>
        <div>
            <img src="{{ Vite::asset('resources/img/dog.png') }}" alt="dog" />
        </div>
        <p>
            {{ $healthCheck }}
        </p>
    </div>
</x-layout>
