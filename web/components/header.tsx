import { Burger } from "../components/ui/burger.tsx";
import { Logo } from "../components/ui/logo.tsx";

export const Header = () => {
  return (
    <>
      <header className="inspect container fixed -z-[1] flex h-[8.5rem] items-center justify-between">
        <Logo />
        <Burger />
      </header>

      <nav className="container grid h-[8.5rem] justify-center">
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
      </nav>
    </>
  );
};
