import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 500 && scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else if (scrollTop < lastScrollTop) {
      setIsVisible(true);
    }
    setLastScrollTop(scrollTop);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollTop, timeoutId]);

  return (
    <>
      <div className="absolute -z-[1] h-[100svh] w-full bg-slate-600">
        <img src="/hero.png" className="h-full w-full object-cover" alt="" />
      </div>

      <section
        className="container flex h-[100svh] w-full flex-col items-center justify-center
      text-center"
      >
        <div className="relative flex flex-col items-center justify-center gap-7 text-center">
          <h1 className="font-montserrat text-title font-light leading-[70%] tracking-title">
            MOTOR CONCEPT’S
          </h1>
          <h1
            className="font-unicase text-titlesans font-light leading-[65%]
          tracking-titlesans"
          >
            MADE EASY
          </h1>
          <p
            className="absolute -bottom-[55%] mt-6 max-w-[40ch] font-montserrat text-smol
          font-regular leading-[95%] tracking-smol"
          >
            Comprehensive guides that clarify electric motors with detailed
            explanations. Ideal for professionals.
          </p>
        </div>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src="/down.svg"
                className="absolute bottom-6 size-12 animate-bounce"
                alt=""
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Hero;
