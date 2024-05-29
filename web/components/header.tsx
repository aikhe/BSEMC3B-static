import { Burger } from "../components/ui/burger.tsx";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img className="size-10 text-white" src="/RR-dark.svg" alt="" />
        <span className="font-bruno">MOTORS</span>
      </div>

      <ul className="flex gap-10">
        <li>
          <a
            href="#ABOUT"
            className="font-montserrat tracking-tight opacity-50"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a href="#BLOG" className="font-montserrat tracking-tight">
            BLOG
          </a>
        </li>
        <li>
          <a
            href="#MOTORS"
            className="font-montserrat tracking-tight opacity-50"
          >
            MOTORS
          </a>
        </li>
      </ul>

      <Burger />
    </div>
  );
};
