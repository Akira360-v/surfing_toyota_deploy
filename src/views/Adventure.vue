<template>
  <div class="adventure">
      <AdventureHeader />
      <div class="adventure__content">
        <AdventureStart />
        <AdventureSoft />
        <AdventureGet />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdventureHeader from '@/components/adventure/AdventureHeader.vue'
import AdventureStart from '@/components/adventure/AdventureStart.vue'
import AdventureSoft from '@/components/adventure/AdventureSoft.vue'
import AdventureGet from '@/components/adventure/AdventureGet.vue'

export default {
  name: 'Adventure',
  components: {
    AdventureHeader,
    AdventureStart,
    AdventureSoft,
    AdventureGet
  }
}
</script>