<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-2 d-none d-lg-block">
        <!-- Left advertisement banner -->
        <div class="advert-banner">
          <h3 class="raleway-banner">Quality and freshness</h3>
          <img src="@/components/images/adv2.png" alt="Left Ad" class="img-fluid">
        </div>
      </div>
      <div class="col-lg-8">
        <h1 class="text-center mb-4 poetsen-one-regular custom-color">About Zero Miles Piedmont Food</h1>
        <p class="lead">
          Welcome to our journey through the heart of Piedmont, where we embrace the philosophy of zero miles food. This movement prioritizes the consumption of locally sourced ingredients, ensuring that every meal is fresh, flavorful, and sustainable.
        </p>
        <p>
          Nestled in the northwest of Italy, Piedmont is renowned for its rich culinary traditions and exceptional produce. From the fertile plains to the rolling hills, this region offers a bounty of ingredients that reflect its diverse landscapes and deep-rooted agricultural heritage.
        </p>
        <h2 class="poetsen-one-regular custom-color">What is Zero Miles Food?</h2>
        <p>
          Zero miles food, also known as "chilometro zero" in Italian, emphasizes the importance of consuming food that is produced, processed, and consumed locally. By minimizing the distance food travels from farm to table, we reduce carbon footprints, support local farmers, and enjoy the freshest ingredients possible.
        </p>
        <h2 class="poetsen-one-regular custom-color">Our Commitment to Sustainability</h2>
        <p>
          At the heart of our philosophy is a commitment to sustainability. By choosing zero miles food, we not only promote environmental stewardship but also foster a deeper connection with the land and the people who cultivate it. Every dish we create celebrates the unique flavors and traditions of Piedmont, crafted with ingredients that are in season and sourced from local farms.
        </p>
        <h2 class="poetsen-one-regular custom-color">Experience the Flavors of Piedmont</h2>
        <p>
          Piedmontese cuisine is a tapestry of rich, bold flavors and time-honored recipes. From the world-famous truffles of Alba to the exquisite wines of Barolo and Barbaresco, the region offers a culinary adventure that is both diverse and delightful. Our menu features classic dishes such as tajarin pasta, agnolotti del plin, and brasato al Barolo, each prepared with ingredients sourced from nearby producers.
        </p>
        <p>
          Join us in celebrating the essence of Piedmont through zero miles food. Together, we can enjoy delicious meals while supporting a sustainable and vibrant local food ecosystem.
        </p>
      </div>
      <div class="col-lg-2 d-none d-lg-block">
        <!-- Right advertisement banner -->
        <div class="advert-banner">
          <h3 class="raleway-banner">Are you a company?</h3>
          <img src="@/components/images/adv3.png" alt="Right Ad" class="img-fluid mb-3">
          <p></p>
          <button class="btn btn-primary w-100">Join us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Poetsen+One&family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.poetsen-one-regular {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.raleway-banner {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
}
h1, h2 {
  color: #5a5a5a;
}
p.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.custom-color {
  color: rgb(1, 109, 60); 
}

/* Custom styles for the advertisement banners */
.advert-banner {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
  border: 1px solid #e9ecef;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.advert-banner button {
  margin-top: 10px;
}
</style>
