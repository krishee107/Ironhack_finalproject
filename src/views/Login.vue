<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" v-model="email" placeholder="e.g. alexsmith@gmail.com">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password" placeholder="*********">
                    </div>
                </div>

                <button type="submit">Login me!</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import router from '../router'

const email = ref();
const password = ref();

const onSubmit = () =>{
    router.replace({ path: '/' })
}
</script>

<style scoped>
</style>