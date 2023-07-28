<script>
import { store } from '../store.js'
import { ref } from 'vue';

export default {
    name: 'HomeView',
    data() {
        return {
            store,
        }
    },
    mounted() {
        store.callAxios(store.url);

        let span_1 = ref(null);
        let span_2 = ref(null);

        span_1 = this.$refs.span_1;
        span_2 = this.$refs.span_2;

        span_1.classlist.add("start_animation")
    }
}
</script>

<template>
    <div class="text-light text-center">
        <h1 class="pt-5 pop_out">Ciao!</h1>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <span class="i_am animation_hero justify-content-around" ref="span_1">Sono</span>
                </div>
                <div class="col-12 col-md-6">
                    <span class="name animation_hero justify-content-around" ref="span_2">Yuri</span>
                </div>
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

//ANIMATIONS

.animation_hero {
    display: flex;
    animation-fill-mode: both;
    animation-delay: 1s;
    animation-duration: 0.75s;
    animation-timing-function: ease-in;
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


//RESPONSIVE
@media screen and (max-width: 1200px) {
    span {
        font-size: 200px;
    }
}

@media screen and (max-width: 992px) {
    span {
        font-size: 160px;
    }
}

@media screen and (max-width: 768px) {
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