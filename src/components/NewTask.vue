<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-large is-rounded" v-model="title" type="text" placeholder="¿Cómo quieres llamar a la tarea?" required v-on:keyup.enter="onSubmit">
                        <span class="icon is-small is-right">
                            <i class="fa-solid fa-pencil"></i>
                        </span>
                    </p>
                </div>

                <div class="field" v-if="title.length > 0">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-large is-rounded" v-model="description" type="text" placeholder="¿Qué necesitas hacer?" required  v-on:keyup.enter="onSubmit">
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>

            </form>
    </div>


</template>

<script setup>
import {ref} from 'vue'
import { newTask, newHistoric } from '../api/index'
import { useAuthStore, useTaskStore} from '../store/index'

const authStore = useAuthStore();
const taskStore = useTaskStore();

const title = ref('');
const description = ref();

const onSubmit = async ()=>{
    let task = {
        user_id: authStore.id,
        title: title.value,
        description: description.value
    }
    const status = await newTask(task).then(async (res)=>{
        taskStore.addTask();
        title.value = '';
        description.value= '';
        const updateHistorial = await newHistoric(task.user_id, task.id, `Se ha creado una nueva tarea llamada: ${task.title}`).then(() => taskStore.addToHistoric(`Se ha creado una nueva tarea llamada: ${task.title}`))

    })
}
</script>

<style scoped>
form{
    max-width: 700px;
    margin: 0 auto;
}
input{
    background-color: var(--newtask-bg);
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    }
input::placeholder{color: var(--newtask-color)}
</style>