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
            <span>Sono </span><span class="name">Yuri</span>
            <h1>Full Stack Web Developer</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.background {
    height: 100%;
    background-color: #212529;
}

span {
    font-family: 'Courier Prime', monospace;
    font-size: 240px;
}

.name {
    color: #9147ff;
}
</style>