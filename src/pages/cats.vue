<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// const posts = ref([]);

// onMounted(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => (posts.value = response.data))
// })

const fetchCats = async () => {

    const config = {
        headers: {
            
        }
    }
}

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
   

    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="..." alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ catData.name }}</h5>
        <p class="card-text">
 
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
