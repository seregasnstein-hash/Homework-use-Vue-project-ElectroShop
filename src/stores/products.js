import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "iPhone 17",
        description: "Смартфон Apple",
        price: 400000,
        category: "Смартфоны",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrnETdmZwPuiPCfHDerDZM1K3Ux-2zCBjIsnA_1uX7w&s=10",
      },
      {
        id: 2,
        title: "MacBook Air",
        description: "Ноутбук Apple",
        price: 6000000,
        category: "Ноутбуки",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvVC6wcMUXucwzSO9xa8IxlrOPQxq9H2VUzzWLrmlw&s=10",
      },
      {
        id: 3,
        title: "Sony WH-1000XM5",
        description: "Беспроводные наушники",
        price: 1400000,
        category: "Наушники",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv0LRlN1s50NuOhD-HOzS92vEfdfWYbYK-zpLkEmMBlw&s=10",
      },
      {
        id: 4,
        title: "Samsung Galaxy S25",
        description: "Флагманский смартфон Samsung",
        price: 3000000,
        category: "Смартфоны",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWsynT64YQs3bDyi__CkBx3zIGNe_f0BCxPxf5IIMJg&s=10",
      },
      {
        id: 5,
        title: "Google Pixel 10",
        description: "Смартфон Google Pixel",
        price: 400000,
        category: "Смартфоны",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggrmv4lcoKubiOUBr8ZDQI2DikypxZ_eASYW4YZOGWw&s=10",
      },
      {
        id: 6,
        title: "ASUS ROG Zephyrus G16",
        description: "Игровой ноутбук ASUS",
        price: 800000,
        category: "Ноутбуки",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFBaxEVDMpW0p9TY-n9fqOcaQkuO9OsaBRAi-c6eymA&s=10",
      },
      {
        id: 7,
        title: "Lenovo ThinkPad X1 Carbon",
        description: "Бизнес-ноутбук Lenovo",
        price: 700000,
        category: "Ноутбуки",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSn6hDAD4yEeCCVQnE5r6jx5bT8gjIlnn53RDPN0XX9M_mL7AQlbaw8Twm6q7rD-f6PqhPHYoOXv1Cn9ARn8lEFd3wKx__1nR6JTI_wd8zrW4CceAiXe8w455aorkgEMw_cZAm3trWnNA&usqp=CAc",
      },
      {
        id: 8,
        title: "AirPods Pro 3",
        description: "Беспроводные наушники Apple",
        price: 100000,
        category: "Наушники",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ3gEzqI_D9j_tWhLtVzml4twOCAUG7Asd_1nYMWd1ezwrRwP2E5XF7_ITUtpe9Dcnj-18dajMi5cofBOHD_CFXDoYRT9IBrfrFUP55imndcQ9Mo7lt0uvF7F1PydvUEaALQwEKJw&usqp=CAc",
      },
      {
        id: 9,
        title: "JBL Tour One M3",
        description: "Полноразмерные беспроводные наушники",
        price: 100000,
        category: "Наушники",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-97Sb5Mh3pt9XnKFBLCew1YLddni1fbhgYSRu3xDVw&s=10",
      },
    ],
  }),
  actions: {
    addProduct(product) {
      this.products.push({
        id: Date.now(),
        ...product,
      });
    },
    deleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    },
    getProductById(id) {
      return this.products.find((product) => product.id === id);
    },
    updateProduct(id, updatedProduct){
      const index = this.products.findIndex(product => product.id === id);

      if(index !== -1) {
        this.products[index] = {
          id,
          ...updatedProduct
        }
      }
    }
  },
});
