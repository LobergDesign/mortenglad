<template>
  <div v-locomotive="{ options }" class="js-locomotive">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "LocomotiveScroll",
  directives: {
    locomotive: {
      inserted(el: any, binding: any, vnode: any) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options,
        });
        vnode.context.locomotive.on("scroll", (e) => {
          vnode.context.onScroll(e);
          vnode.context.$emit("scroll");
        });
        vnode.context.$emit("init");
      },
      unbind(el: any, binding: any, vnode: any) {
        vnode.context.locomotive.destroy();
        vnode.context.locomotive = undefined;
      },
    },
  },
  props: {
    gettedOptions: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    locomotive: undefined,
    defaultOptions: {
      smooth: true,
    },
  }),
  computed: {
    options() {
      return { ...this.defaultOptions, ...this.gettedOptions };
    },
  },
  /**
   *  You can remove mounted hook if you don't needs custom updates
   *  Call this.$nuxt.$emit('update-locomotive') wherever you want
   */
  mounted() {
    this.$nuxt.$on("update-locomotive", () => {
      this?.locomotive?.update();
    });
  },
  methods: {
    onScroll(e: any) {
      if (typeof this.$store._mutations["app/setScroll"] !== "undefined") {
        this.$store.commit("app/setScroll", {
          isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll, // x, y
        });
      }
    },
  },
};
</script>
