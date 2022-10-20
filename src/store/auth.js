import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            // Nos indicara si el usuario esta autenticado
            isAuth: false,
            // Guardaremos el id de supabase que nos dara al hacer el login
            id: undefined,
            email: '',
            theme: 'normal'
        }
    },
    actions: {
        login(id, email) {
            // TODO cambiar el estado  de autenticacion e id del usuario
            this.isAuth=true;
            this.id = id;
            this.email = email;
            return true
        },

        logout(){
            // TODO cambiar el estado de autenticacion e id del usuario
            this.isAuth=false;
            return true;
        },
        setTheme(theme){
            this.theme = theme;
            document.documentElement.className = this.theme;
        },
        getTheme(){
            return this.theme;
        }
    },
    persist: {
      enabled: true
    }
})