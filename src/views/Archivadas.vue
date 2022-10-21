<template>
    <div class="section">
        <div class="container">
            <div class="cards columns is-multiline " >
            <ArchivedTask v-for="task in archivadas" :task="task"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import ArchivedTask from '../components/ArchivedTask.vue';
import {useTaskStore} from '../store/index';
import {getArchivedTasks} from '../api/index'
import { onMounted, ref } from 'vue';

const taskStore = useTaskStore();
let archivadas = ref(taskStore.archivedTask);

onMounted(async () =>{
    if(taskStore.archivedTask.length == 0){
        archivadas = await getArchivedTasks();
        taskStore.archivedTask = archivadas;
    }
})

</script>
<style scoped>
</style>