import { inviewSplitLineEffect } from "./transitions";

export default function (gsap: NLib.IGsap, SplitText: NLib.ISplitText) {
  const splitLineEffects = document.querySelectorAll(
    "[data-split-line-effect], [data-split-line-effect-bodytext] p"
  );
  const splitCharEffects = document.querySelectorAll(
    "[data-inview-split-char-effect]"
  );

  const action = () => {
    const initIo = (target: any) => {
      const io = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          const entry = entries[0] as IntersectionObserverEntry;
          if (entry.isIntersecting) {
            const e = entry.target as HTMLElement;
            splitLineEffects &&
              inviewSplitLineEffect(e, gsap, SplitText).action();

            observer.unobserve(target);
          }
        }
      );
      io.observe(target);
    };
    const nextIo = (target: any) => {
      const io = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          const entry = entries[0] as IntersectionObserverEntry;
          if (entry.isIntersecting) {
            const e = entry.target as HTMLElement;

            splitCharEffects &&
              inviewSplitLineEffect(e, gsap, SplitText).action();

            observer.unobserve(target);
          }
        }
      );

      io.observe(target);
    };
    // split line effect
    if (splitLineEffects) {
      splitLineEffects.forEach(initIo);
    }

    if (splitCharEffects) {
      splitCharEffects.forEach(nextIo);
    }
  };
  return { action };
}
