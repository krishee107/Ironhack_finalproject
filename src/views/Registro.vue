<template>
    <!-- Si el usuario no está log, le enseñamos el registro-->
    <div class="register_template columns is-mobile is-variable is-multiline"  v-if="!authStore.isAuth">
        
        <div class="img_box column is-5-desktop is-full-mobile is-full-tablet ">
            <img src="../assets/todo2.jpg" alt="">
        </div>

        <div class="form_box column is-7-desktop is-full-mobile is-full-tablet">
            <h1>¡Welcome!</h1>
                <form @submit.prevent="onSubmit">
                    <!-- Email -->
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="" type="email" placeholder="Enter an email" v-model="email">
                        </div>
                    </div>
                    <!-- Password -->
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="" type="password" placeholder="Enter a password (min 6 characters)" v-model="password">
                        </div>
                    </div>
                    <!-- botón de registro-->
                    <button type="submit" class="button is-success is-fullwidth is-rounded">Register me! </button>
                    
                    <span class="login">Already have an account? 
                        <router-link class="is-text is-light  mr-4 profile" :to="{name: 'login'}">Login here!</router-link>
                    </span>
                </form>    
            </div>

    </div>

    <!-- Si el usuario está registrado y intenta hacer registro -->
    <div class="section" v-else>
        <article class="message is-primary">
           <div class="message-header">
                    <p>¡Hola!</p>
                    <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                    <p>Parece que ya tienes una sesión iniciada. </p>
                    <p>Si lo que deseas es cerrar sesión o iniciar sesión con otra cuenta, puedes hacerlo dándole click al botón de logout en la barra superior o aquí. </p>
                    <button class="navbar-item button is-danger is-light mt-4 " @click="authStore.logout()">Logout</button>                    
            </div>
        </article>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import router from '../router'
    import { register, getTasks } from "../api";
    import {useAuthStore, useTaskStore} from '../store/index'

    const email = ref();
    const password = ref();

    const authStore = useAuthStore();
    const taskStore = useTaskStore();

    /* Hacer registro en la bd y un login */
    const onSubmit = async () =>{
        /*Registro*/
        const status = await register(email.value, password.value);
        if(status != null && status != false){
            let id = status.data.user.id
            /* Login */
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
.register_template {
    width: 100%;
    margin: 0 auto;
    height: 100%;
    min-height: 100vh;
}

.form_box {
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
form{
    margin: 0 auto;
    width: 50%;
    min-width: 300px;
    padding: 30px 0;
    display: grid;
    gap: 15px;
}
input {
    border: unset;
    font-size: 1rem;
    border-bottom: 2px solid black;
    background-color: white !important;
    border-radius: 0px;
    width: 100%;
    padding-bottom: calc(0.5em - 1px);
    padding-right: calc(0.75em - 1px);
    padding-top: calc(0.5em - 1px);
    padding-left: 2.5em;
    height: 2.5em;
}
h1 {
    font-size: 4em !important;
}
.login{
    text-align: center;
    padding: 10px 0;
}

.img_box.column {
    padding: unset;
}
.img_box.column img {
    width: fit-content;
    height: 100%;
}
</style>