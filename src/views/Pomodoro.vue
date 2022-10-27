<template>
    <!-- si tiene sesión iniciada-->
    <div class="section" v-if="authStore.isAuth">
       <div class="container">
            <div class="timer">
                <label class="title">Timer:</label>
                <div class="time">
                    <div class="hours">{{displayHours}}</div>
                    <div>:</div>
                    <div class="minuts">{{displayMinutes}}</div>
                    <div>:</div>
                    <div class="seconds">{{displaySeconds}}</div>
                </div>

                <div class="buttons">
                    <!-- Si ya tenemos el cronometro-->
                    <div v-if="timerSet">
                        <div class="button is-rounded is-link" @click="resetPomodoro">Reset</div>
                        <div class="button is-rounded is-link" @click="stopPomodoro">Stop</div>
                    </div>
                    <!-- Si aún no tenemos el cronómetro-->
                    <div v-else>
                        <div class="button is-rounded is-link" @click="sumPomodoro(60)">Add 1h</div>
                        <div class="button is-rounded is-link" @click="sumPomodoro(5)">Add 5min</div>
                        <div class="button is-rounded is-link" @click="sumPomodoro(1)">Add 1min</div>
                        <div class="button is-rounded is-link" @click="startPomodoro">Start</div>
                    </div>
                </div>

            </div>
       </div>
    </div>

    <!-- Si no tiene sesión iniciada-->
    <div class="section" v-else>
        <article class="message is-danger notLogged">
                <div class="message-header">
                    <p>Danger</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    Debes iniciar sesión primero        
                </div>
            </article>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useAuthStore } from '../store';
import moment from 'moment';


let currentTime = 0
let timerSet = ref(false)
let startTime = 0;
let diff = ref(0);
let hours = ref(0);
let minuts = ref(0);
let seconds = ref(0);

const sumPomodoro = (minutes) =>{
    currentTime += minutes;
}

const resetPomodoro = ()=>{currentTime = startTime}

const stopPomodoro = () =>{
    //clear interval
}

const startPomodoro = () =>{
    //Marcamos el tiempo inicial por si quiere reiniciar
    startTime = currentTime;
    //Guardamos la hora actual
    const now = new Date();
    const nowMoment = moment(now)
    //Sumamos los minutos deseados a la hora actual
    const objective = moment(now).add(currentTime, 'minutes').toDate();
    const objectiveMoment = moment(objective)

    //Conseguimos los minutos de diferencia
    diff = objectiveMoment.diff(nowMoment, 'minutes') 
    console.log(diff)
}

watch(diff, (currentValue, oldValue) => {
  console.log(currentValue);
  console.log(oldValue);
});

const authStore = useAuthStore();
</script>


<style scoped>
    .timer{
        background: white;
        margin: 0 auto;
        max-width: 700px;
        padding: 30px;
        border-radius: 24px;
    }
    .time{
        display: flex;
        margin: 0 auto;
        font-size: 5em;
    }
    .buttons{
        margin:0 auto;
    }
</style>