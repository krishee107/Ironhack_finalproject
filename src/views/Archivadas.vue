<template>
    <div class="section">
        <div class="container">
            <div class="cards columns is-multiline " >
                <ArchivedTask v-for="task in taskStore.archivedTask" :task="task"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ArchivedTask from '../components/ArchivedTask.vue';
    import {useAuthStore, useTaskStore} from '../store/index';
    import {getArchivedTasks} from '../api/index'
    import { onMounted } from 'vue';

    const taskStore = useTaskStore();
    const authStore = useAuthStore();
    let archivadas;

    /* Cargamos las tareas archivadas desde la BD si el array está vacío */
    onMounted(async () =>{
        if(taskStore.archivedTask == null || taskStore.archivedTask.length == 0){
            archivadas = await getArchivedTasks(authStore.id);
            taskStore.archivedTask = archivadas;
        }
    })

</script>

<style scoped>
</style>