<script setup lang="ts">
import userservice from '@/services/userservice';
import type User from '@/types/User';
import { ref } from 'vue';

const regForm = ref<User>({
  name: '',
  email: '',
  password: '',
  confirm_password: '',
  role: 0
})

const errorMessage = ref({
  name: '',
  email: '',
  password: '',
  confirm_password: '',
})

function onRegister() {
  userservice.registerUser(regForm.value)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      errorMessage.value = err.data.data
    })
}
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="display-4 text-center my-5">Regisztáció</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-4 mx-auto">
      <form @submit.prevent="onRegister">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="name" placeholder="Név" v-model="regForm.name">
          <label for="name">Név</label>
        </div>

        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="E-mail cím" v-model="regForm.email">
          <label for="email">Email address</label>
        </div>

        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="password" placeholder="Jelszó" v-model="regForm.password">
          <label for="password">Jelszó</label>
        </div>

        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="confirm_password" placeholder="Jelszó újra"
            v-model="regForm.confirm_password">
          <label for="confirm_password">Jelszó újra</label>
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary w-100">Regisztáció</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped></style>
