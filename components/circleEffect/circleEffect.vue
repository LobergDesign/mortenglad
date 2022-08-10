<template>
  <div class="circular-effect" data-circle-effect>
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
    <arrow class="svg-arrow" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Scrollbar from "smooth-scrollbar";
import Arrow from "~/assets/svg/arrow.svg?inline";
export default Vue.extend({
  name: "CircleEffect",
  components: {
    arrow: Arrow,
  },
  data() {
    return {
      text: "Scroll to explorer",
      ease: "power4.out",
      duration: 1.6,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.rotate().initRotate();
      this.followMouse();
      setTimeout(() => {
        this.handleScroll();
      }, 2600);
    });
  },
  methods: {
    rotate() {
      const tl = this.$gsap.timeline();

      const initRotate = () => {
        tl.to("#circle", {
          duration: "10",
          ease: "none",
          rotate: 360,
          transformOrigin: "center center",
          repeat: -1,
        });
      };

      return { initRotate };
    },
    followMouse() {
      const gsap = this.$gsap;
      const followElm = "[data-circle-effect]";
      gsap.set(followElm, { xPercent: -50, yPercent: -50 });

      const ball = document.querySelector(followElm);
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;

      const xSet = gsap.quickSetter(ball, "x", "px");
      const ySet = gsap.quickSetter(ball, "y", "px");

      window.addEventListener("mousemove", (e) => {
        // console.log("object", e);
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
    },
    showHideElm(isHidden: boolean) {
      const tl = this.$gsap.timeline();
      const followElm = "[data-circle-effect]";

      if (isHidden) {
        tl.to(followElm, {
          ease: this.ease,
          duration: this.duration,
          opacity: 0,
          scale: 0.3,
        });
      } else {
        tl.to(followElm, {
          ease: this.ease,
          duration: this.duration,
          scale: 1,
          opacity: 1,
        });
      }
    },
    handleScroll() {
      const smoothWrap = document.querySelector(
        ".smooth-container"
      ) as HTMLElement;
      const smoothScroll = Scrollbar.get(smoothWrap);

      const myListener = () => {
        smoothScroll!.addListener((status) => {
          if (status.offset.y > 500) {
            this.showHideElm(true);
          } else {
            this.showHideElm(false);
          }
        });
      };
      myListener();
    },
  },
});
</script>
<style lang="scss" src="./circleEffect.scss" scoped></style>
