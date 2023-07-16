<template>
    <div 
                    class="card position-relative">
                    <div class="position-absolute top-0 start-100 translate-middle">
                        <i type="button" v-on:click="removeItem(index)" class="fa-solid fa-circle-xmark fa-lg" style="color: #d62929;"></i>
                    </div>
                    <img v-bind:src="product.imageLink ?? 'https://scotturb.com/wp-content/uploads/2016/11/product-placeholder.jpg'" class="card-img-top">
                    <div class="card-body">
                        <input class="form-control mb-2" type="text" v-model="product.name">
                        <textarea class="card-text form-control form-control-sm" v-model="product.description"></textarea>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Price</span>
                                <input type="number" class="form-control" v-model="product.price">
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="input-group input-group-sm mb-1">
                                <span class="input-group-text">Qty</span>
                                <input type="number" class="form-control" v-model="product.qty">
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="pcs" v-model="product.qtyType">
                                <label class="form-check-label" for="inlineRadio1">pcs</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="kg" v-model="product.qtyType">
                                <label class="form-check-label" for="inlineRadio2">kg</label>
                            </div>
                        </li>
                    </ul>
                </div>
</template>

<script>
export default {
    props: ['productProp', 'indexProp', 'removeItemProp'],
    data() {
         return {
            product: this.productProp,
            index: this.indexProp,
            removeItem: this.removeItemProp
         }
      },
}
</script>

<style>

</style>