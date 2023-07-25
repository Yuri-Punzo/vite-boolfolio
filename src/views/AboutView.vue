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
    <div class="background">
        <div class="container text-light">

            <h1 class="pt-5">About</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem, officiis id expedita non
                    architecto.
                    Mollitia repellat sit eaque voluptates assumenda.</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.background {
    height: 100%;
    background-color: #212529;
}
</style>