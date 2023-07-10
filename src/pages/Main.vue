<template>
  <div>
    <h1>Добро пожаловать</h1>
    <div class="page-link">
      <router-link to="/users">Пользователи</router-link>
      <router-link to="about">О сайте</router-link>
    </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.page-link a{
  display: block;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  font-family: arial;
  color: black;
  margin: 10px 0;
  transition: .3s;
}
.page-link a:hover {
  color: tomato;
}
</style>