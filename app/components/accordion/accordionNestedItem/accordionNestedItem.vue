<template>
  <ul
    class="grid-r reset-ul accordion-nested-item last-text-align-right reset-align-sm"
    :class="[
      { 'has-additional-content': data.additionalContent },
      { 'is-active': isActive },
    ]"
    @click="toggleAccordion"
  >
    <template v-if="len <= 4">
      <li class="grid-c-6 grid-c-sm-3">
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
      <li class="grid-c-6 grid-c-sm-5">
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
      <li class="grid-c-6 grid-c-sm-3">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[2] }}
        </span>
        <span class="accordion-nested-item__item">
          <template v-if="data.role">
            {{ data.role }}
          </template>
          <template v-else-if="data.city">
            {{ data.city }}
          </template>
        </span>
      </li>
      <li class="grid-c-6 grid-c-sm-1">
        <span class="accordion-nested-item__item-headline mobile-only">
          {{ headlines[3] }}
        </span>
        <span class="accordion-nested-item__item">
          {{ data.year }}
        </span>
      </li>
    </template>
    <span v-if="data.additionalContent" class="accordion-nested-item__icon">
      <nuxt-icon name="cross" />
    </span>
    <span
      v-if="data.additionalContent"
      ref="AccordionContent"
      class="grid-c-md-7 grid-c-sm-10 grid-c-12 accordion-nested-item__content"
    >
      <ui-bodytext :data="data.additionalContent" />
    </span>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  len: number;
  data: NCVCollection.ICVSingleCollection;
  headlines: string[];
}>();

const isActive = ref(false);

const { gsap } = useGsap();

const accordionContent = useTemplateRef('AccordionContent');

const toggleAccordion = () => {
  const el = accordionContent.value as HTMLElement;

  if (el) {
    const elHeight = el.scrollHeight;

    if (!isActive.value) {
      isActive.value = true;
      gsap.to(el, {
        duration: 0.7,
        opacity: 1,
        height: elHeight,
        ease: 'power3.out',
      });
    } else {
      isActive.value = false;
      gsap.to(el, {
        duration: 0.7,
        opacity: 0,
        height: 0,
        ease: 'power3.out',
      });
    }
  }
};
</script>
<style lang="scss" src="./accordionNestedItem.scss"></style>
