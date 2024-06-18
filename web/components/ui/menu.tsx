import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menu = {
  initial: {
    height: "0rem",
    width: "25rem",
    opacity: 0,
  },
  open: {
    height: "32rem",
    opacity: 1,
  },
  closed: {
    height: "0rem",
    opacity: 0,
  },
};

interface MenuProps {
  isOpen?: boolean;
}

export const Menu = ({ isOpen = false }: MenuProps) => {
  const [isActive, setIsActive] = useState(isOpen ? true : false);

  return (
    <div className="relative text-light">
      <button
        onClick={() => setIsActive(!isActive)}
        className={`pointer-events-auto h-[2.35rem] w-[6.5rem]
        rounded-full bg-secondary2 transition-colors duration-300`}
      >
        <span className="font-montserrat text-smol font-regular tracking-smol">
          MENU
        </span>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={menu}
            initial="initial"
            animate="open"
            exit={{
              opacity: 0,
              height: "0rem",
            }}
            className={`pointer-events-auto absolute right-0 top-[3.5rem] flex flex-col
            justify-between rounded-[2rem] bg-secondary2 px-8 py-16`}
          >
            <div className="flex flex-col items-start gap-12">
              <a
                href=""
                className="font-garamond text-subtitlesans font-semibold italic
                leading-fit tracking-subtitlesans"
              >
                ABOUT
              </a>
              <a
                href=""
                className="relative font-garamond text-subtitlesans font-semibold
                italic leading-fit tracking-subtitlesans"
              >
                BLOGS
                <div
                  className="absolute -bottom-[12px] left-1/2 ml-[2px] h-[2px] w-[110%]
                  -translate-x-1/2 bg-light"
                ></div>
              </a>
              <a
                href=""
                className="font-garamond text-subtitlesans font-semibold italic
                leading-fit tracking-subtitlesans"
              >
                MOTORS
              </a>
            </div>

            <div className="flex">
              <div className="flex w-full flex-col items-start gap-4">
                <a
                  href=""
                  className="text-right font-montserrat text-smol font-regular
                  leading-[95%] tracking-smol"
                >
                  ANOTHER PAGE
                </a>
                <a
                  href=""
                  className="text-right font-montserrat text-smol font-regular
                  leading-[95%] tracking-smol"
                >
                  PAGES
                </a>
              </div>

              <div className="flex w-full flex-col items-end gap-4">
                <a
                  href=""
                  className="text-right font-montserrat text-smol font-regular
                  leading-[95%] tracking-smol"
                >
                  PAGE
                </a>
                <a
                  href=""
                  className="text-right font-montserrat text-smol font-regular
                  leading-[95%] tracking-smol "
                >
                  MORE PAGE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
