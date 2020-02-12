<template>
  <div>
    <Loader v-if="loading" />
    <div class="app-main-layout" v-else>
      <Sidebar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/app/Sidebar'
import Footer from '@/components/app/Footer'

export default {
  name: "main-layout",
  components: {
    Sidebar,
    Footer
  }
};
</script>
