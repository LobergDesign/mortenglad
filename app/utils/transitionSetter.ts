import { inviewSplitLineEffect, simpleInviewEffect } from './transitions';

export default function (gsap: NLib.IGsap, SplitText: NLib.ISplitText) {
  const splitLineEffects = document.querySelectorAll(
    '[data-split-line-effect], [data-split-line-effect-bodytext] p',
  );
  const simpleEffect = document.querySelectorAll(
    '[data-inview-simple-show-effect]',
  );

  const action = () => {
    const splitLineEffectsIO = (target: any) => {
      const io = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          const entry = entries[0] as IntersectionObserverEntry;
          if (entry.isIntersecting) {
            const e = entry.target as HTMLElement;
            splitLineEffects &&
              inviewSplitLineEffect(e, gsap, SplitText).action();

            observer.unobserve(target);
          }
        },
      );
      io.observe(target);
    };
    const simpleShowEffect = (target: any) => {
      const io = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer) => {
          const entry = entries[0] as IntersectionObserverEntry;
          if (entry.isIntersecting) {
            const e = entry.target as HTMLElement;

            simpleEffect && simpleInviewEffect(e, gsap).action();

            observer.unobserve(target);
          }
        },
      );

      io.observe(target);
    };
    // split line effect
    if (splitLineEffects) {
      splitLineEffects.forEach(splitLineEffectsIO);
    }

    if (simpleEffect) {
      simpleEffect.forEach(simpleShowEffect);
    }
  };
  return { action };
}
