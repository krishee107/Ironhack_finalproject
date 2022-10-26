<template>
    <div class="section">
        <div class="container">
            <div class="logged" v-if="authStore.isAuth">
                <NewTask/>
                <Filter @filter="onFilter" />
                <TaskList :tasks="tasks" />
            </div>
            

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
    import {useAuthStore, useTaskStore} from '../store/index'
    import TaskList from '../components/TaskList.vue';
    import NewTask from '../components/NewTask.vue';
    import Filter from '../components/Filter.vue';
    import { ref, computed } from 'vue';
    import { getTasks } from '../api';

    const authStore = useAuthStore();
    const taskStore = useTaskStore();
    let tasks = ref(taskStore.tasks);

    const onFilter = async (filter) => {
        taskStore.tasks = await getTasks(authStore.id)
        tasks = await taskStore.filterTask(filter);
        location.reload();

    }
    


</script>

<style scoped>
</style>