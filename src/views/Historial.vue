<template>
    <div class="historic">
        <div class="item" v-for="cambio in historial">{{cambio}}</div>
    </div>
</template>

<script setup>
import { getHistoric } from '../api/index'
import { onMounted, ref } from 'vue';
import { useAuthStore, useTaskStore } from '../store';

const taskStore = useTaskStore();
const authStore = useAuthStore();
const historial = ref(taskStore.historic);

onMounted( async () =>{
    if(taskStore.historic == null || taskStore.historic.length == 0){
        const historic = await getHistoric(authStore.id);
        taskStore.setHistoric(historic);
        console.log(historic)
    }
})

</script>

<style scoped>
</style>