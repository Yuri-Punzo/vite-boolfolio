<script>
import { store } from "../store.js";

export default {
    name: 'SingleProjectView',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card h-100">
                    <h3 class="p-2">
                        <!-- {{ project.title }} -->
                        {{ $route.params.slug }}
                    </h3>
                    <!-- <img width="200" :src="store.getImagePath(project.image)" alt=""> -->
                    <!-- <div class="p-2">
                        {{ project.description }}
                    </div>
                    <div class="p-2" v-if="project.technologies.length > 0">
                        <h5>Technologies:</h5>
                    </div>
                    <div class="ps-2">
                        <span v-for="tech in project.technologies">
                            #{{ tech.name }}
                        </span>
                    </div>
                    <div class="p-2" v-if="project.type">
                        <h5>Type:</h5>
                        {{ project.type.name }}
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>