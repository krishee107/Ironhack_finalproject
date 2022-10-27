<template>

    <div class="section columns">
        <!-- Perfil del usuario -->
        <div class="box column is-two-fifths">
            <div class="profile">
                <!-- Avatar -->
                <figure class="media-left is-flex is-justify-content-center">
                    <!-- Si no hay avatar predefinido -->
                    <p class="image is-128x128 " v-if="authStore.avatar!= null && authStore.avatar != 'Enter an avatar URL'">
                        <img :src="authStore.avatar" class="is-rounded ">
                    </p>
                    <!-- Si el usuario tiene avatar -->
                    <p class="image is-128x128 " v-else >
                        <img src="https://bulma.io/images/placeholders/128x128.png" class="is-rounded " >
                    </p>                   
                </figure>
                <!-- Nombre de usuario -->
                <div class="field">
                    <label class="label">Usuario</label>
                    <div class="control">
                    <input type="text" class="input"  disabled :value="username" placeholder="No has especificado un usuario">
                    </div>
                </div>
                <!-- Website del usuario -->
                <div class="field">
                    <label class="label">Website</label>
                    <div class="control">
                    <input type="text" class="input"  disabled :value="website" placeholder="No has especificado una web">
                    </div>
                </div>
            </div>
        </div>
        <!-- Formulario para actualizar perfil -->
        <div class="box column is-two-fifths">
            <form @submit.prevent="setSupaProfile()">
                <h2 class="title">Actualizar perfil:</h2>
                <!-- Nuevo username -->
                <label class="label mt-4">Username:</label>
                <input class="input " type='text' placeholder='Enter a new username'   v-model="username" />
                <!-- Nuevo avatar -->
                <label class="label mt-4">Avatar URL:</label>
                <input class="input " type='text' placeholder='Enter a avatar (url)'    v-model="avatar"/>
                <!-- Nuevo website -->
                <label class="label mt-4">Website:</label>
                <input class="input " type='text' placeholder='Enter a website'   v-model="website"/>
                <button  class="button is-fullwidth mt-4">Update profile</button>
            </form>
        </div>
</div>


</template>

<script setup>
    import { updateProfile, getProfile} from '../api/index'
    import { useAuthStore } from '../store/index'
    import { ref, onMounted } from 'vue';

    const authStore = useAuthStore();
    let username = ref(authStore.username);
    let avatar = ref(authStore.avatar);
    let website = ref(authStore.website);

    const setSupaProfile = async () =>{
    const response =await updateProfile(authStore.id, username.value, avatar.value, website.value);
    authStore.setProfile(username.value, avatar.value, website.value)
    console.log(response)
    }

    onMounted( async() =>{
        if(authStore.username == 'Enter a username'){
            const profile =  await getProfile(authStore.id);
            authStore.setProfile(profile.username, profile.avatar_url, profile.website);
            username.value = profile.username;
            avatar.value = profile.avatar_url;
            website.value = profile.website;
        }
    })

</script>

<style scoped>
.box{
    border-radius: 14px;
    padding: 30px;
    margin: 20px auto;    
    background: var(--task-bg);
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
}

form, .label, h2{
    color: var(--task-title) !important;
}
button{
    background: var(--filter-bg);
    color: var(--filter-color);
    border-color: var(--filter-bg);
}
button:hover{color: white}
</style>