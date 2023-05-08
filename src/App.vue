<script setup lang="ts">
import { DefaultLayout } from "./components";
</script>

<template>
<DefaultLayout>
  <RouterView></RouterView>
  </DefaultLayout>
</template>

<style scoped>
@font-face {
  font-family: "Manrope";
  src: local("Manrope"),
    url(./fonts/Manrope-VariableFont_wght.ttf) format("truetype");
}


</style>
