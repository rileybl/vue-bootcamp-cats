<template>
  <div>
    <h1 style="color: black; font-weight: 900; font-size: 70px">The Team</h1>

    <div class="row">
      <img
        class="teamDes"
        src="https://img.freepik.com/free-photo/group-asia-young-creative-people-smart-casual-wear-smiling-arms-crossed-creative-office-workplace_7861-3144.jpg?w=900&t=st=1683261417~exp=1683262017~hmac=0d0bf0f44b6c81e99b8b0491d65946ef7d2134b3de7c2e820c8ed0fa27d92a75"
        alt="First slide"
      />
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 style="font-size: 40px; margin-top: 20px; font-weight: 500">
            The minds behind Félins à la Maison
          </h1>
          <p class="lead">
            At our cat adoption company, we're a passionate and dedicated team
            of individuals who are committed to finding loving homes for our
            feline friends. Each member of our team brings their own unique
            skills and experience to the table, but we all share a common love
            for cats and a deep desire to make a positive impact in the lives of
            these wonderful animals. Whether you're looking to adopt a cat,
            volunteer your time, or simply learn more about our organization,
            we're here to help and support you every step of the way.
          </p>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
  np
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  font-family: "Manrope", Helvetica, Arial;
  font-size: 70px;
  justify-content: center;
  display: flex;
}

.teamDes {
  display: block;
  margin: 0 auto;
  border-radius: 20px;
}

.row {
  font-family: "Manrope", Helvetica, Arial;
  font-weight: 900;
}
</style>
