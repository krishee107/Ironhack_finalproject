import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            theme: 'normal',
            themeColors: ['red', 'blue', 'green']
        }
    },
    actions: {
        setTheme(theme){
            this.theme = theme;
            document.documentElement.className = this.theme;
        },
        getTheme(){
            return this.theme;
        },
        randomColors(){
            let randomColor = Math.floor(Math.random() * this.themeColors.length);
            return this.themeColors[randomColor];
        }
    },
    persist: {
      enabled: true
    }
})