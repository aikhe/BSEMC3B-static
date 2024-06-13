import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "../components/ui/menu.tsx";
import { Logo } from "../components/ui/logo.tsx";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 100 && scrollTop > lastScrollTop) {
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
      <header
        className="pointer-events-none fixed z-50 flex h-[8.5rem]
        w-full items-center px-[4.5rem] thick:px-28"
      >
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Logo />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-grow justify-end">
          <Menu />
        </div>
      </header>

      <nav
        className="absolute grid h-[8.5rem] w-full items-center justify-center
        text-smol font-regular"
      >
        <ul className="z-50 flex gap-10">
          <li>
            <a
              href=""
              className="font-montserrat tracking-smol opacity-lighter"
            >
              ABOUT
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a className="relative cursor-pointer font-montserrat tracking-smol">
              BLOGS
              <div className="absolute -bottom-[2px] left-1/2 h-[2px] w-[115%] -translate-x-1/2 bg-black/70"></div>
            </a>
          </li>
          <li className="">
            <a
              href=""
              className="font-montserrat tracking-smol opacity-lighter"
            >
              MOTORS
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
