<template>
  <opentime />
</template>

<script>
import opentime from '@/components/opentime.vue'

export default {
  components: {
    opentime
  },
  data: function() {
    return {
      breadcrumbs: [{}]
    }
  },
  computed: {
    text: function() {
      return this.$store.state.text
    }
  },
  created: function() {
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>
