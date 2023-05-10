<template>
  <div>
    <!-- HEADER TEXT -->
    <div class="container py-5">
      <h1 style="color: black; font-weight: 900; font-size: 70px">
        Save a life, adopt today.
      </h1>
    </div>

    <!-- CAROUSEL OF CATS  -->

    <main>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="active"
            aria-current="true"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://i.pinimg.com/originals/b1/f4/54/b1f4547e4a992f3179e0ae7b6ae2930b.jpg"
              alt="First slide"
            />
            <div class="container"></div>
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://rare-gallery.com/uploads/posts/173-cat__cat_kitten_wallpaper.jpg"
              alt="Second slide"
            />
            <div class="container">
              <div class="carousel-caption"></div>
            </div>
          </div>
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://wallpaperset.com/w/full/d/c/2/429300.jpg"
              alt="Third slide"
            />
            <div class="container">
              <div class="carousel-caption text-end"></div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Mini Description -->

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="py-5" style="font-size: 50px; font-weight: 500">
            We are Félins à la Maison
          </h1>
          <p class="filler pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            adipisci deleniti unde vero ipsa magni. Hic soluta odio eos! Hic qui
            beatae voluptatum voluptas et nisi eos consectetur vel laudantium?.
          </p>
        </div>
      </div>


      <div class="container marketing" style="margin-top: 30px">
        <!-- Three columns of text below the carousel -->
        <div class="container row">
          <div class="contentDes col-lg-3 card">
            <img
              class="rounded-circle"
              src="../icons/cat-icon.png"
              width="80"
              height="80"
              alt="Second slide"
              style=""
            />
            <h2 class="fw-normal">Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ad, alias tempore nesciunt nemo inventore voluptatibus. Laborum amet tempore expedita sit perferendis, exercitationem nobis beatae numquam mollitia excepturi quod ratione.
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="contentDes col-lg-3 card">
            <img
              class="rounded-circle"
              src="../icons/cat-paw.png"
              width="80"
              height="80"
              alt="Second slide"
            />
            <h2 class="fw-normal">Mission</h2>
            <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque libero nostrum id excepturi molestias sapiente sequi molestiae aspernatur, nihil tempore? Sunt dolorum assumenda ea incidunt voluptatem recusandae cupiditate, error ratione?
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="contentDes col-lg-3 card">
            <img
              class="rounded-circle"
              src="../icons/adopt.png"
              width="80"
              height="80"
              alt="Second slide"
            />
            <h2 class="fw-normal">Values</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia labore doloremque neque eum hic, quis illum rerum accusantium! Sunt at maxime facere repellendus dolorum et voluptatum non neque tempore reiciendis!
            </p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>

      <footer class="container" style="font-family: Manrope; margin-top: 50px">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>
          © 2023 Riley's CatCompany, Inc. · <a href="#">Privacy</a> ·
          <a href="#">Terms</a>
        </p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.marketing {
  font-family: "Manrope", Helvetica, Arial;
  font-weight: 100;
  font-size: 16px;
}

h1 {
  font-family: "Manrope", Helvetica, Arial;
  font-size: 80px;
  justify-content: center;
  display: flex;
}

h2 {
  font-family: "Manrope", Helvetica, Arial;
  font-size: 2rem;
  justify-content: center;
  display: flex;
}

.filler {
  font-family: "Manrope", Helvetica, Arial;
  font-size: 1.5rem;
}

/* FEATURETTES */

.contentDes {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  margin: 10px auto;

}

.contentDes img {
  display: block;
  margin: 0 auto;
}

.card {
  background-color: white;
  border: 1px solid grey;
  padding: 20px;
  transition: all 0.2s ease-in-out;
}

.card:hover {
  background-color: #f5f5f5;
  border-color: #aaa;
}


</style>
