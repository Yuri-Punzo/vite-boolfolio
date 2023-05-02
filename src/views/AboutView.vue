<script>
import { store } from '../store.js'

export default {
    name: 'AboutView',
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

        <h1 class="pt-5">About</h1>
        <div>
            <p>RACCONTARE LA MIA STORIA, ANCHE AL DI LA DELLA PROGRAMMAZIONE ?</p>
        </div>
    </div>
</template>


<style lang="scss"></style>