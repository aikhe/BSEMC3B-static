import {
  useAnimationFrame,
  useTransform,
  useMotionValue,
  motion,
} from "framer-motion";
import { useRef } from "react";

export const Parralax = () => {
  const textScroll = useRef<HTMLDivElement>(null);

  let baseX = useMotionValue(0);
  const transformX = useTransform(baseX, [0, 100], [0, 100], { clamp: false });

  const directionFactor = useRef<number>(-1);
  const baseVelocity = 200;

  const viewPortWidth = window.innerWidth;

  useAnimationFrame((_, delta) => {
    transformX.onChange((value) => {
      if (value >= viewPortWidth || value <= viewPortWidth * -1) {
        baseX.set(0);
      }
    });

    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
    console.log(baseX);
  });

  return (
    <motion.div
      ref={textScroll}
      className={`absolute bottom-[7.5%] w-full gap-10`}
      style={{ x: transformX }}
    >
      <div className="relative">
        <img src="/moving.svg" alt="" />
        <img
          src="/moving.svg"
          className={`absolute ${directionFactor.current >= 1 ? "right-[100vw]" : "left-[100vw]"}
              top-0`}
          alt=""
        />
      </div>
    </motion.div>
  );
};
