import {
  useAnimationFrame,
  useTransform,
  useMotionValue,
  motion,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

export const ParralaxText = () => {
  const textScroll = useRef<HTMLDivElement>(null);

  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const springVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 340,
  });
  const velocityFactor = useTransform(springVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const transformX = useTransform(baseX, (v) => `${wrap(0, 100, v)}%`);

  const directionFactor = useRef<number>(-1);
  const baseVelocity = -5;

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <motion.div
      ref={textScroll}
      className={`absolute bottom-[7.5%] w-full gap-10`}
      style={{ x: transformX }}
    >
      <div className="relative">
        <img src="/moving.svg" alt="" />
        <img src="/moving.svg" className="absolute right-[100%] top-0" alt="" />
      </div>
    </motion.div>
  );
};
