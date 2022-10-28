<template>
    <div class="historic">
        <div class="item" v-for="cambio in taskStore.historic">{{cambio}}</div>
    </div>
</template>

<script setup>
    import { getHistoric } from '../api/index'
    import { onMounted, ref } from 'vue';
    import { useAuthStore, useTaskStore } from '../store';

    const taskStore = useTaskStore();
    const authStore = useAuthStore();

    /* Cargamos las tareas archivadas desde la BD si el array está vacío */
    onMounted( async () =>{
        if(taskStore.historic == null || taskStore.historic.length == 0){
            const historic = await getHistoric(authStore.id);
            for (let i = 0; i < historic.length; i++) {
                /* Añadirlas al historial*/
                taskStore.setHistoric(historic[i]);
            }
        }
    })

</script>

<style scoped>
.historic {
    max-height: 80vh;
    max-width: 900px;
    margin: 30px auto;
    overflow-y: auto;
}

.item {
    background: var(--task-bg);
    color: var(--task-color);
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
}
</style>