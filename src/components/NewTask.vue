<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <div class="control is-large is-loading">
                        <input class="input is-large" v-model="title" type="text" placeholder="Introduce el TITULO de la nueva tarea..." required>
                    </div>
                </div>
                <div class="field" v-if="title.length > 0">
                    <div class="control is-large">
                        <input class="input is-large" v-model="description" type="text" placeholder="Introduce la  descripción de la nueva tarea...">
                    </div>
                </div>

            </form>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue'

const title = ref('');
const description = ref();

const onSubmit = ()=>{
    console.log(title, description)
}
</script>

<style scoped>
form{
    max-width: 90%;
    margin: 0 auto;
}
</style>