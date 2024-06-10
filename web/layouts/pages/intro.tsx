import {
  useAnimationFrame,
  useTransform,
  useMotionValue,
  motion,
} from "framer-motion";
import { useRef } from "react";

const Intro: React.FC = () => {
  const textScroll = useRef<HTMLDivElement>(null);

  const baseX = useMotionValue(0);
  const transformX = useTransform(baseX, [0, 100], [0, 100], { clamp: false });

  const directionFactor = useRef<number>(1);
  const baseVelocity = 300;

  useAnimationFrame((_, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
    console.log(baseX);
  });

  return (
    <>
      <div className="absolute -z-[1] h-[130svh] w-full bg-slate-600">
        <img src="/intro.png" className="h-full w-full object-cover" alt="" />
      </div>

      <section
        className="relative flex h-[130svh] w-full flex-col
        items-end pt-36 font-montserrat"
      >
        <div className="mr-24 text-right">
          <h3 className="text-headings font-medium tracking-headings">
            Simplify Motor Concepts
          </h3>
          <p className="text-base font-regular leading-base tracking-base opacity-lighter">
            Our guide makes understanding electric
            <br /> motors simple with clear explanations
            <br /> and practical examples.
          </p>
        </div>

        <motion.div
          ref={textScroll}
          className="absolute bottom-[7.5%] flex w-full gap-10"
          style={{ x: transformX }}
        >
          <img src="/moving.svg" className="" alt="" />
          <img src="/moving.svg" className="" alt="" />
        </motion.div>
      </section>
    </>
  );
};

export default Intro;
