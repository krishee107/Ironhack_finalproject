<template>
    <div class="section">
        <div class="container">
            <div  v-if="!authStore.isAuth">
                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="passwod" placeholder="******" v-model="password">
                        </div>
                    </div>

                    <button type="submit" class="button is-success is-fullwidth">Register me! </button>
                </form>
            </div>


            <div v-else>
                ¡Gracias por registrarte!
            </div>

        </div>
    </div>
    
</template>

<script setup>
import {ref} from 'vue';
import router from '../router'
import { register } from "../api";
import {useAuthStore, useTaskStore} from '../store/index'

const email = ref();
const password = ref();

const authStore = useAuthStore();
const taskStore = useTaskStore();


const onSubmit = async () =>{
    const status = await register(email.value, password.value);
    if(status != null && status != false){
        let id = status.data.user.id
        const login = await authStore.login(id, email.value)
        if(login){
            taskStore.tasks = await getTasks(id).then( (tasks) =>{
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