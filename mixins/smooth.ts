import Scrollbar from "smooth-scrollbar";

export default {
  mounted() {
    this.setSmoothScroll();
  },
  methods: {
    setSmoothScroll() {
      const smoothWrap = document.querySelector(
        ".smooth-container"
      ) as HTMLElement;

      const scrollbar = () => {
        return Scrollbar.init(smoothWrap, {
          continuousScrolling: true,
          renderByPixels: true,
          damping: 0.09,
          thumbMinSize: 20,
        });
      };
      setTimeout(() => {
        smoothWrap.style.position = "absolute";

        scrollbar();
        // scrollbar().addListener((status: any) => {
        //   function roundUpNearest10(num: number) {
        //     return Math.ceil(num / 10) * 10;
        //   }
        //   const footerHeight = 460;
        //   // console.log("status", status);
        //   const limit = status.limit.y; // SLUT
        //   const offset = Math.round(status.offset.y);
        //   const footerTriggerPoint = limit - footerHeight; // START
        //   const footer = document.querySelector(".footer") as HTMLElement;
        //   const gsap = this.$gsap as NLib.IGsap;
        //   if (offset > footerTriggerPoint) {
        //     // this.controlFooter(true);
        //     const val = Math.round(limit - offset);
        //     // footer.style.transform = `translateY(${val}px)`;
        //     console.log("roundUpNearest10(val)", roundUpNearest10(val));
        //     gsap.to(footer, {
        //       opacity: 1,
        //       duration: 0.1,
        //       y: roundUpNearest10(val),
        //       ease: "none",
        //     });
        //   } else {
        //     gsap.to(footer, {
        //       opacity: 0,
        //       duration: 0,
        //       y: footerHeight,
        //       ease: "none",
        //     });
        //   }
        // });
      }, 1000);
    },
  },
};
