<template>
  <div>
 
    <body>
      <div class="form-container">
        <form accept-charset="UTF-8" method="POST">
          <div class="form-fields">
            <h1>Contact Form</h1>

            <hr class="featurette-divider" />

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
  font-family: "Manrope", Helvetica, Arial;
  font-weight: 900;
  font-size: 18px;
}

h1 {
  font-family: "Manrope", Helvetica, Arial;
  font-size: 70px;
  font-weight: 900;
}

/* Contact Form */
.form-container {
  display: flexbox;
  width: 50%;
  flex-direction: column;
  /* align-items: center; */
  margin: 2rem auto;
  border: 1px solid black;
  border-radius: 20px;
  padding: 40px;
}
.form-fields {
  margin-bottom: 1rem;
}

label {
  font-family: "Manrope";
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 1.1rem;
}

body {
  display: block;
}
button[type="submit"] {
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  padding: 8px 30px;
  font-family: "Manrope";
  font-weight: 900;
  align-items: center;
  display: block;
  margin: 0 auto;
}

input {
  border-radius: 20px;
  border-width: 1px;
  width: 100%;
}

textarea {
  width: 100%;
  padding: 100px;
}
</style>
