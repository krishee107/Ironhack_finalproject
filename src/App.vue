<template>
  <div class="content">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
.content{
    height: 100vh;
    width: 100%;
    overflow: hidden;
}
</style>