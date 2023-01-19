import { reactive } from 'vue'
import axios from 'axios'
export const store = reactive({

    projects: '',
    loading: true,
    base_api_url: 'http://127.0.0.1:8000',
    url: 'http://127.0.0.1:8000/api/projects',

    callAxios(call) {
        axios.get(call)
            .then(response => {
                this.projects = response.data.results;
                this.loading = false
            })
            .catch(error => {
                console.error(error)
                this.error = error.message
                this.loading = false
            })
    },
    /* getImagePath(path) {

        if (path) {
            return this.base_api_url + '/storage/' + path
        }
        return '/img/placeholder.png'
    }, */
    prevPage(url) {

        store.callAxios(url)
    },
    nextPage(url) {

        store.callAxios(url)
    }


})