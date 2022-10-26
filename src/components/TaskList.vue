<template>
        <div class="section" >
            <div class="container">
                <div class="taskList">
                    <div class="cards columns is-multiline " >
                        <Task :id="task.id" :key="task.id"  v-for="task in props.tasks" :task="task" />
                    </div>
                </div>
            </div>
        </div>
</template>


<script setup>
import Task from './Task.vue'
import { useTaskStore} from '../store/index'
import { ref, watch } from 'vue';

const taskStore = useTaskStore();
//const tasks = ref(taskStore.tasks);

const props = defineProps({tasks: Object})
</script>

<style scoped>
button{
    min-width: 100px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 20%), 0 0 0 1px rgb(10 10 10 / 2%);
    background-color: var(--filter-bg);
    border-color: var(--filter-bg);
    color: var(--filter-color);
}button:hover{
    color:var(--filter-color)
}
</style>