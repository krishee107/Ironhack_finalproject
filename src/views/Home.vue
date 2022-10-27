<template>
    <div class="section">
        <div class="container">
            <!-- Si estás login-->
            <div class="logged" v-if="authStore.isAuth">
                <NewTask/>
                <Filter/>
                <TaskList/>
            </div>
            
            <!-- Si no estas login -->
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
    import {useAuthStore} from '../store/index'
    import TaskList from '../components/TaskList.vue';
    import NewTask from '../components/NewTask.vue';
    import Filter from '../components/Filter.vue';
    const authStore = useAuthStore();
</script>

<style scoped>
</style>