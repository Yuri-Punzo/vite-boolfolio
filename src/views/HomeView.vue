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
        <h1 class="pt-5">Yuri Punzo - Junior Full Stack Web Developer</h1>
        <div>
            <img src="../assets/IMG_20210419_132344.jpg" alt="">
        </div>
    </div>
</template>


<style lang="scss"></style>