import { inviewSplitLineEffect, simpleInviewEffect } from './transitions';

// Store active observers for cleanup
let splitLineObserver: IntersectionObserver | null = null;
let simpleEffectObserver: IntersectionObserver | null = null;

export default function (gsap: NLib.IGsap, SplitText: NLib.ISplitText) {
  const action = () => {
    // Query elements
    const splitLineEffects = document.querySelectorAll(
      '[data-split-line-effect], [data-split-line-effect-bodytext] p',
    );
    const simpleEffects = document.querySelectorAll(
      '[data-inview-simple-show-effect]',
    );

    // Observer options - using defaults for smooth performance
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0,
    };

    // Single observer for split line effects
    if (splitLineEffects.length > 0) {
      // Disconnect previous observer if it exists
      if (splitLineObserver) {
        splitLineObserver.disconnect();
      }

      splitLineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            // Small delay to prevent too many concurrent animations
            setTimeout(() => {
              inviewSplitLineEffect(element, gsap, SplitText).action();
            }, index * 50);
            // Unobserve after animation triggers (one-time animation)
            splitLineObserver?.unobserve(element);
          }
        });
      }, observerOptions);

      // Observe all split line elements with single observer
      splitLineEffects.forEach((element) => {
        splitLineObserver?.observe(element);
      });
    }

    // Single observer for simple effects
    if (simpleEffects.length > 0) {
      // Disconnect previous observer if it exists
      if (simpleEffectObserver) {
        simpleEffectObserver.disconnect();
      }

      simpleEffectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            // Small delay to prevent too many concurrent animations
            setTimeout(() => {
              simpleInviewEffect(element, gsap).action();
            }, index * 50);
            // Unobserve after animation triggers (one-time animation)
            simpleEffectObserver?.unobserve(element);
          }
        });
      }, observerOptions);

      // Observe all simple effect elements with single observer
      simpleEffects.forEach((element) => {
        simpleEffectObserver?.observe(element);
      });
    }
  };

  const cleanup = () => {
    // Disconnect observers when no longer needed
    if (splitLineObserver) {
      splitLineObserver.disconnect();
      splitLineObserver = null;
    }
    if (simpleEffectObserver) {
      simpleEffectObserver.disconnect();
      simpleEffectObserver = null;
    }
  };

  return { action, cleanup };
}
