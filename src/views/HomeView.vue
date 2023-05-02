<script>
import { store } from '../store.js'

export default {
    name: 'HomeView',
    data() {
        return {
            store,
        }
    },
    mounted() {
        store.callAxios(store.url);
    }
}
</script>

<template>
    <div class="container">
        <h1 class="pt-5">Yuri Punzo - Junior Full Stack Developer</h1>
        <div>
            <p>CONTENUTO DI PRESENTAZIONE</p>
        </div>
    </div>
</template>


<style lang="scss"></style>