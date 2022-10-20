<template>
    <div class="section">
        <div class="container">
            <div class="buttons is-justify-content-center is-flex">
                <button @click="changeFilter('all')" class=" button">All</button>
                <button @click="changeFilter('activa')" class=" button">Todo</button>
                <button @click="changeFilter('completada')" class="button">Done</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useTaskStore} from '../store/index'

const taskStore = useTaskStore();

const changeFilter = (filter) =>{
    taskStore.filterTask(filter);
};

</script>

<style scoped>
</style>