import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/add-product",
    component: () => import("@/views/AddProductView.vue"),
  },
  {
    path: "/edit-product/:id",
    component: () => import("@/views/EditProductView.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
