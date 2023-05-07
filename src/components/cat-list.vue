<template>
  <div class="row gy-4">
    <div v-for="cat of cats" class="col-12 col-md-4 col-xl-3">
      <div class="card">
        <div class="ratio ratio-4x3">
          <img
            :src="cat.image_link"
            :alt="'Image of ' + cat.name"
            class="card-img object-fit-cover"
          />
        </div>
        <div class="card-body">
          <h2 class="h4">{{ cat.name }}</h2>
          <p class="text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            inventore explicabo tenetur ratione incidunt ipsa. Necessitatibus
            maiores reprehenderit ipsa odit. Ratione sed rerum recusandae
            adipisci, esse delectus reiciendis iure possimus!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { Cat } from "../types";
import { ref } from "vue";


const cats = ref<Cat[]>([]);

const getCats = async () => {
  const response = await axios.get<Cat[]>("/cats.json");
  cats.value = response.data;
};
</script>

<style scoped></style>
