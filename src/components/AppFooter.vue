<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
    <div class="text-light my_footer">
        <div class="container h-100 d-flex align-items-center justify-content-between">
            <p class="mb-0">
                <i class="fa-regular fa-copyright"></i> Copyrights 2023 Yuri Punzo - All Rights Reserved
            </p>
            <div>
                <i class="fa-brands fa-linkedin ms-3"></i>
                <i class="fa-brands fa-github ms-3"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my_footer {
    height: 8vh;
    background-color: black;
}
</style>