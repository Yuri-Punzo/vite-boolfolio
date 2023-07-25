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
    <div class="background">
        <div class="container text-light">
            <h1 class="pt-5">Yuri Punzo - Junior Full Stack Web Developer</h1>
            <div>
                <img style="height: 250px;" src="../assets/love_baffuto.png" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.background {
    height: 100%;
    background-color: #212529;
}
</style>