<template>
  <div id="nav">
    <div class="container nav">
      <ul class="nav-menu">
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >
          <a href="#" class="waves-effect waves-orange pointer">{{
            link.title
          }}</a>
        </router-link>
      </ul>
      <div class="nav-logo">
        <img src="@/assets/img/nav/Toyota_LOGOTYPE.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "Главная", url: "/", exact: true },
      { title: "extreme–карта", url: "/about" },
      { title: "КОНКУРС", url: "/about1" },
      { title: "Участники", url: "/about2" },
      { title: "RAV4 Adventure", url: "/adventure" }
    ]
  })
};
</script>
