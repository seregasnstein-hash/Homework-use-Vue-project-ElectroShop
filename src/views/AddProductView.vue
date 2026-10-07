<script setup>
import ProductForm from "@/components/ProductForm.vue";
import { useProductsStore } from "@/stores/products.js";
import { useRouter } from "vue-router";
const router = useRouter();

const productsStore = useProductsStore();

const addProduct = (product) => {
  productsStore.addProduct(product)
  router.push("/");
};
</script>

<template>
  <main class="add-product">
    <h1>Добавить товар</h1>

    <ProductForm @add-product="addProduct" />
  </main>
</template>