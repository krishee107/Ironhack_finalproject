<template>
  <Navbar/>
  <h1>Todo app</h1>
  <router-view></router-view>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
console.log(supabase)
</script>
<style scoped>
</style>