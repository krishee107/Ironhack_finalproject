<template>
        <div class="container">
            <div class="cards columns is-multiline " >
                <div class="column is-4-desktop is-6-tablet is-6-tablet" :class="task.status" v-for="task in taskStore.tasks">
                    <!-- Inicio de la card -->
                    <div class="card">
                        <!-- Cabecera -->
                        <header class="card-header ">
                            <!-- Titulo -->
                            <div class="card-title card-header-title" contenteditable @blur="updateContent($event, 'title', task)">{{task.title}}</div>
                            <!-- Botones -->
                                <!--Para fichas activas-->
                                <div class="navbar-item has-dropdown is-hoverable" v-if="size >= 1024">
                                    <a class="navbar-link"></a>
                                    <div class="navbar-dropdown"   v-if="task.status == 'activa'">
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
                                 <!-- Para fichas activas MOBILE -->
                                 <div class="buttons-mobile" v-else>
                                    <span class="icon pr-2"  @click="cambiarEstadoTarea(task.id, task)"><i class="fa-regular fa-square-check"></i></span>
                                    <span class="icon pr-2"><i class="fa-regular fa-folder"></i></span>
                                    <span class="icon pr-2" @click="borrarTarea(task.id)"><i class="fa-regular fa-trash-can"></i></span>
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
import {useTaskStore, useAuthStore} from '../store/index'
import {deleteTask, getTasks, updateTask} from '../api/index'
import { onMounted, ref, onUpdated } from 'vue';
import moment from 'moment'
const taskStore = useTaskStore();
const authStore = useAuthStore();
const size = ref(screen.width);
let task ; 

onMounted(async () =>{
    if(taskStore.tasks.length == 0){
        task = await getTasks();
        taskStore.tasks = task;
    }
    if(authStore.theme == "postit")
        console.log("YES")
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
.card{
    display: grid;
    background-color: var(--task-bg);
    height: var(--task-minheight);
    grid-template-rows: min-content auto auto;
}

i:hover{
    cursor:  pointer;
    font-weight: bold;
}
.task-delete{color: red}

/*Cards */
.card-title{
    font-size: 14px;
    line-height: 20px;
    color: var(--task-title);
    text-transform: capitalize;
}
.card-header{height: fit-content;}
.todo-description {
    max-height: 200px;
    overflow: auto;
    color: var(--task-color);
    word-break: break-word;
    text-transform: capitalize;
}
.task-footer time{
    font-size: 10px;
    color: var(--task-hour);
}
/* Tareas completadas */
.completada .card {
    background: var(--task-complete-bg);
    border: var(--task-complete-border);
}
.completada .card-title, .completada .todo-description{
    text-decoration: line-through;
    color: var(--task-complete-color) !important;
}

</style>