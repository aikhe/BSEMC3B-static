import { Menu } from "../../components/ui/menu.tsx";

const Components = () => {
  return (
    <section className="container">
      {/* <--- NAVIGATION ---> */}
      <div>
        <h3
          className="relative ml-8 font-montserrat text-subtitle font-medium
          tracking-subtitle"
        >
          NAV
          <span
            className="absolute -left-[2.25%] top-3 font-montserrat text-smol
            font-regular leading-[95%] tracking-smol"
          >
            01
          </span>
        </h3>
      </div>

      {/* <--- BUTTONS ---> */}
      <div>
        <h3
          className="relative ml-8 font-montserrat text-subtitle font-medium
          tracking-subtitle"
        >
          BTTN
          <span
            className="absolute -left-[2.25%] top-3 font-montserrat text-smol
            font-regular leading-[95%] tracking-smol"
          >
            02
          </span>
        </h3>
      </div>

      {/* <--- BURGER ---> */}
      <div>
        <h3
          className="relative ml-8 font-montserrat text-subtitle font-medium
          tracking-subtitle"
        >
          BURGER
          <span
            className="absolute -left-[2.25%] top-3 font-montserrat text-smol
            font-regular leading-[95%] tracking-smol"
          >
            03
          </span>
        </h3>

        <div className="inspect flex w-full flex-col items-end justify-end p-10">
          <Menu />
        </div>
      </div>
    </section>
  );
};

export default Components;
