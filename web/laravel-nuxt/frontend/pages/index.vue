<template>
  <div>
    <h1>This is the Front Page.</h1>
    <h3>Random dog of the day:</h3>
    <pre>
      {{ dog }}
    </pre>
    <div>
        <img src="~/assets/img/dog.png" alt="dog" />
    </div>
    <p>
      {{ healthcheck }}
    </p>
  </div>
</template>
<script setup>
import { useFetchApi } from "../utils/useFetchApi";

const { data: dogs } = await useFetch(
  "https://api.thedogapi.com/v1/images/search?limit=1"
);
const dog = dogs.value[0]
console.log('dog', dog)

const { data: healthcheck } = await useFetchApi("/api/healthcheck");
console.log('healthcheck', healthcheck)
</script>
