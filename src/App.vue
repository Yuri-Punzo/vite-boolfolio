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
    height: 84vh;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    font-family: 'Courier Prime', monospace;
    background-color: #212529;
}
</style>
