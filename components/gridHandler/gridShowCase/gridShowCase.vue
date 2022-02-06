<template>
  <div class="grid-showcase">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-12">
          <ui-headline
            v-if="data.title"
            :data="{ title: data.title, headlineType: 'h2' }"
          />
          <ui-link
            v-if="data.linkToShowcase"
            :data="{ link: data.linkToShowcase, linktext: data.linkText }"
          />
        </div>
        <div class="grid-c-12">
          <div
            class="grid-showcase__video"
            :class="{ 'is-playing': isPlaying }"
          >
            <div class="grid-showcase__video-overlay"></div>
            <div
              class="grid-showcase__video-icon flex-center-center"
              @click="play"
            >
              <play-icon />
            </div>
            <video
              v-if="data.video"
              ref="video"
              width="100%"
              height="auto"
              @click="pause"
            >
              <source :src="data.video[0].url" type="video/mp4" />
              <source :src="data.video[0].url" type="video/ogg" />
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
  name: "GridShowCase",
  components: {
    playIcon: PlayIcon,
  },
  props: {
    data: {
      type: Object as () => NGrid.IGridShowCase,
      default: null,
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
<style lang="scss" src="./gridShowCase.scss" scoped></style>
