<template>
  <data class="data" v-if="!pending && data">
    <lazy-contact-form
      :title="data.globalSettings.contactFormTitle"
      :success-message="data.globalSettings.contactFormSuccessMessage"
    />
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-9 grid-c-sm-12">
          <ul class="reset-ul data__info">
            <li v-if="data.globalSettings.address">
              <address data-split-line-effect>
                {{ data.globalSettings.address }}
              </address>
            </li>
            <li v-if="data.globalSettings.telephonenumber">
              <a
                data.globalSettings-split-line-effect
                :href="'tel:' + data.globalSettings.telephonenumber"
                >+45 {{ data.globalSettings.telephonenumber }}</a
              >
            </li>
            <li v-if="data.globalSettings.email">
              <a
                data-split-line-effect
                :href="'mailto:' + data.globalSettings.email"
                >{{ data.globalSettings.email }}</a
              >
            </li>
          </ul>
        </div>
        <div class="grid-c-3 grid-c-sm-12 flex-end reset-flex-end-md">
          <ul class="reset-ul data__social">
            <li v-if="data.globalSettings.facebook">
              <a
                :href="data.globalSettings.facebook"
                target="_blank"
                data-split-line-effect
                >Facebook</a
              >
            </li>
            <li v-if="data.globalSettings.linkedIn">
              <a
                :href="data.globalSettings.linkedIn"
                target="_blank"
                data-split-line-effect
              >
                LinkedIn
              </a>
            </li>
            <li v-if="data.globalSettings.instagram">
              <a
                :href="data.globalSettings.instagram"
                target="_blank"
                class="reset-fill"
                data-split-line-effect
              >
                Instagram
              </a>
            </li>
            <li v-if="data.globalSettings.youtube">
              <a
                :href="data.globalSettings.youtube"
                target="_blank"
                data-split-line-effect
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </data>
</template>

<script lang="ts" setup>
const { data, pending } = await useGlobaleSettings();
</script>
<style lang="scss" src="./siteFooter.scss" scoped></style>
