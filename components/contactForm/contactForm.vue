<template>
  <div class="contact-form">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-4">
          <h3 v-if="title">
            {{ title }}
          </h3>
        </div>
        <div class="grid-c-8">
          <div v-if="successMessage">
            {{ successMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ContactForm",
  props: {
    title: {
      type: String,
      default: null,
    },
    successMessage: {
      type: String,
      default: null,
    },
  },
});
</script>
<style lang="scss" src="./contactForm.scss" scoped></style>
