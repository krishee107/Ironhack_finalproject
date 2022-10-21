<template>
                <div class="column is-4-desktop is-6-tablet is-6-tablet" :class="props.task.status" >
                    <!-- Inicio de la card -->
                    <div class="card" >
                        <!-- Cabecera -->
                        <header class="card-header ">
                            <!-- Titulo -->
                            <div class="card-title card-header-title" >{{props.task.title}}</div>
                        </header>

                        <!-- Content -->
                        <div class="card-content">
                            <div class="content">
                                <div class="todo-description" >{{props.task.description}} </div>
                            </div>
                        </div>
                        <!-- Footer -->
                        <div class="task-footer is-flex is-align-items-end is-justify-content-end">
                            <time class=" is-family-monospace is-fullwidth pr-2" :datetime="moment(String(props.task.created_at)).format('YYYY/DD/MM')">{{moment(String(props.task.created_at)).format('hh:mm A - DD/MM/YYYY')}} </time>
                        </div>
                    </div>
                    <!---->
                </div>

</template>

<script setup>
import moment from 'moment'

const props = defineProps({task: Object})
</script>

<style scoped>
.card{
    display: grid;
    background: var(--task-bg);
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