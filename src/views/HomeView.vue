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
    <div class="background text-center text-light">
        <h1 class="pt-5 pop_out">Ciao!</h1>
        <span>Sono </span><span class="name">Yuri</span>
        <h1>Full Stack Web Developer</h1>
    </div>
</template>


<style lang="scss" scoped>
.background {
    height: 100%;
    background-color: #212529;

    span {
        font-size: 240px;
    }

    .name {
        color: #9147ff;
    }

    @media screen and (max-width: 1200px) {
        span {
            font-size: 200px;
        }
    }

    @media screen and (max-width: 780px) {
        span {
            font-size: 180px;
        }

    }

    @media screen and (max-width: 480px) {
        span {
            font-size: 120px;
        }

    }
}

.pop_out {
    animation-name: pop_out;
    animation-duration: 3s;

}

@keyframes pop_out {

    0%,
    25% {
        color: #212529;
    }

    100% {
        color: white;
    }
}
</style>