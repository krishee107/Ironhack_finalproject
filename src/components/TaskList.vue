<template>
        <div class="section" >
            <div class="container">
                <div class="taskList">
                    <div class="cards columns is-multiline " >
                        <Task :id="task.id" :key="task.id"  v-for="task in tasks" :task="task"/>
                    </div>
                </div>
            </div>
        </div>
</template>


<script setup>
import Task from './Task.vue'
import { useTaskStore} from '../store/index'
import { ref } from 'vue';

const taskStore = useTaskStore();
const tasks = ref(taskStore.tasks);

</script>

<style scoped>
</style>