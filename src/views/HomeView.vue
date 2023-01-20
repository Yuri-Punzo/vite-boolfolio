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

    <div class="container">
        <h1 class="pt-5">Home</h1>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolore repellat ipsum perferendis
                deleniti, pariatur id vel voluptatem quam tenetur eos quas sint facere? Facere aspernatur inventore
                eaque molestiae tempore! Eaque adipisci est quo nesciunt ab repellat veniam reprehenderit consequatur
                dolorem voluptates quasi, nostrum explicabo esse nihil ex, at id aspernatur voluptatem temporibus,
                voluptate sint a nobis fugit accusantium! Vitae laboriosam aut nobis facilis, maiores voluptatibus in
                asperiores beatae repellendus rerum! Quos expedita accusantium nemo praesentium magnam, accusamus in
                dolor corporis at nam. Quod incidunt repellendus possimus! Laudantium dignissimos esse ipsam harum
                officiis veniam illo! Consequuntur nobis doloribus unde quasi alias, ducimus natus. Ut voluptate nisi
                rem quos commodi sed numquam laboriosam repellendus expedita hic esse, amet aperiam vitae repudiandae
                eaque fugiat nobis possimus soluta quibusdam explicabo culpa animi cupiditate minima. Non ipsa
                doloremque voluptatibus, temporibus tempore impedit cupiditate possimus rem dolores sequi voluptate?
                Quia, ipsa? Porro cumque accusamus, itaque dolorum pariatur ad eligendi neque fuga laborum illo
                voluptas. Quibusdam enim atque laboriosam unde minus nemo iusto consequuntur voluptatum reprehenderit
                harum assumenda sint earum libero omnis obcaecati ut error, voluptate nesciunt maxime ullam. Beatae
                architecto veritatis facere est labore? Necessitatibus sunt dignissimos, quasi velit nam incidunt!
                Excepturi sunt rerum illo. Corrupti voluptates, consectetur provident officia eaque necessitatibus rem.
                Aliquam, mollitia?</p>
        </div>
    </div>

</template>


<style lang="scss">

</style>