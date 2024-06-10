import { useState } from "react";
import { motion } from "framer-motion";

const menu = {
  open: {
    width: "25rem",
    height: "30rem",
  },
  closed: {
    width: "25rem",
    height: "0rem",
    opacity: "0",
  },
};

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className={`pointer-events-auto relative h-[2.35rem] w-[6.5rem]
        rounded-full bg-secondary2 text-light transition-colors duration-300`}
      >
        <span className="font-montserrat text-smol font-regular tracking-smol">
          MENU
        </span>

        <motion.div
          variants={menu}
          animate={isActive ? "open" : "closed"}
          className={`absolute right-0 top-[3.5rem] rounded-[2rem] bg-secondary2`}
        ></motion.div>
      </button>
    </>
  );
};
