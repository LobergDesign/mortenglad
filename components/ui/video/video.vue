<template>
  <div class="video">
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
            <div class="video__overlay"></div>
            <div class="video__icon flex-center-center" @click="play">
              <play-icon />
            </div>
            <video
              v-if="data.video"
              ref="video"
              provider="cloudinary"
              width="100%"
              height="auto"
              @click="pause"
            >
              <source :src="data.video[0].secure_url" type="video/mp4" />
              <source :src="data.video[0].secure_url" type="video/ogg" />
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

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import PlayIcon from "~/assets/svg/play.svg?inline";
export default Vue.extend({
  name: "UIVideo",
  components: {
    playIcon: PlayIcon,
  },
  props: {
    data: {
      type: Object as () => NShowreels.IShowreel,
      default: null,
    },
    smallHeadline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    play() {
      const video = this.$refs.video as HTMLVideoElement;
      video.play();
      this.isPlaying = true;
    },
    pause() {
      const video = this.$refs.video as HTMLVideoElement;
      video.pause();
      this.isPlaying = false;
    },
  },
});
</script>
<style lang="scss" src="./video.scss"></style>
