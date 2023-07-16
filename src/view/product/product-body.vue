<template>
    <div class="px-5 py-2">
        <div class="row">
            <h1 class="mb-4 mt-2">Product Page</h1>
        </div>
        <div class="row row-cols-1 row-cols-md-5 g-3">
            <div
                v-for="(product, index) in products"
                :key="index"
                class="col">
                <productCard
                    :product-prop="product"
                    :index-prop="index"
                    :remove-item-prop="removeItem"></productCard>
            </div>
            <div class="col">
                <div
                    type="button"
                    v-on:click="addItem"
                    class="container position-relative bg-light h-100">
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <i class="fa-solid fa-circle-plus fa-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-primary mt-3 btn-lg" v-on:click="save">Save</button>
    </div>
</template>

<script>
import axios from 'axios';

import productCard from './product-card.vue';

function productModel(data){
    var self = this;
    self.name =  data.name;
    self.description = data.description;
    self.price = data.price;
    self.qty = data.qty;
    self.qtyType = data.qtyType;
    self.imageLink = data.imagelink;
}

export default {
    components: {
        productCard,
    },
    methods: {
        addItem: function(){
            this.products.push(new productModel({
                name: "product",
                description: "description",
            }));
            // console.log(this.products);
        },
        removeItem: function(index){
            this.products.splice(index, 1);
        },
        save: async function(){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({"products" : this.products})
            };
            await fetch("//localhost:8081/api/products/upsert", requestOptions);
            this.getData();
        },
        getData: function(){
            axios
                .get('//localhost:8081/api/products')
                .then(response => (this.products = response.data))
        }
    },
    data() {
        return{
            products: null
        }
    },
    mounted(){
        this.getData();
    }
}
</script>

<style>

</style>