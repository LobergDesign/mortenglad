<template>
  <div v-if="data" class="grid-w">
    <div class="grid-r">
      <div class="grid-c-6 grid-c-sm-6 grid-c-md-8">
        <div class="contact-section">
          <ui-headline-small v-if="data.headerLogo" :data="data.headerLogo" />
          <ul
            class="reset-ul contact-section__info"
            data-inview-simple-show-effect
          >
            <li v-if="data.address">
              <span>
                {{ data.address }}
              </span>
            </li>
            <li v-if="data.telephonenumber">
              <span>Phone: </span
              ><a :href="'tel:' + data.telephonenumber">{{
                data.telephonenumber
              }}</a>
            </li>
            <li v-if="data.email">
              <span>Email: </span
              ><a :href="'mailto:' + data.email">{{ data.email }}</a>
            </li>
          </ul>
          <h5 class="contact-section__small-title" data-split-line-effect>
            Social:
          </h5>
          <ul
            class="reset-ul contact-section__social"
            data-inview-simple-show-effect
          >
            <li v-if="data.facebook">
              <a :href="data.facebook" target="_blank">Facebook</a>
            </li>
            <li v-if="data.linkedIn">
              <a :href="data.linkedIn" target="_blank"> LinkedIn </a>
            </li>
            <li v-if="data.instagram">
              <a :href="data.instagram" target="_blank"> Instagram </a>
            </li>
            <li v-if="data.youtube">
              <a :href="data.youtube" target="_blank"> Youtube </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: NGlobalData.IGlobalData | null;
}>();
</script>
<style lang="scss" src="./contactSection.scss" scoped></style>
