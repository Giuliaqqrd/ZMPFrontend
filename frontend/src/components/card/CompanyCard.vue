<template>
<div class="card">
  <h5 class="card-header">+50 New Companies</h5>
  <div class="card-body">
    <h5 class="card-title poetsen-one-regular custom-color">Taste Piedmont</h5>
    <p class="card-text">The agricultural companies of Piedmont epitomize excellence, blending tradition and innovation to produce some of the world’s finest goods. Renowned for their rich wines, prized white truffles, and artisanal cheeses, these enterprises showcase the region’s fertile land and dedication to quality. Embracing sustainable practices, Piedmont’s farmers ensure environmentally friendly production while maintaining superior standards. From the creamy Castelmagno cheese to the exquisite Barolo wines, every product reflects the passion and hard work of these exceptional farmers. Celebrating Piedmont’s agricultural companies is to honor a legacy of culinary heritage and outstanding craftsmanship.</p>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 col-md-3 mx-auto">
          <img src="@/components/images/azagr1.jpeg" alt="" class="img-fluid img-thumbnail card-img">
        </div>
        <div class="col-4 col-md-3 mx-auto">
          <img src="@/components/images/azagr2.jpeg" alt="" class="img-fluid img-thumbnail card-img">
        </div>
        <div class="col-4 col-md-3 mx-auto">
          <img src="@/components/images/azagr3.jpeg" alt="" class="img-fluid img-thumbnail card-img">
        </div>
        <div class="col-4 col-md-3 mx-auto">
          <img src="@/components/images/azagr4.jpeg" alt="" class="img-fluid img-thumbnail card-img">
        </div>
      
      </div>
      <router-link :to="{name: 'about'}" class="btn btn-primary mt-3">See more</router-link>
    </div>
    
  </div>
</div>

  
  </template>
  
  <script setup>
  

  
  </script>

<style scoped>
.card-img {
      width: 250px; /* Fissa larghezza */
      height: 200px; /* Fissa altezza */
      object-fit: cover; /* Ritaglia l'immagine per adattarla al contenitore */
    }
.custom-color {
  color: rgb(1, 109, 60); 
}
.poetsen-one-regular {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>