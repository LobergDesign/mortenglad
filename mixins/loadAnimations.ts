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
      this.appIsReady && this.animations();
    },
  },
  mounted() {
    // this will only trigger on route changes
    if (this.appIsReady) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.animations();
        }, 200);
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

        ioTransitions(gsap, SplitText).action();
        target && splitCharEffect(target, gsap, SplitText).action();
      });
    },
  },
};
