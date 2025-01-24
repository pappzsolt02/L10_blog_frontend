<script setup lang="ts">
import { ref } from 'vue';

const menuItems = ref([
  {
    title: 'Nyitó oldal',
    to: '/'
  },
  {
    title: 'Regisztáció',
    to: '/regisztracio'
  },
  {
    title: 'Bejelentkezés',
    to: '/bejelentkezes'
  },

])
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container"> <span class="navbar-brand" href="#">BLOG</span>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item" v-for="(menuItem, index) in menuItems" :key="index">
            <router-link class="nav-link" :to="menuItem.to">{{ menuItem.title }}</router-link>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped></style>
