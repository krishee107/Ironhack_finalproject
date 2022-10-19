import { defineStore } from 'pinia'

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
        getTask(){
          return this.tasks  
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

        addTask(task) {
            // TODO modificar el estado de task haciendo un push de la task
            // Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendriamos que hacer el getTask
        }



    },
    persist: {
      enabled: true
    }
})