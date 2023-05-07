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
  cats.value.push(...newCats)
}

getCats();
</script>

<template>
  <div>
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="/">
        <img
          src="https://svgnation.com/wp-content/uploads/2021/08/cat-monogram-svg-cut-file.jpg"
          width="120"
          height="90"
          alt=""
        />
      </a>
    </nav>
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Cats">Cats</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/About">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Contact-us"
                >Contact Us</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container py-5">
      <h1
        style="
          color: black;
          font-weight: 900;
          font-size: 70px;
          margin: 20px auto;
        "
      >
        Meet our furry friends.
      </h1>
      <AddCatForm class="py-4"
      @new-cats="onNewCats"></AddCatForm>
      <CatList :cats="cats"></CatList>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
#navbar {
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
}

a {
  border-radius: 20px;
  padding: 7px 20px;
}

p {
  font-family: "Manrope";
  font-size: 17px;
}

.navbar-brand {
  padding: 10px;
  padding-top: 20px;
}

.nav-item {
  padding: 10px;
}
.nav-item {
  font-family: "Manrope", Helvetica, Arial;
  font-weight: 900;
  font-size: 18px;
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
