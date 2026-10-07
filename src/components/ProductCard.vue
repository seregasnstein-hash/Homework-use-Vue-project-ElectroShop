<script setup>
defineProps({
  product: Object,
});

const emit = defineEmits(["delete-product"]);
</script>

<template>
  <div class="product__card">
    <img :src="product.image" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <strong>{{ product.price }}</strong>
    <span>{{ product.category }}</span>
    <div class="btn-position">
      <RouterLink class="edit-btn" :to="`/edit-product/${product.id}`">
        Изменить
      </RouterLink>
      <button class="delete-btn" @click="emit('delete-product', product.id)">
        Удалить
      </button>
    </div>
  </div>
</template>

<style scoped>
.product__card {
  width: 300px;
  padding: 20px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: 0.2s;
}

.product__card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.product__card img {
  max-width: 300px;
  height: 200px;
  object-fit: contain;
}
.product__card p{
  min-height: 50px;
}

.product__card strong {
  font-size: 22px;
  color: #0ea5e9;
}

.product__card span {
  width: fit-content;
  padding: 5px 10px;
  border-radius: 20px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 14px;
}
.delete-btn, .edit-btn{
  margin-top: 5px;
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;

}

.delete-btn:hover {
  background: #dc2626;
  color: white;
}

.delete-btn:active {
  transform: scale(0.97);
}

.edit-btn:hover {
  background: #0ea5e9;
  color: white;
}

.btn-position{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
