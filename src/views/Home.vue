<template>
    <div class="section">
        <div class="container">
            <div class="logged" v-if="authStore.isAuth">
                <h1>Home</h1>
            </div>
            

            <article class="message is-danger notLogged" v-else>
                <div class="message-header">
                    <p>Danger</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Debes iniciar sesión primero        
                </div>
            </article>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue'
import {useAuthStore} from '../store/index'

const authStore = useAuthStore();

</script>

<style scoped>
</style>