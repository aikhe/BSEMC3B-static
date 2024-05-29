import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
          <h1 className="font-montserrat text-title tracking-title font-light leading-[70%]">
            MOTOR CONCEPT’S
          </h1>
          <h1
            className="font-unicase text-titlesans tracking-titlesans font-light
          leading-[65%]"
          >
            MADE EASY
          </h1>
          <p
            className="font-montserrat font-regular tracking-smol text-smol absolute -bottom-[55%]
          mt-6 max-w-[40ch] leading-[95%]"
          >
            Comprehensive guides that clarify electric motors with detailed
            explanations. Ideal for professionals.
          </p>
        </div>

        {isVisible && (
          <img
            src="/down.svg"
            className="absolute bottom-6 size-12 animate-bounce"
            alt=""
          />
        )}
      </section>
    </>
  );
};

export default Hero;
