<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <div class="control is-large is-loading">
                        <input class="input is-large" v-model="title" type="text" placeholder="Introduce el TITULO de la nueva tarea..." required v-on:keyup.enter="onSubmit">
                    </div>
                </div>
                <div class="field" v-if="title.length > 0">
                    <div class="control is-large">
                        <input class="input is-large" v-model="description" type="text" placeholder="Introduce la  descripción de la nueva tarea..." required  v-on:keyup.enter="onSubmit">
                    </div>
                </div>

            </form>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue'
import { newTask } from '../api/index'
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
    const status = await newTask(task).then((res)=>{
        taskStore.addTask();
        title.value = '';
        description.value= '';
    })
}
</script>

<style scoped>
form{
    max-width: 90%;
    margin: 0 auto;
}
</style>