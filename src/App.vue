<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<template>
    <header>
        <AppHeader></AppHeader>
    </header>
    <!-- /header -->
    <main class="my_main">
        <router-view></router-view>
    </main>
    <!-- /main -->
    <footer>
        <AppFooter></AppFooter>
    </footer>
    <!-- /footer -->
</template>


<style lang="scss">
@use './styles/general.scss';

.my_main {
    height: 82vh;
    overflow-y: auto;
}
</style>
