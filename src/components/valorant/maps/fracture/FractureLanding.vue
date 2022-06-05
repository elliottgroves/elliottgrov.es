<template>
  <map-detail>
    <template v-slot="agents">

    </template>
  </map-detail>
</template>

<script>
import mapDetail from '../mapDetail.vue'

export default {
  name: 'FractureLanding',
  title: 'Fracture - Easy VALORANT Setups',
  components: {
    mapDetail
  },
  data: () => {
    return {
      agents: [
        { name: 'raze', role: 'duelist' }
      ]
    }
  }
}
</script>
