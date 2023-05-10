<template>
  <form @submit.prevent="onSubmit" class="hstack gap-3">
    <input
      type="text"
      class="form-control"
      placeholder="Enter cat name"
      v-model="searchTerms"
    />
    <button class="btn btn-primary">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useCatsStore } from "../../store";

const catsStore = useCatsStore();

const searchTerms = ref("");

const onSubmit = async () => {
  await catsStore.findAndAdd(searchTerms.value);
  searchTerms.value = "";
};
</script>

<style scoped></style>
