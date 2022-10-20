import { defineStore } from 'pinia'
import { getTasks } from '../api/index'

export const useTaskStore = defineStore('task', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            // Guardaremos los task que nos de supabase
            tasks: []
        }
    },
    actions: {
        async getTask() {
             this.tasks =  await getTasks();
             console.log(this.tasks)
             return this.tasks;
        },
        resetTask(){
            this.tasks = [];
            return true;
        },
        setTask() {
            //TODO guardar en el stado las task que nos de supabase
        },

        updateTask(id, task) {
            for(let i = 0; i< this.tasks.length; i++){
                if(this.tasks[i].id == id){
                    this.tasks[i] = task;
                }  
            }
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter(function(task) { return task.id != id; }); 
            return true;
        },

        addTask() {
            //reseteamos el array de tasks
            this.resetTask();
            //Añadimos todos de nuevo
            this.getTask();
        }



    },
    persist: {
      enabled: true
    }
})