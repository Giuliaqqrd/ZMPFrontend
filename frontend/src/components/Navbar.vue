<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <img src="@/components/images/ZMP.png" alt="" height="50 px" width="50px">
  <div class="container">
   
    <a class="navbar-brand poetsen-one-regular custom-color" href="#">ZeroMilesPiedmont
        
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SHOP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from "vue-router";
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&family=Quicksand:wght@300..700&display=swap');

.custom-color {
  color: rgb(1, 109, 60); 
}
.poetsen-one-regular {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.quicksand-gg {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.navbar-brand img{
    width: 50 px;


}

.navbar {
    height: 60 px;
    background-color: rgb(241, 245, 209);
    margin-bottom: 0%;
    margin-right: 10 px;
    margin-left: 70 px;
}
</style>