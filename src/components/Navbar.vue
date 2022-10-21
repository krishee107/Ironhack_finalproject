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
              
                <router-link class="navbar-item ml-4" :to="{name: 'home'}">
                  <span class="icon">
                    <i class="fa-solid fa-house-chimney"></i>
                  </span>
                  <span>Home</span>
                </router-link>

                <router-link class="navbar-item ml-4" :to="{name: 'archivadas'}">
                  <span class="icon">
                    <i class="fa-regular fa-folder"></i>
                  </span>
                  <span>Archived</span>
                </router-link>

                <router-link class="navbar-item  ml-4" :to="{name: 'historial'}">
                  <span class="icon">
                    <i class="fa-regular fa-clipboard"></i>
                  </span>
                  <span>Historic</span>
                </router-link>
            </div>
            <div class="navbar-end">
              <!-- Dark mode -->
              <div class="select mr-4">
                <select v-model="userTheme" @change="themeStore.setTheme(userTheme)">
                  <option value="undefined" hidden disabled>{{themeStore.getTheme()}}</option>
                  <option value="normal">Normal</option>
                  <option value="dark-mode">Dark mode</option>
                  <option value="pink-mode">Pink mode</option>
                  <option value="postit">Post it</option>
                  <option value="sky">Sky</option>
                  <option value="cyberpunk">Cyberpunk</option>
                </select>
              </div>
              <!-- Perfil -->
                <router-link class="navbar-item button  is-link is-light  mr-4 profile" :to="{name: 'perfil'}">Profile</router-link>
                <!-- Logout-->
                <button class="navbar-item button  is-danger is-light  logout" @click="authStore.logout()">Logout</button>            
            </div>
      </div>
      <div id="navbarBasicExample " class="navbar-menu" v-else>

            <div class="navbar-end">
                <router-link class="navbar-item button is-outlined is-success is-light mr-4 register" :to="{name: 'registro'}">Register</router-link>
                <router-link class="navbar-item button is-outlined is-info is-light login" :to="{name: 'login'}">Login</router-link>
            </div>
        
        </div>
    
    </nav>
    
    </template>

    <script setup>
    import {useAuthStore, useThemeStore} from '../store/index'
    import { onMounted } from 'vue';
    
    
    //const theme = ref();
    const themeStore = useThemeStore();
    const authStore = useAuthStore();
    
    onMounted( ()=>{
      document.documentElement.className =themeStore.theme;
    })

    </script>

    <style scoped>  
    nav{background-color: var(--nav-bg);}
    .navbar-item{color: var(--nav-color)}
    .button{min-width: 80px;}
    .profile, .logout, .register, .login{background-color: unset !important}
    nav select{
      background-color: var(--theme-picker-bg) !important;
      color: var(--theme-picker-color) !important;
      border-color: var(--theme-picker-color);
    }
    </style>