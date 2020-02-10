<template>
  <div class="adventure">
      <AdventureHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import AdventureHeader from '@/components/adventure/AdventureHeader.vue'

export default {
  name: 'Adventure',
  components: {
    AdventureHeader
  }
}
</script>