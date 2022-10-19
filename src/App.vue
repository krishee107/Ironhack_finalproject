<template>
  <Navbar/>
  <router-view></router-view>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import { onMounted } from 'vue';
import {login, newTask} from './api'


onMounted( async ()=>{
  const id = await login('krishee107@gmail.com', 'cristina');
  newTask({
    user_id: id,
    title: 'Titulo random',
    description: 'Descripcion aa'

  })
})



</script>
<style scoped>
</style>