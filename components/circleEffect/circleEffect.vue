<template>
  <div class="circular-effect">
    <svg viewBox="0 0 200 200">
      <path
        id="circle"
        d="
        M 100, 100
        m -60, 0
        a 60,60 0 1,0 120,0
        a 60,60 0 1,0 -120,0
    "
        style="fill: transparent"
      ></path>

      <text>
        <textPath xlink:href="#circle">- {{ text }} - {{ text }}</textPath>
      </text>
    </svg>
    <arrow />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// @ts-ignore
import Arrow from "~/assets/svg/arrow.svg?inline";

export default Vue.extend({
  name: "CircleEffect",
  components: {
    arrow: Arrow,
  },
  data() {
    return {
      text: "scroll to explorer",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.rotate().initRotate();
    });
  },
  methods: {
    rotate() {
      // @ts-ignore
      const tl = this.$gsap.timeline();

      const initRotate = () => {
        tl.to("#circle", {
          duration: "14",
          ease: "none",
          rotate: 360,
          transformOrigin: "center center",
          repeat: -1,
        });
      };

      return { initRotate };
    },
  },
});
</script>
<style lang="scss" src="./circleEffect.scss" scoped></style>
