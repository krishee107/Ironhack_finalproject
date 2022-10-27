<template>
    <!-- si tiene sesión iniciada-->
    <div class="section" v-if="authStore.isAuth">
       Logged
    </div>

    <!-- Si no tiene sesión iniciada-->
    <div class="section" v-else>
        <article class="message is-danger notLogged">
                <div class="message-header">
                    <p>Danger</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Debes iniciar sesión primero        
                </div>
            </article>
    </div>
</template>

<script setup>
import { useAuthStore } from '../store';


    const authStore = useAuthStore();
</script>

<style scoped>
</style>