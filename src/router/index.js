import { createWebHistory, createRouter } from "vue-router";

import productPage from "@/view/product/product-page.vue";
import shopPage from "@/view/shop/shop-page.vue";

const routes = [
    {
      path: "/",
      name: "Product",
      component: productPage,
    },
    {
        path: "/shop",
        name: "Shop",
        component: shopPage,
      },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;