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
    <div class="background text-center">
        <div class="container text-light">
            <h1 class="pt-5">Ciao !</h1>
            <span>Sono</span><span>Yuri</span>
            <h1>Full Stack Web Developer</h1>
        </div>
    </div>
</template>


<style lang="scss">
.background {
    height: 100%;
    background-color: #212529;
}

h1 {
    font-size: 50px;
}

span {
    font-size: 240px;
}
</style>