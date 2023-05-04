<script setup lang="ts">


</script>

<template>
  <div>
    <nav class="navbar navbar-light">
  <a class="navbar-brand" href="/">
    <img src="https://svgnation.com/wp-content/uploads/2021/08/cat-monogram-svg-cut-file.jpg" width="120" height="90" alt="">
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
<div class="container">
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="..." alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Test test</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
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

.navbar-brand {
  padding: 10px;
  padding-top: 20px;
}

.nav-item {
  padding: 10px;
}
.nav-item {
  font-family: "QuicksandM", Helvetica, Arial;
  font-size: 20px;
}

h1 {
  font-family: "QuicksandB", Helvetica, Arial;
  font-size: 80px;
}
</style>
