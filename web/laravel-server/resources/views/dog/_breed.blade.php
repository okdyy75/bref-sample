
<x-layout>
    <x-slot:title>
        {{ $breed }} Dog
    </x-slot>
    <x-slot:description>
        You are {{ $breed }} hello 👋
    </x-slot>
    <div>
        <h1>This is the Front Page.</h1>
        <h3>Random dog of the day:</h3>
        <ul>
            @foreach ($filteredDogs as $dog)
                <li>
                    <img src="{{ $dog['url'] }}" alt="" width="320" />
                </li>
            @endforeach
        </ul>
    </div>
</x-layout>
