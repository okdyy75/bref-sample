<template>
  <div>
    <h2>Dog breed: {{ breed }}</h2>
    <ul>
      <li v-for="dog in filteredDogs" v-bind:key="dog.id">
        <img :src="dog.url" alt="" width="320" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();

const { data: dogs, error } = await useFetch(
  "https://api.thedogapi.com/v1/images/search?size=thumb&has_breeds=true&limit=50"
);
const reg = new RegExp(route.params.breed, "g");
const filteredDogs = dogs.value.filter((dog) =>
  dog.id.toLowerCase().match(reg)
);
console.log("filteredDogs", filteredDogs);

const breed = route.params.breed;

useHead({
  title: `${breed} Dog`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: `You are ${breed} hello 👋`,
    },
  ],
});
</script>
