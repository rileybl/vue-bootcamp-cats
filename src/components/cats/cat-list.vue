<template>
  <div class="row gy-4">
    <div v-for="cat of cats" :key="cat.name" class="col-12 col-md-4 col-xl-3">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            mollitia.
          </p>

          <button
            class="btn btn-outline-danger d-flex justify-content-center"
            type="button"
            @click="deleteByName(cat.name)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCatsStore } from "../../store";

const { cats } = storeToRefs(useCatsStore());


</script>

<style scoped>
.btn {
  border-radius: 20px;
  padding: 5px 30px;
}

</style>
