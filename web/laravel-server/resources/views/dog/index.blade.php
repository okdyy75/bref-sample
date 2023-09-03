
<x-layout>
    <x-slot:title>
        Show all dogs!
    </x-slot>
    <x-slot:description>
        Hello Dogs 👋
    </x-slot>
    <div>
        <h1>This is the Front Page.</h1>
        <h3>Random dog of the day:</h3>
        <ul>
            @foreach ($dogs as $dog)
                <li>
                    <img src="{{ $dog['url'] }}" alt="" width="320" />
                </li>
            @endforeach
        </ul>
    </div>
</x-layout>
