// config
const gsapConfig = {
  ease: "power4.out",
};

// initial h1 animation
const splitCharEffect = (
  target: Element | Vue | (Element | Vue)[] | undefined,
  gsap: NLib.IGsap,
  SplitText: NLib.ISplitText
) => {
  const action = () => {
    const tl = gsap.timeline();
    gsap.to(target, { autoAlpha: 1, duration: 0 });
    // @ts-ignore
    const mySplitText = new SplitText(target, { type: "chars" });
    const chars = mySplitText.chars;

    tl.fromTo(
      chars,
      { opacity: 0, x: -190, fontWeight: 100 },
      {
        fontWeight: 400,
        x: 0,
        opacity: 1,
        force3D: true,
        duration: 1.1,
        stagger: -0.05,
        ease: gsapConfig.ease,
      }
    );
  };
  return { action };
};

/// USED IN TRANSITION SETTER
// in view split line anitmaiton
const inviewSplitLineEffect = (
  target: Element | Vue | (Element | Vue)[] | undefined,
  gsap: NLib.IGsap,
  SplitText: NLib.ISplitText
) => {
  const action = () => {
    const t1 = gsap.timeline();
    gsap.to(target, { autoAlpha: 1, duration: 0 });
    // eslint-disable-next-line no-new
    new (SplitText as any)(target, {
      type: "lines",
      linesClass: "child",
    });
    // eslint-disable-next-line no-new
    new (SplitText as any)(target, {
      type: "lines",
      linesClass: "overflow-hidden",
    });
    const childTarget = (target as HTMLElement).querySelectorAll(".child");
    t1.fromTo(
      childTarget,
      { yPercent: 100, opacity: 0 },
      {
        duration: 1.4,
        yPercent: 0,
        force3D: true,
        opacity: 1,
        ease: gsapConfig.ease,
        stagger: 0.05,
      }
    );
  };
  return { action };
};

// initial h1 animation
const simpleInviewEffect = (
  target: Element | Vue | (Element | Vue)[] | undefined,
  gsap: NLib.IGsap
) => {
  const action = () => {
    const t = target as HTMLElement;
    const accordionTarget = t.querySelector(
      ".accordion-item"
    ) as HTMLDivElement;

    if (accordionTarget) {
      setTimeout(() => {
        accordionTarget.classList.add("is-in-view");
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
      }
    );
  };
  return { action };
};
export { inviewSplitLineEffect, splitCharEffect, simpleInviewEffect };
