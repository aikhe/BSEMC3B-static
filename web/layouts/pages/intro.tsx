import {
  useAnimationFrame,
  useTransform,
  useMotionValue,
  motion,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

const Intro: React.FC = () => {
  const textScroll = useRef<HTMLDivElement>(null);

  let baseX = useMotionValue(0);
  const transformX = useTransform(baseX, (v) => `${wrap(0, 100, v)}%`);

  const directionFactor = useRef<number>(-1);
  const baseVelocity = -20;

  useAnimationFrame((_, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
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
          className={`absolute bottom-[7.5%] w-full gap-10`}
          style={{ x: transformX }}
        >
          <div className="relative">
            <img src="/moving.svg" alt="" />
            <img
              src="/moving.svg"
              className="absolute right-[100%] top-0"
              alt=""
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Intro;
