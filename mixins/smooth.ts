import Scrollbar from "smooth-scrollbar";

export default {
  mounted() {
    this.setSmoothScroll();
  },
  methods: {
    controlFooter(visible: boolean) {
      const gsap = this.$gsap as NLib.IGsap;
      const footer = document.querySelector(".footer") as HTMLElement;

      if (visible) {
        gsap.to(footer, {
          duration: 0,
          yPercent: -100,
          ease: "power4.inOut",
        });
      } else {
        gsap.to(footer, {
          duration: 0,
          yPercent: 0,
          ease: "power4.inOut",
        });
      }
    },
    setSmoothScroll() {
      const smoothWrap = document.querySelector(
        ".smooth-container"
      ) as HTMLElement;

      //   const blanket = document.querySelector(
      //     "[data-warm-blanket]"
      //   ) as HTMLElement;
      //   const blanketHeight = blanket.clientHeight;
      //   console.log("blanketHeight", blanketHeight);
      //   smoothWrap.style.height = blanketHeight + "px";
      const scrollbar = () => {
        return Scrollbar.init(smoothWrap, {
          continuousScrolling: true,
          renderByPixels: true,
          damping: 0.1,
          thumbMinSize: 20,
        });
      };
      setTimeout(() => {
        smoothWrap.style.position = "absolute";

        scrollbar();
        scrollbar().addListener((status) => {
          // console.log("status", status);
          const limit = status.limit.y;
          const offset = status.offset.y;
          const footerTriggerPoint = limit - 200;
          if (offset > footerTriggerPoint) {
            this.controlFooter(true);
          } else {
            this.controlFooter(false);
          }
        });
      }, 1000);
    },
  },
};
