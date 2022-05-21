import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const install = (Vue) => {
  Vue.prototype.LocomotiveScroll = LocomotiveScroll;
};
console.log("install", LocomotiveScroll);
export default install;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
  console.log("install sdfds", install);
  // @ts-ignore
  if (install.installed) {
    console.log("installsdfsdfdsfsdf" + install);
    install.installed = false;
  }
}
