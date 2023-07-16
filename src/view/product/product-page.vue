<template>
    <navBar></navBar>
    <productBody></productBody>
    <footerBar></footerBar>
</template>

<script>
import navBar from '@/components/nav-bar.vue';
import productBody from './product-body.vue';
import footerBar from '@/components/footer-bar.vue';

export default {
    components: {
        navBar,
        productBody,
        footerBar
    }
}
</script>

<style>

</style>