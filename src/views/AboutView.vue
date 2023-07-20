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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, aliquid enim! Accusantium?</p>
        </div>
    </div>
</template>


<style lang="scss"></style>