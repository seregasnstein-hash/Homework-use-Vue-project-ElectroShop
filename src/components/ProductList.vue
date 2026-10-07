<script setup>
import { useProductsStore } from "@/stores/products.js";
import ProductCard from "@/components/ProductCard.vue";
import { ref, computed, watch } from "vue";

const productsStore = useProductsStore();
const currentPage = ref(1);
const itemsPerPage = 3;
const selectedCategory = ref("");

const categories = computed(() => {
  return [
    ...new Set(productsStore.products.map((product) => product.category)),
  ];
});

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return productsStore.products;
  }

  return productsStore.products.filter(
    (product) => product.category === selectedCategory.value,
  );
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return filteredProducts.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

watch(totalPages, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value || 1;
  }
});
</script>

<template>
  <div class="filters">
    <button
      :class="{ active: selectedCategory === '' }"
      @click="
        selectedCategory = '';
        currentPage = 1;
      "
    >
      Все
    </button>

    <button
      v-for="category in categories"
      :key="category"
      :class="{ active: selectedCategory === category }"
      @click="
        selectedCategory = category;
        currentPage = 1;
      "
    >
      {{ category }}
    </button>
  </div>

  <p v-if="filteredProducts.length === 0" class="empty">Товаров пока нет</p>

  <div class="products__list">
    <ProductCard
      v-for="product in paginatedProducts"
      :key="product.id"
      :product="product"
      @delete-product="productsStore.deleteProduct"
    />
  </div>

  <div v-if="totalPages > 0" class="pagination">
    <button :disabled="currentPage === 1" @click="currentPage--">←</button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="currentPage = page"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
    <button :disabled="currentPage === totalPages" @click="currentPage++">
      →
    </button>
  </div>
</template>

<style scoped>
.products__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .products__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .products__list {
    grid-template-columns: 1fr;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.pagination button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  color: #111827;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: 0.2s;
}

.pagination button:hover {
  background: #e0f2fe;
  color: #0369a1;
}

.pagination button.active {
  background: #0ea5e9;
  color: white;
}

.pagination button:disabled {
  opacity: 0.4;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.filters button {
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.filters button:hover {
  background: #e0f2fe;
  color: #0369a1;
}

.filters button.active {
  background: #0ea5e9;
  color: white;
}

.empty {
  margin: 40px 0;
  text-align: center;
  font-size: 20px;
  color: #6b7280;
}
</style>
