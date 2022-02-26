import { inviewSplitLineEffect, loadSplitCharEffect } from "./transitions";

export default function (gsap: NLib.IGsap, SplitText: NLib.ISplitText) {
  const splitLineEffects = document.querySelectorAll(
    "[data-split-line-effect], [data-split-line-effect-bodytext] p"
  );
  const splitCharEffects = document.querySelectorAll(
    "[data-inview-split-char-effect]"
  );

  const init = () => {
    if (splitLineEffects) {
      splitLineEffects.forEach((element) => {
        inviewSplitLineEffect(element, gsap, SplitText).init();
      });
    }
    if (splitCharEffects) {
      splitCharEffects.forEach((element) => {
        loadSplitCharEffect(element, gsap, SplitText).init();
      });
    }
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

      const nextIo = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          const entry = entries[0] as IntersectionObserverEntry;
          if (entry.isIntersecting) {
            const e = entry.target as HTMLElement;
            // split char effect
            splitCharEffects &&
              loadSplitCharEffect(e, gsap, SplitText).action();

            observer.unobserve(target);
          }
        }
      );
      nextIo.observe(target);
    };
    // split line effect
    if (splitLineEffects) {
      splitLineEffects.forEach(initIo);
    }

    if (splitCharEffects) {
      splitCharEffects.forEach(initIo);
    }
  };
  return { action, init };
}
