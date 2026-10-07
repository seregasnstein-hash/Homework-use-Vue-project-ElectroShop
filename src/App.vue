<script setup>
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="logo">Electro<span>Shop</span></div>

      <nav class="nav">
        <RouterLink to="/">Главная</RouterLink>

        <RouterLink to="/add-product">Добавить товар</RouterLink>
      </nav>
    </div>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  background: #111827;
  color: white;
  padding: 20px 0;
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 28px;
  font-weight: 700;
}

.logo span {
  color: #38bdf8;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;
}

.nav a:hover {
  color: #38bdf8;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.main h1 {
  margin-bottom: 30px;
  color: #111827;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #dbe2ea;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
