<template>
  <div id="app">
    <div id="nav">
      <div class="container nav">
        <div class="nav-menu ">
          <router-link to="/">
            <span>
              Главная
            </span>
          </router-link>
          <router-link to="/about">
            <span>
              extreme–карта
            </span>
          </router-link>
          <router-link to="/about1">
            <span>
              КОНКУРС
            </span>
          </router-link>
          <router-link to="/about2">
            <span>
              Участники
            </span>
          </router-link>
          <router-link to="/adventure">
            <span>
              RAV4 Adventure
            </span>
          </router-link>
        </div>
        <div class="nav-logo">
          <img src="./assets/img/nav/Toyota_LOGOTYPE.png" alt="">
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
