import Scrollbar from "smooth-scrollbar";

export default {
  mounted() {
    this.setSmoothScroll();
    window.addEventListener("resize", this.handleSmoothScrollDevices);
  },
  methods: {
    myScrollInit(elm: HTMLElement) {
      return Scrollbar.init(elm, {
        continuousScrolling: true,
        renderByPixels: true,
        damping: 0.09,
        thumbMinSize: 20,
      });
    },
    isDevices() {
      return !!window.matchMedia("(max-width: 1025px)").matches;
    },
    setSmoothScroll() {
      if (!this.isDevices()) {
        const smoothWrap = document.querySelector(
          ".smooth-container"
        ) as HTMLElement;
        setTimeout(() => {
          smoothWrap.style.position = "absolute";
          this.myScrollInit(smoothWrap);
        }, 1000);
      }
    },
    handleSmoothScrollDevices() {
      const smoothWrap = document.querySelector(
        ".smooth-container"
      ) as HTMLElement;
      if (!this.isDevices()) {
        setTimeout(() => {
          smoothWrap.style.position = "absolute";
          this.myScrollInit(smoothWrap);
        }, 100);
      } else {
        smoothWrap.style.position = "relative";
        Scrollbar.destroy(smoothWrap);
      }
    },
  },
};
