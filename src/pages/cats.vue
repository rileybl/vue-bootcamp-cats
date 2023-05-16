<script setup lang="ts">
import { CatList, AddCatForm} from "../components";
import AddMultipleCatsForm from "../components/cats/add-multiple-cats-form.vue";
import { useCatsStore } from "../store";


const catsStore = useCatsStore();

catsStore.load();
</script>

<template>
  <div>
    <div class="container py-5">
      <h1 style="color: black; font-weight: 900; font-size: 70px">
        Meet our furry friends.
      </h1>
      <AddMultipleCatsForm></AddMultipleCatsForm>
      <AddCatForm class="py-4"></AddCatForm>
      <CatList></CatList>
    </div>
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
