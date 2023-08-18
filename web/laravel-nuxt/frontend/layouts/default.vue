<template>
  <div>
    <navbar />
    <slot />
  </div>
</template>
<script>
import navbar from "~/components/navbar";

export default {
  components: { navbar },
};
</script>
