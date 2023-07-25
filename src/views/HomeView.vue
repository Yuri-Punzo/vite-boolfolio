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
            <h1 class="pt-5">Hello !</h1>
            <h1>I Am Yuri</h1>
        </div>
    </div>
</template>


<style lang="scss">
.background {
    height: 100%;
    background-color: #212529;
}
</style>