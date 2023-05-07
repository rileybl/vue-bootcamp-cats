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
import axios from "axios";
import { Cat } from "../types";
import constants from "../constants";

const emit = defineEmits<{
  (e: "newCats", value: Cat[]): void;
}>();

const searchTerms = ref("");

const onSubmit = async () => {
  const response = await axios.get<Cat[]>(
    "https://api.api-ninjas.com/v1/cats",
    {
      params: { name: searchTerms.value },
      headers: {
        "X-Api-Key": constants.API_KEY_API_NINJAS
      }
    }
  );
  emit("newCats", response.data)
}
</script>

<style scoped></style>
