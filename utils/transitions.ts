// config
const gsapConfig = {
  ease: "power3.out",
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
const simpleAnimation = (target: HTMLElement, gsap: NLib.IGsap) => {
  const init = () => {
    gsap.set(target, {
      opacity: 0,
      x: -120,
      fontWeight: 100,
    });
  };

  const action = () => {
    gsap.to(target, {
      fontWeight: 400,
      x: 0,
      opacity: 1,
      force3D: true,
      duration: 0.9,
      stagger: 0.05,
      ease: gsapConfig.ease,
    });
  };
  return { init, action };
};

// headline animation
const inviewSplitCharAnimmation = (
  target: HTMLElement,
  gsap: NLib.IGsap,
  splitText: NLib.ISplitText
) => {
  const SplitText = splitText;
  const tl = gsap.timeline();
  // @ts-ignore
  const mySplitText = new SplitText(target, {
    type: "chars",
  });
  const chars = mySplitText.chars;

  const init = () => {
    gsap.set(chars, {
      opacity: 0,
      x: -120,
      fontWeight: 100,
    });
  };

  const action = () => {
    tl.to(chars, {
      fontWeight: 400,
      x: 0,
      opacity: 1,
      force3D: true,
      duration: 0.9,
      stagger: 0.05,
      ease: gsapConfig.ease,
    });
  };
  return { init, action };
};

export { inviewSplitCharAnimmation, simpleAnimation };
