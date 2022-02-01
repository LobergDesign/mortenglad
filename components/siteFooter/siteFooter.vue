<template>
  <footer>
    <div v-if="data.telephonenumber">
      {{ data.telephonenumber }}
    </div>
    <div v-if="data.email">
      {{ data.email }}
    </div>
    <div v-if="data.address">
      {{ data.address }}
    </div>
    <div v-if="data.linkedIn">
      {{ data.linkedIn }}
    </div>

    <div v-if="data.instagram">
      {{ data.instagram }}
    </div>
    <div v-if="data.youtube">
      {{ data.youtube }}
    </div>

    <div v-if="data.contactFormTitle">
      {{ data.contactFormTitle }}
    </div>
    <div v-if="data.contactFormSuccessMessage">
      {{ data.contactFormSuccessMessage }}
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SiteFooter",
  props: {
    data: {
      type: Object as () => NFooter.IFooterData,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./siteFooter.scss" scoped></style>
