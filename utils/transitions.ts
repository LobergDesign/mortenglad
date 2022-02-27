// config
const gsapConfig = {
  ease: "power4.out",
};

// initial h1 animation
const loadSplitCharEffect = (
  target: Element | Vue | (Element | Vue)[] | undefined,
  gsap: NLib.IGsap,
  SplitText: NLib.ISplitText
) => {
  const init = () => {
    gsap.set(target, { opacity: 0 });
  };
  const action = () => {
    const tl = gsap.timeline();
    // @ts-ignore
    const mySplitText = new SplitText(target, { type: "chars" });
    const chars = mySplitText.chars;
    gsap.to(target, { opacity: 1 });

    tl.fromTo(
      chars,
      { opacity: 0, x: -150, fontWeight: 100 },
      {
        fontWeight: 400,
        x: 0,
        opacity: 1,
        force3D: true,
        duration: 0.9,
        stagger: 0.05,
        ease: gsapConfig.ease,
      }
    );
  };
  return { init, action };
};

/// USED IN TRANSITION SETTER
// in view split line anitmaiton
const inviewSplitLineEffect = (
  target: Element | Vue | (Element | Vue)[] | undefined,
  gsap: NLib.IGsap,
  SplitText: NLib.ISplitText
) => {
  const init = () => {
    gsap.set(target, { opacity: 0 });
  };
  const action = () => {
    const t1 = gsap.timeline();
    gsap.to(target, { opacity: 1 });
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
  return { init, action };
};
export { inviewSplitLineEffect, loadSplitCharEffect };
