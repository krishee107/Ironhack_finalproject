<template>

    <div class="section">
        <div class="container">
            
            <div class="profile">
                <figure class="media-left is-flex is-justify-content-center">
                    <p class="image is-128x128 " v-if="authStore.avatar!= null && authStore.avatar != 'Not set'">
                        <img :src="authStore.avatar" class="is-rounded ">
                    </p>
                    <p class="image is-128x128 " v-else >
                        <img src="https://bulma.io/images/placeholders/128x128.png" class="is-rounded " >
                    </p>                   
                </figure>
                <div class="field">
                    <label class="label">Usuario</label>
                    <div class="control">
                    <input type="text" class="input"  disabled :value="username" placeholder="No has especificado un usuario">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Website</label>
                    <div class="control">
                    <input type="text" class="input"  disabled :value="website" placeholder="No has especificado una web">
                    </div>
                </div>
            </div>
        </div>

</div>

<div class="section">
    <div class="container">
            <form @submit.prevent="setSupaProfile()">
                <input className='my-4 border-2 border-gray-500 rounded-xl p-4 w-full' type='username' placeholder='Enter a username' v-model="username" />
                <button  className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'>
                    <span>Update profile</span>
                </button>
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
 await updateProfile(authStore.id, username.value);
}

onMounted( async() =>{
    if(authStore.username == 'Not set'){
        const profile =  await getProfile(authStore.id);
        authStore.setProfile(profile.username, profile.avatar, profile.website);
    }
})

</script>

<style scoped>
.section{
    border-radius: 14px;
    padding: 30px;
    max-width: 400px;
    margin: 20px auto;    
    background: var(--task-bg);
}
form, .label{
    color: var(--task-title) !important;
}
</style>