import { inviewSplitLineEffect } from "./transitions";

export default function (gsap: NLib.IGsap, SplitText: NLib.ISplitText) {
  const splitLineEffects = document.querySelectorAll(
    "[data-split-line-effect], [data-split-line-effect-bodytext] p"
  );

  const init = () => {
    splitLineEffects.forEach((element) => {
      inviewSplitLineEffect(element, gsap, SplitText).init();
    });
  };
  const action = () => {
    const initIo = (target: any) => {
      const io = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          const entry = entries[0] as IntersectionObserverEntry;
          if (entry.isIntersecting) {
            const e = entry.target as HTMLElement;
            // split line effect
            splitLineEffects &&
              inviewSplitLineEffect(e, gsap, SplitText).action();
            observer.unobserve(target);
          }
        }
      );
      io.observe(target);
    };
    // split line effect
    splitLineEffects && splitLineEffects.forEach(initIo);
  };
  return { action, init };
}
