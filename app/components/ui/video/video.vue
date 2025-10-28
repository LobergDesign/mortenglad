<template>
  <div class="video" data-inview-simple-show-effect>
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-12">
          <template v-if="smallHeadline">
            <ui-headline-small v-if="data.title" :data="data.title" />
          </template>
          <template v-else>
            <ui-headline
              v-if="data.title"
              :data="{ title: data.title, headlineType: 'h2' }"
            />
          </template>
          <p v-if="data.bodytext">
            {{ data.bodytext }}
          </p>
          <ui-link
            v-if="data.linkToShowcase"
            :data="{ link: data.linkToShowcase, linktext: data.linkText }"
          />
        </div>
        <div class="grid-c-12">
          <div class="video__item" :class="{ 'is-playing': isPlaying }">
            <div class="video__overlay" @click="play"></div>
            <div class="video__icon flex-center-center" @click="play">
              <nuxt-icon name="play" />
            </div>
            <video
              v-if="data.video"
              ref="video"
              provider="cloudinary"
              width="100%"
              height="auto"
              @click="pause"
            >
              <source
                :src="data.video[0].original_secure_url"
                type="video/mp4"
              />
              <source
                :src="data.video[0].original_secure_url"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p v-if="data.videoCaption" class="caption">
            {{ data.videoCaption }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, smallHeadline } = defineProps<{
  data: NShowreels.IShowreel;
  smallHeadline?: boolean;
}>();

const video = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);

const play = () => {
  if (video.value) {
    video.value.play();
    isPlaying.value = true;
  }
};

const pause = () => {
  if (video.value) {
    video.value.pause();
    isPlaying.value = false;
  }
};
</script>
<style lang="scss" src="./video.scss"></style>
