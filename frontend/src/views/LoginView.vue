<template>
  <!-- Registration 12 - Bootstrap Brain Component -->
  <section class="py-3 py-md-5 py-xl-8">
    <div class="container">
      <div class="row justify-content-center">
        <!-- Company Login -->
        <div class="col-12 col-md-6">
          <div class="mb-5">
            <h2 class="display-5 fw-bold text-center">Company Login</h2>
            <p class="text-center m-0">Don't have an account? <router-link :to="{name: 'signup'}" class="link-primary text-decoration-none">Sign Up</router-link></p>
          </div>
          <!-- Company login form -->
          <div class="col-12 offset-lg-1 col-lg-10">
            <form>
              <div class="row gy-3 overflow-hidden">
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control border-0 border-bottom rounded-0" v-model="email" id="email" placeholder="name@example.com" required>
                    <label for="email" class="form-label">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control border-0 border-bottom rounded-0" name="password" id="password" value="" placeholder="Password" required>
                    <label for="password" class="form-label">Password</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button @click="loginSubmit" class="btn btn-lg btn-dark rounded-0 fs-6" type="button">Sign in</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- Consumer Login -->
        <div class="col-12 col-md-6">
          <div class="mb-5">
            <h2 class="display-5 fw-bold text-center">Consumer Login</h2>
          </div>
            <GoogleLogin :callback="callback" prompt/>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import {ref} from 'vue';
import { decodeCredential } from 'vue3-google-login';
import { useSessionStore } from '@/store/modules/user';
import CompanyService from '@/components/services/CompanyService.js'
import router from '@/router';


const sessionStore = useSessionStore();

const email = ref()
const password = ref()


const callback = (response) => {
    // decodeCredential will retrive the JWT payload from the credential
    const userData = decodeCredential(response.credential)
    console.log("Handle the userData", userData)
    const user = {
        email: userData.email,
        name: userData.given_name,
        surname: userData.family_name,
        picture: userData.picture,
        role: 0
    }
    sessionStore.login(user);
    router.push({name: 'home'})
}


const loginSubmit = async () => {
  await loginCompany(email.value)
}

const loginCompany = async (email) => {
  try{
    const result = await CompanyService.loginCompany(email);
    var user = result.data.data
    user['role'] = 1
    console.log(user)
    sessionStore.login(user)
    router.push({name: 'manager'})
  }catch(error) {
    console.log("Login fail: ", error)
  }
}

</script>
<style scoped>


</style>

    