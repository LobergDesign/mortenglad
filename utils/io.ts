import { simpleAnimation } from "~/utils/transitions";

const ioSimple = (targets: any, gsap: NLib.IGsap) => {
  console.log("targets from io.ts", targets);
  // set initial value

  simpleAnimation(targets, gsap).init();

  const initIo = (target: any) => {
    const io = new IntersectionObserver((entries: any, observer) => {
      const en = entries[0];
      console.log("entries", en);
      if (en.isIntersecting) {
        const e = en.target as HTMLElement;
        console.log("e", en.isIntersecting);
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
    const io = new IntersectionObserver((entries: any, observer) => {
      const en = entries[0];
      const target = en.target as HTMLElement;
      const t1 = gsap.timeline();
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
      t1.set(".child", {
        yPercent: 100,
        opacity: 0,
      });
      //   console.log("target", en);
      if (en.isIntersecting) {
        t1.to(".child", {
          duration: 0.8,
          yPercent: 0,
          force3D: true,
          opacity: 1,
          ease: "power3.inOut",
          stagger: 0.05,
        });
        observer.unobserve(target);
      }
    });
    io.observe(target);
  };
  targets.forEach(initIo);
};
export { ioSimple, ioSplitLineAnimation };
