<template>
  <div class="app">
    <h1>layotus</h1>
    <p>
      {{ $store.state.menu }}
    </p>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  async mounted() {
    console.log("rthis", this.$store.state.global.menu)
    this.$store.dispatch("global/fetchMenu")
  },
})
</script>
