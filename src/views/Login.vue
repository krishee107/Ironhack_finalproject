<template>
    <div class="section">
        <div class="container is-justify-content-center">
            <div v-if="!authStore.isAuth">
                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email" v-model="email" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field mt-5">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password"  v-model="password" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field mt-5">
                        <p class="control">
                            <button class="button is-success is-fullwidth">
                            Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>

            <div v-else>

                <article class="message is-primary">
                    <div class="message-header">
                        <p>¡Hola!</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <p>¡Gracias por iniciar sesión!  </p>
                        <p>Si lo que deseas es cerrar sesión o iniciar sesión con otra cuenta, puedes hacerlo dándole click al botón de logout en la barra superior o aquí. </p>
                        <button class="navbar-item button is-danger is-light mt-4 " @click="authStore.logout()">Logout</button>                    
                    </div>
                    </article>


            </div>
            
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import router from '../router'
import {useAuthStore, useTaskStore} from '../store/index'
import {getTasks, login} from '../api/index'

const authStore = useAuthStore();

const email = ref();
const password = ref();
const taskStore = useTaskStore();

const onSubmit = async () =>{
        const data = await login(email.value, password.value);
        if(data != null && data != false){
            const login = authStore.login(data, email.value);
            if(login){
                taskStore.tasks = await getTasks(data).then( (tasks) =>{
                    router.replace({ path: '/' })
                })
            }
        }
}
</script>

<style scoped>
    form{
        max-width: 550px;
        background: white;
        padding: 30px;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    }
</style>