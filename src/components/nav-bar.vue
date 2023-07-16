<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid px-5">
            <a class="navbar-brand" href="https://rimbahouse.com/" target="_blank" rel="noopener noreferrer">RIMBA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/shop">Shop</router-link>
                    </li>
                </ul>
                <div class="px-4 bd-highlight">Rafi</div>
                <div class="d-flex flex-row">
                    <i class="fa-solid fa-user fa-xl"></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>