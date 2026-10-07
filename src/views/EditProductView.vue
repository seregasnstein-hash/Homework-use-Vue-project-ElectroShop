<script setup>
import ProductForm from "@/components/ProductForm.vue";
import { useRoute, useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products.js";

const route = useRoute();
const router = useRouter();
const productsStore = useProductsStore();

const product = productsStore.getProductById(Number(route.params.id));

const updateProduct = (updatedProduct) => {
  productsStore.updateProduct(product.id, updatedProduct);
  router.push("/");
};
</script>

<template>
  <h1>Редактировать товар</h1>

  <ProductForm :product="product" @update-product="updateProduct" />
</template>
