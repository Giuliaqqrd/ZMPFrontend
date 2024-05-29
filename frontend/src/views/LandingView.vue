<template>
    <!-- Service 10 - Bootstrap Brain Component -->
    <section class="bg-light py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
            <h2 class="mb-4 display-5 poetsen-one-regular">
              Welcome to ZeroMilesPiedmont
              <img src="@/components/images/ZMP.png" alt="Logo" class="ms-3" style="height: 50px;"> <!-- Add your logo here -->
            </h2>
            <p class="text-secondary mb-5 lead fs-4">
              We stand out as the epitome of customer-centricity, offering the best benefits like free shipping and 24/7 support.
            </p>
            <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
          </div>
        </div>
      </div>
  
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="container-fluid">
              <div class="row gy-3 gy-md-4 justify-content-center">
                <div class="col-12 col-md-6">
                  <div class="card border-dark">
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div class="me-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="mb-1">Login as User or Company</h4>
                        <router-link :to="{name: 'login'}" class="m-0 text-secondary">Access your account</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="card border-dark">
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div class="me-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="mb-1">Register as Company</h4>
                        <router-link :to="{name: 'signup'}" class="m-0 text-secondary">Create a company account</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&family=Poetsen+One&family=Quicksand:wght@300..700&display=swap');
  .poetsen-one-regular {
    font-family: "Poetsen One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  </style>
  