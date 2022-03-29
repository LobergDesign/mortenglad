import ioTransitions from "~/utils/transitionSetter";
import { loadSplitCharEffect } from "~/utils/transitions";
export default {
  computed: {
    appIsReady() {
      const isAppReady = this.$store.state.global.isApplicationReady;
      return isAppReady;
    },
  },
  watch: {
    appIsReady() {
      this.appIsReady && this.loadAnimation();
    },
  },
  mounted() {
    // this will only trigger on route changes
    this.appIsReady && this.loadAnimation();
  },
  methods: {
    loadAnimation() {
      const SplitText = this.$SplitText;
      const gsap = this.$gsap as NLib.IGsap;
      const target = document.querySelector(
        "[data-load-split-char-effect]"
      ) as HTMLElement;
      this.$nextTick(() => {
        ioTransitions(gsap, SplitText).action();
        target && loadSplitCharEffect(target, gsap, SplitText).action();
      });
    },
  },
};
