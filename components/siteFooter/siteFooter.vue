<template>
  <footer v-if="!$fetchState.pending" class="footer">
    <lazy-contact-form
      :title="footer.contactFormTitle"
      :success-message="footer.contactFormSuccessMessage"
    />
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-9 grid-c-sm-12">
          <ul class="reset-ul footer__info">
            <li v-if="footer.address">
              <address>
                {{ footer.address }}
              </address>
            </li>
            <li v-if="footer.telephonenumber">
              <a :href="'tel:' + footer.telephonenumber"
                >+45 {{ footer.telephonenumber }}</a
              >
            </li>
            <li v-if="footer.email">
              <a :href="'mailto:' + footer.email">{{ footer.email }}</a>
            </li>
          </ul>
        </div>
        <div class="grid-c-3 grid-c-sm-12 flex-end reset-flex-end-md">
          <ul class="reset-ul footer__social">
            <li v-if="footer.facebook">
              <a :href="footer.facebook" target="_blank">Facebook</a>
            </li>
            <li v-if="footer.linkedIn">
              <a :href="footer.linkedIn" target="_blank"> LinkedIn </a>
            </li>
            <li v-if="footer.instagram">
              <a :href="footer.instagram" target="_blank" class="reset-fill">
                Instagram
              </a>
            </li>
            <li v-if="footer.youtube">
              <a :href="footer.youtube" target="_blank"> Youtube </a>
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
  data() {
    return {
      footer: {},
    };
  },
  fetch() {
    const globalData = this.$store.state.global.globalSettings;

    if (globalData) {
      const footer = {
        telephonenumber: globalData.globalSettings?.telephonenumber,
        email: globalData.globalSettings?.email,
        address: globalData.globalSettings?.address,
        linkedIn: globalData.globalSettings?.linkedIn,
        facebook: globalData.globalSettings?.facebook,
        instagram: globalData.globalSettings?.instagram,
        youtube: globalData.globalSettings?.youtube,
        contactFormTitle: globalData.globalSettings?.contactFormTitle,
        contactFormSuccessMessage:
          globalData.globalSettings?.contactFormSuccessMessage,
      };
      this.footer = footer;
    }
  },
});
</script>
<style lang="scss" src="./siteFooter.scss" scoped></style>
