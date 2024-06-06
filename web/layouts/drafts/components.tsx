import { Menu } from "../../components/ui/menu.tsx";

const Components = () => {
  return (
    <section className="container mt-20">
      {/* <--- NAVIGATION ---> */}
      <div>
        <h3
          className="relative ml-8 font-montserrat text-subtitle font-medium
            tracking-subtitle"
        >
          NAV
          <span
            className="absolute -left-[2rem] top-3 font-montserrat text-smol
              font-regular leading-[95%] tracking-smol"
          >
            01
          </span>
        </h3>

        <div className="mt-5 flex gap-10">
          <a
            href=""
            className="text-right font-montserrat text-smol font-regular
              leading-[95%] tracking-smol opacity-lighter"
          >
            ABOUT
          </a>
          <a href="" className="relative flex flex-col items-center">
            <span
              className="text-right font-montserrat text-smol font-regular
                leading-[95%] tracking-smol"
            >
              BLOGS
            </span>
            <div className="absolute -bottom-[60%] h-[2px] w-[4.5rem] bg-black/70"></div>
          </a>
          <a
            href=""
            className="text-right font-montserrat text-smol font-regular
              leading-[95%] tracking-smol opacity-lighter"
          >
            MOTORS
          </a>
        </div>

        {/* <--- BUTTONS ---> */}
        <div className="mt-20">
          <h3
            className="relative ml-8 font-montserrat text-subtitle font-medium
          tracking-subtitle"
          >
            BTTN
            <span
              className="absolute -left-[2rem] top-3 font-montserrat text-smol
            font-regular leading-[95%] tracking-smol"
            >
              02
            </span>
          </h3>

          <div className="mt-5 flex gap-6">
            <button
              className="flex h-[3.25rem] w-[8rem] items-center justify-center rounded-full
              border-2 border-black bg-[#C7CBBD] shadow-[5px_5px_0px_black]"
            >
              <p
                className="text-right font-montserrat text-smol font-regular
                leading-[95%] tracking-smol"
              >
                ABOUT
              </p>
            </button>

            <button
              className="flex h-[3.25rem] w-[8rem] items-center justify-center rounded-full
              border-2 border-black bg-[#424242] shadow-[5px_5px_0px_black]"
            >
              <p
                className="text-right font-montserrat text-smol font-regular
                leading-[95%] tracking-smol text-light"
              >
                BLOGS
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* <--- BURGER ---> */}
      <div className="mt-20">
        <h3
          className="relative ml-8 font-montserrat text-subtitle font-medium
          tracking-subtitle"
        >
          BURGER
          <span
            className="absolute -left-[2rem] top-3 font-montserrat text-smol
            font-regular leading-[95%] tracking-smol"
          >
            03
          </span>
        </h3>

        <div className="mt-5 flex h-[33.5rem] w-[25rem] justify-end">
          <Menu isOpen={true} />
        </div>
      </div>
    </section>
  );
};

export default Components;
