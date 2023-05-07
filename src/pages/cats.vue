<script setup lang="ts"></script>

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

      <!-- CAT CARDS -->
      <!-- <div class="row">
      <div class="col-md-4" v-for="(cat, index) in cats" :key="index">
        <div class="card my-4" style="width: 23rem">
          <img class="card-img-top" :src="cat.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ cat.name }}</h5>
            <p class="card-text">{{ cat.description }}</p>
            <a href="cat.adoptUrl" class="btn btn-dark">Adopt Me</a>
          </div>
        </div>
      </div>
    </div>
  
    END OF CAT CARDS
  -->

      <div class="row gy-4">
        <div class="col-12 col-md-4 col-xl-3">
          <div class="card">
            <div class="ratio ratio-4x3">
              <img
                src="https://via.placeholder.com/400x300"
                alt=""
                class="card-img"
              />
            </div>
            <div class="card-body">
              <h2 class="h4">Cat 1</h2>
              <p class="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, inventore explicabo tenetur ratione incidunt ipsa.
                Necessitatibus maiores reprehenderit ipsa odit. Ratione sed
                rerum recusandae adipisci, esse delectus reiciendis iure
                possimus!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-xl-3">
          <div class="card">
            <div class="ratio ratio-4x3">
              <img
                src="https://via.placeholder.com/400x200"
                alt=""
                class="card-img"
              />
            </div>
            <div class="card-body">
              <h2 class="h4">Cat 1</h2>
              <p class="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, inventore explicabo tenetur ratione incidunt ipsa.
                Necessitatibus maiores reprehenderit ipsa odit. Ratione sed
                rerum recusandae adipisci, esse delectus reiciendis iure
                possimus!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-xl-3">
          <div class="card">
            <div class="ratio ratio-4x3">
              <img
                src="https://via.placeholder.com/400x500"
                alt=""
                class="card-img"
              />
            </div>
            <div class="card-body">
              <h2 class="h4">Cat 1</h2>
              <p class="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, inventore explicabo tenetur ratione incidunt ipsa.
                Necessitatibus maiores reprehenderit ipsa odit. Ratione sed
                rerum recusandae adipisci, esse delectus reiciendis iure
                possimus!
              </p>
            </div>
          </div>
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
