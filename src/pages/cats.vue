<script setup lang="ts">
import { CatList } from "../components";
import AddCatForm from "../components/add-cat-form.vue";
import axios from "axios";
import { Cat } from "../types";
import { ref } from "vue";

const cats = ref<Cat[]>([]);

const getCats = async () => {
  const response = await axios.get<Cat[]>("/cats.json");
  cats.value = response.data;
};

const onNewCats = (newCats: Cat[]) => {
  cats.value.push(...newCats);
};

getCats();
</script>

<template>
  <div>
    <div class="container py-5">
      <h1 style="color: black; font-weight: 900; font-size: 70px">
        Meet our furry friends.
      </h1>
      <AddCatForm class="py-4" @new-cats="onNewCats"></AddCatForm>
      <CatList :cats="cats"></CatList>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
a {
  border-radius: 20px;
  padding: 7px 20px;
}

p {
  font-family: "Manrope";
  font-size: 17px;
}

h1 {
  font-family: "Manrope", Helvetica, Arial;
  font-size: 80px;
}

h5 {
  font-family: "Manrope", Helvetica, Arial;
  font-weight: 900;
  font-size: 18px;
}

div {
  font-family: "Manrope", Helvetica, Arial;
  font-size: 17px;
}
</style>
