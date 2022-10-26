<template>
    <div class="section">
        <div class="container">
            <div class="buttons is-justify-content-center is-flex">
                <button @click="onFilter('all')" class=" button is-normal">All</button>
                <button @click="onFilter('activa')" class=" button is-normal">Todo</button>
                <button @click="onFilter('completada')" class="button is-normal">Done</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useAuthStore, useTaskStore} from '../store/index'
    import { getTasks} from '../api'


    
    const taskStore = useTaskStore();
    const authStore = useAuthStore();
    
    const emits = defineEmits(['filter'])

    const onFilter = (filter) =>{
        emits('filter', filter);
    }

    const changeFilter = async (filter) =>{
        taskStore.filterTask(filter);
        emits(taskStore.filter)
        /*taskStore.tasks = await getTasks(authStore.id);
        taskStore.filterTask(filter);
        location.reload();*/
    };

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