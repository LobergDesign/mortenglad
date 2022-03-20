<template>
  <footer class="footer">
    <lazy-contact-form
      :title="data.contactFormTitle"
      :success-message="data.contactFormSuccessMessage"
    />
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-9 grid-c-sm-12">
          <ul class="reset-ul footer__info">
            <li v-if="data.address">
              <address>
                {{ data.address }}
              </address>
            </li>
            <li v-if="data.telephonenumber">
              <a :href="'tel:' + data.telephonenumber"
                >+45 {{ data.telephonenumber }}</a
              >
            </li>
            <li v-if="data.email">
              <a :href="'mailto:' + data.email">{{ data.email }}</a>
            </li>
          </ul>
        </div>
        <div class="grid-c-3 grid-c-sm-12 flex-end reset-flex-end-md">
          <ul class="reset-ul footer__social">
            <li v-if="data.facebook">
              <a :href="data.facebook" target="_blank">Facebook</a>
            </li>
            <li v-if="data.linkedIn">
              <a :href="data.linkedIn" target="_blank"> LinkedIn </a>
            </li>
            <li v-if="data.instagram">
              <a :href="data.instagram" target="_blank" class="reset-fill">
                Instagram
              </a>
            </li>
            <li v-if="data.youtube">
              <a :href="data.youtube" target="_blank"> Youtube </a>
            </li>
          </ul>
        </div>
      </div>
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
