<template>
        <div class="container">
            <div class="cards columns is-multiline " >

                <div class="column is-4-desktop is-4-tablet is-6-mobile" :class="task.status" v-for="task in taskStore.tasks">
                    <!-- Inicio de la card -->
                    <div class="card">
                        <!-- Cabecera -->
                        <header class="card-header ">
                            <!-- Titulo -->
                            <div class="card-title card-header-title" contenteditable @blur="updateContent($event, 'title', task)">{{task.title}}</div>
                            <!-- Botones -->
                                <!--Para fichas activas-->
                                <div class="navbar-item has-dropdown is-hoverable" >
                                    <a class="navbar-link"></a>
                                    <div class="navbar-dropdown"  v-if="task.status == 'activa'">
                                        <a class="navbar-item" @click="cambiarEstadoTarea(task.id, task)">
                                            <span class="icon pr-2"><i class="fa-regular fa-square-check"></i></span>
                                            <span>Complete job</span> 
                                        </a>
                                        <a class="navbar-item">
                                            <span class="icon pr-2"><i class="fa-regular fa-folder"></i></span>
                                            <span>Archive job</span> 
                                        </a>
                                        <hr class="navbar-divider">
                                        <a class="navbar-item task-delete" @click="borrarTarea(task.id)">
                                            <span class="icon pr-2"><i class="fa-regular fa-trash-can"></i></span>
                                            <span>Delete job</span> 
                                        </a>

                                </div>
                                <!-- Para fichas completas -->
                                <div class="navbar-dropdown" v-else>
                                    <a class="navbar-item" @click="cambiarEstadoTarea(task.id, task)">
                                        <span class="icon pr-2"><i class="fa-solid fa-arrow-rotate-right"></i></span>
                                        <span>Re do job</span> 
                                    </a>
                                    <a class="navbar-item">
                                        <span class="icon pr-2"><i class="fa-regular fa-folder"></i></span>
                                        <span>Archive job</span> 
                                    </a>
                                    <hr class="navbar-divider">
                                    <a class="navbar-item task-delete" @click="borrarTarea(task.id)">
                                        <span class="icon pr-2"><i class="fa-regular fa-trash-can"></i></span>
                                        <span>Delete job</span> 
                                    </a>
                                </div>
                            </div>                

                        </header>

                        <!-- Content -->
                        <div class="card-content">
                            <div class="content">
                                <div class="todo-description" contenteditable @blur="updateContent($event, 'description', task)">{{task.description}} </div>
                            </div>
                        </div>
                        <!-- Footer -->
                        <div class="task-footer is-flex is-align-items-end is-justify-content-end">
                            <time class=" is-family-monospace is-fullwidth pr-2" :datetime="moment(String(task.created_at)).format('YYYY/DD/MM')">{{moment(String(task.created_at)).format('hh:mm A - DD/MM/YYYY')}} </time>
                        </div>
                    </div>
                    <!---->
                </div>

            </div>
        </div>
</template>

<script setup>
import {useTaskStore} from '../store/index'
import {deleteTask, getTasks, updateTask} from '../api/index'
import { onMounted, ref } from 'vue';
import moment from 'moment'

const taskStore = useTaskStore();
let task ; 

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
.card{display: grid;}

i:hover{
    cursor:  pointer;
    font-weight: bold;
}
.task-delete{color: red}

/*Cards */
.card-title{
    font-size: 14px;
    line-height: 20px;
    color: var(--title-color);
    text-transform: capitalize;
}
.todo-description {
    max-height: 200px;
    overflow: auto;
    word-break: break-word;
}
.task-footer time{font-size: 10px;}
/* Tareas completadas */
.completada .card {
    background: #efefef;
    border: solid 1px lightgray;
}
.completada .card-title, .completada .todo-description{text-decoration: line-through;}
</style>