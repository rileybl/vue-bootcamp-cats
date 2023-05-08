<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
        <img
          src="https://svgnation.com/wp-content/uploads/2021/08/cat-monogram-svg-cut-file.jpg"
          width="120"
          height="90"
          alt=""
        /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
    <span class="navbar-toggler-icon"></span>
    </button>
      
      
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="{ name: 'home'}"
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
</template>

<script setup lang="ts"></script>

<style scoped></style>
