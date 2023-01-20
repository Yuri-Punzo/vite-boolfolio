<script>
import { store } from '../store.js'
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'HomeView',
    components: {
        ProjectCard
    },
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

    <div class="container p-5">
        <section v-if="store.projects">
            <div class="row g-4">
                <ProjectCard v-for="project in store.projects.data" :project="project" />
            </div>
            <!-- /ProjectCard -->
            <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                <ul class="pagination    ">
                    <li class="page-item" v-if="store.projects.prev_page_url"
                        @click="store.prevPage(store.projects.prev_page_url)">
                        <a class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <!-- /prevPage -->
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                        store.projects.current_page
                    }}</a></li>
                    <!-- currentPage -->
                    <li class="page-item" v-if="store.projects.next_page_url"
                        @click="store.nextPage(store.projects.next_page_url)">
                        <a class="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    <!-- /nextPage -->
                </ul>
            </nav>
        </section>
        <section v-else>
            <div class="no_records">
                <h4>Sorry no records inside the database.</h4>
            </div>
        </section>
    </div>

</template>


<style lang="scss">
.my_main {
    height: 80vh;
}
</style>