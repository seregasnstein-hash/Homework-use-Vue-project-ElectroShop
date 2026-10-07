<script setup>
import { ref } from "vue";

const props = defineProps({
  product: Object,
});

const title = ref(props.product?.title || "");
const description = ref(props.product?.description || "");
const price = ref(props.product?.price || "");
const category = ref(props.product?.category || "");
const image = ref(props.product?.image || "");
const error = ref("");
const errorField = ref("");

const emit = defineEmits(["add-product", "update-product"]);

const addProduct = () => {
  if (!title.value.trim()) {
    error.value = "Введите название товара";
    errorField.value = "title";
    return;
  }

  if (!description.value.trim()) {
    error.value = "Введите описание товара";
    errorField.value = "description";
    return;
  }

  if (!price.value) {
    error.value = "Введите цену товара";
    errorField.value = "price";
    return;
  }

  if (!category.value.trim()) {
    error.value = "Введите категорию товара";
    errorField.value = "category";

    return;
  }

  if (!image.value.trim()) {
    error.value = "Введите ссылку на изображение товара";
    errorField.value = "image";
    return;
  }

  error.value = "";
  errorField.value = "";

  const product = {
    title: title.value,
    description: description.value,
    price: price.value,
    category: category.value,
    image: image.value,
  };

  if (props.product) {
    emit("update-product", product);
  } else {
    emit("add-product", product);
  }
};
</script>

<template>
  <form class="product-form" @submit.prevent="addProduct">
    <div class="error__container">
      <p v-if="error" class="error">{{ error }}</p>
    </div>
    <input
      type="text"
      v-model="title"
      @input="error = ''; errorField = ''"
      placeholder="Название товара"
      :class="{ 'input-error': errorField === 'title' }"
    />
    <textarea
      v-model="description"
      @input="error = ''; errorField = ''"
      placeholder="Описание товара"
      :class="{ 'input-error': errorField === 'description' }"
    ></textarea>
    <input
      type="number"
      v-model="price"
      @input="error = ''; errorField = ''"
      placeholder="Цена"
      :class="{ 'input-error': errorField === 'price' }"
    />
    <input
      type="text"
      v-model="category"
      @input="error = ''; errorField = ''"
      placeholder="Категория"
      :class="{ 'input-error': errorField === 'category' }"
    />
    <input
      type="text"
      v-model="image"
      @input="error = ''; errorField = ''"
      placeholder="Ссылка на изображение"
      :class="{ 'input-error': errorField === 'image' }"
    />

    <button type="submit">
      {{ props.product ? "Сохранить изменения" : "Добавить товар" }}
    </button>
  </form>
</template>

<style scoped>
.product-form {
  max-width: 600px;
  margin: 0 auto 40px;
  padding: 30px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product-form input,
.product-form textarea {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  font-family: inherit;
  transition: 0.2s;
}

.product-form textarea {
  min-height: 120px;
  resize: vertical;
}

.product-form input:focus,
.product-form textarea:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
}

.product-form input::placeholder,
.product-form textarea::placeholder {
  color: #9ca3af;
}

.product-form button {
  padding: 13px;
  border: none;
  border-radius: 10px;
  background: #0ea5e9;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.product-form button:hover {
  background: #0284c7;
}

.product-form button:active {
  transform: scale(0.98);
}

.error {
  margin-top: -8px;
  color: #dc2626;
  font-size: 14px;
  font-weight: 500;
}

.error__container {
  min-height: 20px;
}

.input-error {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
}
</style>
