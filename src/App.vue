<template>
  <div id="app">
    <div id="nav">
      <div class="container nav">
        <div class="nav-menu ">
          <router-link to="/">Главная</router-link>
          <router-link to="/about">extreme–карта</router-link>
          <router-link to="/about">КОНКУРС</router-link>
          <router-link to="/about">Участники</router-link>
          <router-link to="/about">RAV4 Adventure</router-link>
        </div>
        <div class="nav-logo">
          asdas
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
