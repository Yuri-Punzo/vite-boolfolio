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
    <div class="my_container text-light text-center">
        <div class="">
            <h1 class="pop_out">Ciao!</h1>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="i_am animation_hero">Sono</div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="name animation_hero">Yuri</div>
                    </div>
                </div>
            </div>
            <h1 class="job_title">Full Stack Web Developer</h1>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.my_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.animation_hero {
    animation-fill-mode: both;
    animation-delay: 1s;
    animation-duration: 0.75s;
    animation-timing-function: ease-in;
    font-size: 15vw;
}

.pop_out {
    font-size: 5vw;
    animation-duration: 2s;
    animation-timing-function: ease-in;
    animation-name: pop_out;

}

@keyframes pop_out {
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
}

.i_am {
    animation-name: slide_in_from_left;
}

@keyframes slide_in_from_left {
    0% {
        opacity: 0%;
        transform: translateX(-100%);
    }

    60% {
        opacity: 100%;
        transform: translateX(10%);
    }

    70% {
        transform: translateX(-10%);
    }

    80% {

        transform: translateX(5%);
    }

    90% {

        transform: translateX(-5%);
    }

    100% {

        transform: translateX(0%);
    }
}

.name {
    color: #9147ff;
    animation-name: slide_in_from_right;
}

@keyframes slide_in_from_right {
    0% {
        opacity: 0%;
        transform: translateX(100%);
    }

    60% {
        opacity: 100%;
        transform: translateX(-10%);
    }

    70% {
        transform: translateX(10%);
    }

    80% {

        transform: translateX(-5%);
    }

    90% {

        transform: translateX(5%);
    }

    100% {

        transform: translateX(0%);
    }
}

.job_title {
    font-size: 4vw;
    animation-fill-mode: both;
    animation-delay: 2s;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-name: pop_out_delay;
}

@keyframes pop_out_delay {
    from {
        opacity: 0%;
    }

    to {
        opacity: 100%;
    }
}


//RESPONSIVE
@media screen and (min-width: 1920px) {
    .animation_hero {
        font-size: 270px;
    }

    .job_title {
        font-size: 72px;
    }

    .pop_out {
        font-size: 72px;
    }
}
</style>