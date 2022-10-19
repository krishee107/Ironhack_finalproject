<template>

    <nav class="navbar p-4 is-align-items-center" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div class="navbar-menu" v-if="isAuth">
            <div class="navbar-start">
                <router-link class="navbar-item button is-link is-outlined" :to="{name: 'home'}">Home</router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item button is-danger is-light mr-4" >Logout</div>            
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
    import {useTaskStore, useAuthStore} from '../store/index'

    let isAuth = true;
    isAuth = useAuthStore.isAuth;
    </script>

    <style scoped>
    </style>