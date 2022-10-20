<template>
    <div class="section">
        <div class="container">
            <div class="cards columns is-multiline " >

                <div class="column is-4-desktop is-4-tablet is-6-mobile" :class="task.status" v-for="task in taskStore.tasks">
                    <div class="card">
                        <header class="card-header card-header-title"  contenteditable @blur="updateContent($event, 'title', task)">
                            {{task.title}}
                        </header>

                        <div class="card-content">
                            <div class="content">
                                <div class="todo-description" contenteditable @blur="updateContent($event, 'description', task)">{{task.description}} </div>
                                <div class="todo-date">{{moment(String(task.created_at)).format('DD/MM/YYYY - hh:mm')}} </div>
                            </div>
                            <div class="buttons columns has-text-centered" v-if="task.status == 'activa'" >
                                <i  @click="cambiarEstadoTarea(task.id, task)" class="column fa-regular fa-square-check"></i>
                                <i  @click="borrarTarea(task.id)" class="column fa-regular fa-trash-can"></i>
                            </div>
                            <div v-else>
                                <div class="buttons columns has-text-centered">
                                    <i @click="cambiarEstadoTarea(task.id, task)"  class="column fa-solid fa-arrow-rotate-right"></i>
                                    <i  @click="borrarTarea(task.id)" class="column fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
import {useTaskStore} from '../store/index'
import {deleteTask, getTasks, updateTask} from '../api/index'
import { onMounted } from 'vue';
import moment from 'moment'

const taskStore = useTaskStore();
let task ; 
//taskStore.resetTask();
onMounted(async () =>{
    if(taskStore.tasks.length == 0){
        task = await getTasks();
        taskStore.tasks = task;
    }
})

const updateContent = async (e, type, task) =>{
    if(type == 'title')
        task.title = e.target.innerText;
    else if(type== 'description') task.description = e.target.innerText;
    else return false;

    const status = await updateTask(task.id, task).then((res) =>{
        taskStore.updateTask(task.id, task);
    })
}

const borrarTarea = async (id) =>{
    const status = await deleteTask(id).then(() =>{
        taskStore.deleteTask(id);
    });
}

const cambiarEstadoTarea = async(id, task) =>{
    if(task.status == "completada")
        task.status = "activa"
    else if(task.status = "activa")
        task.status = "completada"  
        
    const status = await updateTask(id, task).then((res) =>{
        taskStore.updateTask(id, task);
    })
}

</script>

<style scoped>

i{
    cursor:  pointer;
    font-size: 20px;
}i:hover{font-weight: bold;}
i.fa-square-check{color:green}
i.fa-pen-to-square{color:blue}
i.fa-trash-can{color:red}


/* Tareas completadas */
.completada .card {
    background: #efefef;
    border: solid 1px lightgray;
}
</style>