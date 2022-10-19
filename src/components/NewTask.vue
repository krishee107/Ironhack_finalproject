<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="">
                <div class="field">
                    <div class="control is-large is-loading">
                        <input class="input is-large" type="text" placeholder="Introduce la nueva tarea...">
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
form{
    max-width: 90%;
    margin: 0 auto;
}
</style>