import ioTransitions from "~/utils/transitionSetter";
import { splitCharEffect } from "~/utils/transitions";
export default {
  computed: {
    appIsReady() {
      const isAppReady = this.$store.state.global.isApplicationReady;
      return isAppReady;
    },
  },
  watch: {
    appIsReady() {
      // will run on first load after init load is done

      this.$nextTick(() => {
        setTimeout(() => {
          this.appIsReady && this.animations();
        }, 500);
      });
    },
  },
  mounted() {
    // this will only trigger on route changes
    if (this.appIsReady) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.animations();
        }, 300);
      });
    }
  },
  methods: {
    animations() {
      this.$nextTick(() => {
        const SplitText = this.$SplitText;
        const gsap = this.$gsap as NLib.IGsap;
        const target = document.querySelector(
          "[data-load-split-char-effect]"
        ) as HTMLElement;
        setTimeout(() => {
          ioTransitions(gsap, SplitText).action();
        }, 100);
        target && splitCharEffect(target, gsap, SplitText).action();
      });
    },
  },
};
