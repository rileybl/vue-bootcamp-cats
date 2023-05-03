<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/About">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/Contact-us">Contact Us</RouterLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<h1>Homepage</h1>
<RouterView />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>