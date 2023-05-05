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
    <body>
      <div class="form-container">
        <form accept-charset="UTF-8" method="POST">
          <div class="form-fields">
            <h1>Contact Form</h1>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div class="form-fields">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-fields">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </body>

    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

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
  font-size: 30px;
}

/* Contact Form */
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  border: 1px solid black;
  border-radius: 20px;
  padding: 1rem;

}
.form-fields {
  margin-bottom: 1rem;
  
}

label {
  font-family: "QuicksandR";
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 1rem;
}

body {
  display: block;
}
button[type="submit"] {
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-family: "QuicksandB";
}

input {
  border-radius: 20px;
  border-width: 1px;
  width: 100%;

}
</style>
