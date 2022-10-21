<template>

    <nav class="navbar p-4 is-align-items-center" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item">
          <img src="http://www.todo.de/assets/todo-logo.png">
        </span>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div class="navbar-menu" v-if="authStore.isAuth">
            <div class="navbar-start">
              
                <router-link class="navbar-item button is-outlined ml-4" :to="{name: 'home'}">
                  <span class="icon">
                    <i class="fa-solid fa-house-chimney"></i>
                  </span>
                  <span>Home</span>
                </router-link>

                <router-link class="navbar-item button is-outlined ml-4" :to="{name: 'home'}">
                  <span class="icon">
                    <i class="fa-regular fa-folder"></i>
                  </span>
                  <span>Archived</span>
                </router-link>

                <router-link class="navbar-item button is-outlined ml-4" :to="{name: 'home'}">
                  <span class="icon">
                    <i class="fa-regular fa-clipboard"></i>
                  </span>
                  <span>Historic</span>
                </router-link>
            </div>
            <div class="navbar-end">
              <!-- Dark mode -->
              <div class="select mr-4">
                <select v-model="userTheme" @change="authStore.setTheme(userTheme)">
                  <option value="undefined" hidden disabled>{{authStore.getTheme()}}</option>
                  <option value="normal">Normal</option>
                  <option value="postit">Post it</option>
                  <option value="sky">Sky</option>
                  <option value="bubbles">Bubbles</option>
                  <option value="dark-mode">Dark mode</option>
                  <option value="pink-mode">Pink mode</option>
                </select>
              </div>
              <!-- Perfil -->
                <router-link class="navbar-item button is-link is-light  mr-4" :to="{name: 'home'}">Profile</router-link>
                <!-- Logout-->
                <button class="navbar-item button is-danger is-light " @click="authStore.logout()">Logout</button>            
            </div>
      </div>
      <div id="navbarBasicExample " class="navbar-menu" v-else>

            <div class="navbar-end">
                <router-link class="navbar-item button is-success is-light mr-4" :to="{name: 'registro'}">Register</router-link>
                <router-link class="navbar-item button is-info is-light" :to="{name: 'login'}">Login</router-link>
            </div>
        
        </div>
    
    </nav>
    
    </template>

    <script setup>
    import {useAuthStore} from '../store/index'
    import { onMounted } from 'vue';
    
    
    //const theme = ref();
    const authStore = useAuthStore();
    
    onMounted( ()=>{
      document.documentElement.className = authStore.theme;
    })

    </script>

    <style scoped>  
    .button{min-width: 80px;}
    </style>