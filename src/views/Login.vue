<template>
    <div class="section">
        <div class="container">
            <div v-if="!authStore.isAuth">
                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" v-model="email" placeholder="e.g. alexsmith@gmail.com">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" v-model="password" placeholder="*********">
                        </div>
                    </div>

                    <button type="submit">Login me!</button>
                </form>
            </div>

            <div v-else>
                ¡Gracias por iniciar sesión!
            </div>
            
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import router from '../router'
import {useAuthStore} from '../store/index'
import {login} from '../api/index'

const authStore = useAuthStore();

const email = ref();
const password = ref();

const onSubmit = async () =>{
    const status = await login(email.value, password.value);
    if(status != null && status != false){
        const login = authStore.login(status, email.value);
        if(login)
            router.replace({ path: '/' })
    }
}
</script>

<style scoped>
</style>