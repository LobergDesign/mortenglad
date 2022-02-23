import { inviewSplitLineEffect } from "./transitions";

export default function (gsap: NLib.IGsap, SplitText: NLib.ISplitText) {
  const targets = document.querySelectorAll("[data-split-line-effect]");
  const ioSplitLineAnimation = () => {
    const initIo = (target: any) => {
      const io = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          console.log("entries", entries);
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              console.log("object", entry.target);
              const e = entry.target as HTMLElement;
              inviewSplitLineEffect(e, gsap, SplitText).action();
              observer.unobserve(target);
            }
          });
        }
      );
      io.observe(target);
    };
    targets.forEach(initIo);
  };
  return ioSplitLineAnimation();
}
