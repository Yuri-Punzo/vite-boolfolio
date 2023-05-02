<script>
import { store } from "../store.js";

export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="col-12 col-md-6 col-xl-4">
        <div class="card h-100">
            <h3 class="p-2">
                {{ project.title }}
            </h3>
            <div class="d-flex justify-content-center">
                <img width="200" :src="store.getImagePath(project.cover_image)" alt="">
            </div>
            <div class="p-2">
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
            </div>
            <div class="p-2">
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Show</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>