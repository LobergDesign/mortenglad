// config
const gsapConfig = {
  ease: "power4.out",
};

// initial header animation
// const inviewSplitCharAnimmation = (target: Element | Vue | (Element | Vue)[] | undefined, gsap: NGlobal.IGsap) => {
// 	const tl = gsap.timeline();

// 	return tl.fromTo(
// 		target,
// 		{ yPercent: -100 },
// 		{
// 			duration: 1,
// 			yPercent: 0,
// 			delay: 0.2,
// 			ease: gsapConfig.ease,
// 		}
// 	);
// };

/// USED IN TRANSITION SETTER
// in view split line anitmaiton
const inviewSplitLineEffect = (
  target: any,
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
    const childTarget = target.querySelectorAll(".child");
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
export { inviewSplitLineEffect };
