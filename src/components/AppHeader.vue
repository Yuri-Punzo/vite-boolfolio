<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <!-- DA RISOLVERE: MenuItems che non compaiono nella responsive NavBar -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark my_navbar">
        <div class="container d-none d-sm-block">
            <button class="navbar-toggler d-lg-none ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'portfolio' }">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="dropdown d-sm-none ms-auto me-4">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2"
                data-bs-toggle="dropdown" aria-expanded="false">
                Menù
            </button>
            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                <li class="nav-item d-flex justify-content-center">
                    <router-link class="nav-link" :to="{ name: 'home' }" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item d-flex justify-content-center">
                    <router-link class="nav-link" :to="{ name: 'portfolio' }">Portfolio</router-link>
                </li>
                <li class="nav-item d-flex justify-content-center">
                    <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
                </li>
                <li class="nav-item d-flex justify-content-center">
                    <router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.my_navbar {
    height: 8vh;
}

.dropdown {
    li:hover {
        color: blueviolet;
    }
}
</style>