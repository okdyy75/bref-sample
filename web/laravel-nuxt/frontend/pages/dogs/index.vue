<template>
  <div>
    <h1>Here you have all dogs.</h1>
    <ul>
      <li v-for="dog in dogs" :key="dog.id">
        <img :src="dog.url" alt="" width="320" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: dogs, error } = await useFetch(
  "https://api.thedogapi.com/v1/images/search?size=thumb&limit=10"
);

useHead({
  title: "Show all dogs!",
  meta: [
    {
      hid: "description",
      name: "description",
      content: `Hello Dogs 👋`,
    },
  ],
});
</script>
