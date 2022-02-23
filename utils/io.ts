import { simpleAnimation, inviewSplitLineEffect } from "~/utils/transitions";

const ioSimple = (targets: any, gsap: NLib.IGsap) => {
  // set initial value

  simpleAnimation(targets, gsap).init();

  const initIo = (target: any) => {
    const io = new IntersectionObserver((entries: any, observer) => {
      const en = entries[0];
      if (en.isIntersecting) {
        const e = en.target as HTMLElement;
        simpleAnimation(e, gsap).action();
        observer.unobserve(e);
      }
    });
    io.observe(target);
  };
  targets.forEach(initIo);
};
// const ioSplitLineAnimation = (
//   targets: any,
//   gsap: NLib.IGsap,
//   SplitText: NLib.ISplitText
// ) => {
//   // set initial value

//   const initIo = (target: any) => {
//     const io = new IntersectionObserver((entries: any, observer) => {
//       const en = entries[0];
//       if (en.isIntersecting) {
//         const target = en.target as HTMLElement;

//         const tl = gsap.timeline();

//         // @ts-ignore
//         const mySplitText = new SplitText(target, {
//           type: "chars",
//         });
//         const chars = mySplitText.chars;

//         tl.fromTo(
//           chars,
//           {
//             opacity: 0,
//             x: -120,
//             fontWeight: 100,
//           },
//           {
//             fontWeight: 400,
//             x: 0,
//             opacity: 1,
//             force3D: true,
//             duration: 0.9,
//             stagger: 0.05,
//             ease: "power3.out",
//           }
//         );
//         observer.unobserve(target);
//       }
//     });
//     io.observe(target);
//   };
//   targets.forEach(initIo);
// };
const ioSplitLineAnimation = (
  targets: any,
  gsap: NLib.IGsap,
  SplitText: NLib.ISplitText
) => {
  // set initial value

  const initIo = (target: any) => {
    const options = {
      rootMargin: "300px",
    };
    const io = new IntersectionObserver((entries: any, observer) => {
      const en = entries[0];
      const target = en.target as HTMLElement;
      inviewSplitLineEffect(target, gsap, SplitText).init();
      if (en.isIntersecting) {
        inviewSplitLineEffect(target, gsap, SplitText).action();
        observer.unobserve(target);
      }
    }, options);
    io.observe(target);
  };
  targets.forEach(initIo);
};
export { ioSimple, ioSplitLineAnimation };
