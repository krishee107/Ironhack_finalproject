<template>
    <div v-for="task in taskStore.tasks">
        Id: {{task.id}}
        {{task.title}}
        {{task.description}}
        {{task.created_at}}
    </div>
</template>

<script setup>
import {useTaskStore} from '../store/index'
import {getTasks} from '../api/index'
import { onMounted } from 'vue';

const taskStore = useTaskStore();
let task ; 

onMounted(async () =>{
    if(taskStore.tasks.length == 0){
        task = await getTasks();
        taskStore.tasks = task;
    }
})
</script>

<style scoped>
</style>