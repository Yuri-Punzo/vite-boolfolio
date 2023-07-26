<script>
import { store } from '../store.js'

export default {
    name: 'ContactsView',
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
            <h1 class="pt-5">Contacts</h1>
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quam quasi necessitatibus
                    doloribus illo accusantium asperiores consequatur voluptatem veniam? Inventore nesciunt quisquam
                    voluptates obcaecati. Labore soluta blanditiis exercitationem. Porro, sit? Ipsum quibusdam quae deserunt
                    accusantium ullam, cupiditate quas similique dolore fugit, eius necessitatibus harum non magnam
                    voluptatem quam nihil cumque quod? Velit repudiandae dolore inventore neque sequi nesciunt quae
                    consequatur delectus voluptatum debitis qui voluptatem quo doloribus veritatis possimus optio cumque
                    voluptates nihil cupiditate rerum repellat iste, iure odit praesentium. Nihil quod odit debitis
                    assumenda tempore corporis beatae sed unde architecto numquam. Debitis sint eveniet dolores, tempore
                    nostrum, ex eum aliquid officia iste similique animi fugit dolorum ea a! Incidunt veniam nostrum commodi
                    voluptas totam, quibusdam animi fuga labore sunt consectetur possimus repellat corrupti ducimus modi?
                    Nemo, quibusdam unde! Facere esse quasi eos tempore doloremque ullam commodi laborum cumque explicabo
                    eligendi quas omnis consequatur dolorum dolore ex, a architecto illum.
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>