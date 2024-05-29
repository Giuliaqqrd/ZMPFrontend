<template>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" style="width: 100%; height: 500px;">
    <div class="carousel-item active" data-bs-interval="3000">
      <img src="@/components/images/carshop2.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="@/components/images/carshop3.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/components/images/carshop1.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>
export default {
    name: 'Carousel'
}

</script>
<style scoped>
.carousel-inner {
  width: 100%;
  height: 500px; 
}

.carousel-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}



</style>