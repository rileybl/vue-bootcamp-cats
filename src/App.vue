<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "QuicksandR";
  src: local("Quicksand-Regular"),
    url(./fonts/Quicksand-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "QuicksandB";
  src: local("Quicksand-Bold"),
    url(./fonts/Quicksand-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "QuicksandM";
  src: local("Quicksand-Medium"),
    url(./fonts/Quicksand-Medium.ttf) format("truetype");
}
</style>
