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
                                <div class="todo-description">{{task.description}} </div>
                                <div class="todo-date">{{moment(String(task.created_at)).format('DD/MM/YYYY - hh:mm')}} </div>
                            </div>
                            <div class="buttons columns has-text-centered" >
                                <i class="column fa-regular fa-square-check"></i>
                                <i class="column fa-solid fa-pen-to-square"></i>
                                <i class="column fa-regular fa-trash-can"></i>
                            </div>
                        </div>

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
import moment from 'moment'

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