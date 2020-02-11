<template>
  <div class="adventure">
      <AdventureHeader />
      <div class="adventure__content">
        <AdventureStart />
        <AdventureSoft />
        <AdventureGet />
        <AdventureExtreme />
        <AdventureLook />
        <AdventureExtremes />
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdventureHeader from '@/components/adventure/AdventureHeader.vue'
import AdventureStart from '@/components/adventure/AdventureStart.vue'
import AdventureSoft from '@/components/adventure/AdventureSoft.vue'
import AdventureGet from '@/components/adventure/AdventureGet.vue'
import AdventureExtreme from '@/components/adventure/AdventureExtreme.vue'
import AdventureLook from '@/components/adventure/AdventureLook.vue'
import AdventureExtremes from '@/components/adventure/AdventureExtremes.vue'

export default {
  name: 'Adventure',
  components: {
    AdventureHeader,
    AdventureStart,
    AdventureSoft,
    AdventureGet,
    AdventureExtreme,
    AdventureLook,
    AdventureExtremes
  }
}
</script>