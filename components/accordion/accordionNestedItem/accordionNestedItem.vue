<template>
  <ul
    class="grid-r reset-ul accordion-nested-item last-text-align-right reset-align-xs"
    :class="[
      { 'has-additional-content': data.additionalContent },
      { 'is-active': isActive },
    ]"
    @click="toggleAccordion"
  >
    <template v-if="len === 4">
      <li class="grid-c-xs-6 grid-c-3">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[0] }}
        </span>
        <span class="accordion-nested-item__item">
          <template v-if="data.type">
            {{ data.type }}
          </template>
          <template v-else-if="data.educationcourse">
            {{ data.educationcourse }}
          </template>
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-5">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[1] }}
        </span>
        <span class="accordion-nested-item__item">
          <template v-if="data.production">
            {{ data.production }}
          </template>
          <template v-else-if="data.place">
            {{ data.place }}
          </template>
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-3">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[2] }}
        </span>
        <span class="accordion-nested-item__item">
          {{ data.role }}
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-1">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[3] }}
        </span>
        <span class="accordion-nested-item__item">
          {{ data.year }}
        </span>
      </li>
    </template>
    <template v-if="len === 3">
      <li class="grid-c-xs-6 grid-c-5">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[0] }}
        </span>

        <span class="accordion-nested-item__item">
          <template v-if="data.type">
            {{ data.type }}
          </template>
          <template v-else-if="data.educationcourse">
            {{ data.educationcourse }}
          </template>
          <template v-else-if="data.workshop">
            {{ data.workshop }}
          </template>
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-6">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[1] }}
        </span>
        <span class="accordion-nested-item__item">
          <template v-if="data.production">
            {{ data.production }}
          </template>
          <template v-else-if="data.place">
            {{ data.place }}
          </template>
        </span>
      </li>
      <li class="grid-c-xs-6 grid-c-1">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[2] }}
        </span>
        <span class="accordion-nested-item__item">
          {{ data.year }}
        </span>
      </li>
    </template>
    <span v-if="data.additionalContent" class="accordion-nested-item__icon">
      <Cross />
    </span>
    <span
      v-if="data.additionalContent"
      ref="AccordionContent"
      class="grid-c-7 grid-c-sm-10 grid-c-xs-12 accordion-nested-item__content"
    >
      <ui-bodytext :data="data.additionalContent" />
    </span>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import Cross from "~/assets/svg/cross.svg?inline";
export default Vue.extend({
  name: "AccordionNestedItem",
  components: {
    Cross,
  },
  props: {
    data: {
      type: Object as () => NCVCollection.ICVSingleCollection,
      default: null,
    },
    len: {
      type: Number,
      default: null,
    },
    headlines: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      $gsap: Object as () => NLib.IGsap,
      isActive: false,
    };
  },
  methods: {
    toggleAccordion() {
      const el = this.$refs.AccordionContent as HTMLElement;

      if (el) {
        const elHeight = el.scrollHeight;

        // @ts-ignore
        const gsap = this.$gsap as NLib.IGsap;
        if (!this.isActive) {
          this.isActive = true;
          gsap.to(el, {
            duration: 0.7,
            opacity: 1,
            height: elHeight,
            ease: "power3.out",
          });
        } else {
          this.isActive = false;
          gsap.to(el, {
            duration: 0.7,
            opacity: 0,
            height: 0,
            ease: "power3.out",
          });
        }
      }
    },
  },
});
</script>
<style lang="scss" src="./accordionNestedItem.scss"></style>
