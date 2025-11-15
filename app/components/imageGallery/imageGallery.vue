<template>
  <div class="grid-w spacing-b">
    <ul class="reset-ul grid-r image-gallery-list">
      <li
        v-for="(item, i) in images"
        :key="i"
        class="grid-c-6 grid-c-sm-4"
        data-inview-simple-show-effect
      >
        <div class="image" @click="setActiveIndex(i)">
          <nuxt-img
            v-if="item.secure_url"
            provider="cloudinary"
            :src="item.secure_url"
            sizes="sm:100vw md:50vw lg:800px"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  images: NGlobal.IMedia[] | null;
}>();

const emit = defineEmits<{
  (e: 'active-gallery', index: number): void;
}>();

const activeIndex = ref(0);

const setActiveIndex = (i: number) => {
  activeIndex.value = i;
  emit('active-gallery', i);
};
</script>
<style lang="scss" src="./imageGallery.scss" scoped></style>
