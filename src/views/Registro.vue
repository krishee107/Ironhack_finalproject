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
import {useAuthStore} from '../store/index'

const email = ref();
const password = ref();

const authStore = useAuthStore();


const onSubmit = async () =>{
    const status = await register(email.value, password.value);
    if(status != null){
        let id = status.data.user.id
        await authStore.login(id, email.value).then(
            router.replace({ path: '/' })
        )
    }
}
</script>

<style scoped>
form{
    margin: 0 auto;
    max-width: 500px;
}
</style>