<template>

  <Carousel/>
  <div class="p-5 mb-4 bg-light rounded-3">
    
        <div class="container-fluid">
          <h1 class="poetsen-one-regular"> Order Freshly, Eat Healthy!</h1>
            <h1 class="display-5 fw-bold custom-color poetsen-one-regular"><slot></slot></h1>
            <p class="fs-5 quicksand-gg">Welcome to <b>ZeroMilesPiedmont</b>, where the flavors of Piedmont come to your doorstep, 
                fresh and full of vitality. Say goodbye to long supply chains and hello to local goodness with our selection 
                of Piedmontese cuisine sourced from nearby farms and producers. With a commitment to sustainability and community, 
                we bring you the finest ingredients, straight from the heart of <b>Italy's Piedmont region</b>, right to your table.</p>
            
        </div>
        
    </div>
    <div class="container">
    <CompanyCard></CompanyCard>
    </div>

  <main> 





  </main>
</template>
<script>
import Carousel from '@/components/Carousel.vue';
import CompanyCard from '@/components/card/CompanyCard.vue';

export default{
  components: {Carousel, CompanyCard}

}
</script>

<style scoped>
.poetsen-one-regular {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
