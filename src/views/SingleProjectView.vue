<script>
import { store } from "../store.js";
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            store,
            project: null,
            loading: true,
        }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const url = this.store.base_api_url + '/api/projects/' + this.$route.params.slug
        //console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.results
                    this.loading = false
                } else {
                    //check if it is the right way to do this redirect
                    this.$router.replace({ name: 'not-found' })
                }
                //console.log(response);
            }).catch(error => {
                console.error(error)
                this.error = error.message
                this.loading = false
            })

    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card h-100" v-if="!loading">
                    <h3 class="p-2">
                        {{ project.title }}
                    </h3>
                    <img width="200" :src="store.getImagePath(project.cover_image)" alt="">
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
                </div>
                <div class="text-center pt-5" v-else>
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>