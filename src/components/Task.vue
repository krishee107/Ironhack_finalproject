<template>
    <div class="section">
        <div class="container">
            <div class="cards columns is-multiline " >

                <div class="column is-4-desktop is-4-tablet is-6-mobile" v-for="task in taskStore.tasks">
                    <div class="card">
                        <header class="card-header card-header-title">
                            {{task.title}}
                        </header>
                        <div class="card-content">
                            <div class="content">
                                {{task.description}}        
                            </div>
                        </div>

                        {{task.created_at}}
                    </div>
                </div>

            </div>
        </div>
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