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
    <div class="text-light text-center">
        <h1 class="pt-5 pop_out">Ciao!</h1>
        <div class="container">
            <div class="row">
                <div class="col"><span class="i_am">Sono </span></div>
                <div class="col"><span class="name">Yuri</span></div>
            </div>
        </div>
        <h1 class="job_title">Full Stack Web Developer</h1>
    </div>
</template>


<style lang="scss" scoped>
span {
    font-size: 240px;
}

//ANIMATIONS
.pop_out {
    animation-name: pop_out;
    animation-duration: 2s;

}

@keyframes pop_out {
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
}

//TRYING OUT ANIMATIONS

.i_am {
    animation-fill-mode: both;
    animation-delay: 1s;
    animation-duration: 2s;
    animation-name: slide_in_from_left;
}

@keyframes slide_in_from_left {
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
}

.name {
    color: #9147ff;
    animation-fill-mode: both;
    animation-delay: 1s;
    animation-duration: 0.75s;
    animation-timing-function: ease-in;
    animation-name: slide_in_from_right;
}

@keyframes slide_in_from_right {
    0% {
        opacity: 0%;
        margin-left: 100%;
    }

    60% {
        opacity: 100%;
        margin-left: -10%;
    }

    70% {
        margin-left: 10%;
    }

    80% {

        margin-left: -5%;
    }

    90% {

        margin-left: 5%;
    }

    100% {

        margin-left: 0%;
    }
}

.job_title {
    animation-fill-mode: both;
    animation-delay: 1s;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-name: slide_in_from_bottom;
}

@keyframes slide_in_from_bottom {
    from {}

    to {}
}


//RESPONSIVE
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
</style>