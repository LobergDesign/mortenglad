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
          const footer = document.querySelector(".footer") as HTMLElement;
          if (offset > footerTriggerPoint) {
            footer.style.opacity = "1";
          } else {
            footer.style.opacity = "0";
          }
        });
      }, 1000);
    },
  },
};
