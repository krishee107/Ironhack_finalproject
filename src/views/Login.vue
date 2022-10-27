<template>
    <!-- Si el usuario no tiene una sesión iniciada -->
    <div class="login_template columns"  v-if="!authStore.isAuth">
        <div class="form_box column is-two-thirds">
            <h1>Welcome back,</h1>
                <form @submit.prevent="onSubmit">
                    <!-- Email-->
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="" type="email" placeholder="Email" v-model="email" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                     </div>
                    <!-- Password -->
                     <div class="field mt-5">
                        <p class="control has-icons-left">
                            <input class="" type="password" placeholder="Password"  v-model="password" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <!-- Botón de envío-->
                    <div class="field mt-5">
                        <p class="control">
                            <button class="button is-link is-fullwidth is-rounded">
                            Login
                            </button>
                        </p>
                    </div>

                    <span class="register">Don't have an account yet? 
                        <router-link class="is-text is-light  mr-4 profile" :to="{name: 'registro'}"> Sign up here!</router-link>
                       </span>
                    
                </form>
        </div>
        <div class="img_box column ">
            <img src="../assets/todo.jpg" alt="">
        </div>
    </div>
        
    <!--Si ya tiene sesión iniciada y intenta entrar de nuevo al login-->
    <div class="section" v-else>
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
            
</template>

<script setup>
    import {onMounted, ref} from 'vue'
    import router from '../router'
    import {useAuthStore, useTaskStore} from '../store/index'
    import {getTasks, login} from '../api/index'

    const authStore = useAuthStore();

    /*Valores a rellenar en el login*/
    const email = ref();
    const password = ref();
    const taskStore = useTaskStore();

    onMounted(()=>{
        if(authStore.isAuth)
           router.replace({ path: '/' })

    })

    /* hacer login con la bd y si funciona, redirigir*/
    const onSubmit = async () =>{
            const status = await login(email.value, password.value);
            if(status != null && status != false){
                const login = authStore.login(status, email.value);
                if(login){
                    taskStore.tasks = await getTasks(status).then( (tasks) =>{
                        router.replace({ path: '/' })
                    })
                }
            }
    }
</script>

<style scoped>
    .login_template {
        width: 100%;
        margin: 0 auto;
        height: 100%;
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
        min-width: 500px;
        padding: 30px 0;
        display: grid;
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
    .register{
        text-align: center;
    }

    .img_box.column {
        padding: unset;
    }
    .img_box.column img {
        width: fit-content;
        height: 100%;
    }
</style>