// config
const gsapConfig = {
  ease: 'power4.out',
};

// initial h1 animation
const splitCharEffect = (
  target: Element | Element[] | undefined,
  gsap: NLib.IGsap,
  SplitText: NLib.ISplitText,
) => {
  const action = () => {
    SplitText.create(target, {
      type: 'chars',
      autoSplit: true,
      onSplit(self: any) {
        return gsap.from(self.chars, {
          x: -190,
          opacity: 0,
          fontWeight: 100,
          force3D: true,
          duration: 1.1,
          stagger: -0.05,
          mask: 'chars',
          ease: gsapConfig.ease,
        });
      },
    });
  };
  return { action };
};

/// USED IN TRANSITION SETTER
// in view split line anitmaiton
const inviewSplitLineEffect = (
  target: Element | Element[] | undefined,
  gsap: NLib.IGsap,
  SplitText: NLib.ISplitText,
) => {
  const action = () => {
    SplitText.create(target, {
      type: 'lines',
      autoSplit: true,
      onSplit(self: any) {
        return gsap.from(self.lines, {
          yPercent: 100,
          opacity: 0,
          force3D: true,
          stagger: 0.05,
          mask: 'lines',
          duration: 1.4,
          ease: gsapConfig.ease,
        });
      },
    });
  };
  return { action };
};

// initial h1 animation
const simpleInviewEffect = (
  target: Element | Element[] | undefined,
  gsap: NLib.IGsap,
) => {
  const action = () => {
    const t = target as HTMLElement;
    const accordionTarget = t.querySelector(
      '.accordion-item',
    ) as HTMLDivElement;

    if (accordionTarget) {
      setTimeout(() => {
        accordionTarget.classList.add('is-in-view');
      }, 50);
    }
    const tl = gsap.timeline();
    gsap.to(target, { autoAlpha: 1, duration: 0 });

    tl.fromTo(
      target,
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: gsapConfig.ease,
      },
    );
  };
  return { action };
};
export { inviewSplitLineEffect, splitCharEffect, simpleInviewEffect };
