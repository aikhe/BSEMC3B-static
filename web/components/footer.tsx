export const Footer = () => {
  return (
    <>
      <div className="bg-dark absolute -z-[1] mt-24 h-[35rem] w-full"></div>
      <footer className="text-light container mt-24 flex h-[35rem] w-full py-[5rem]">
        <div className="flex w-full flex-col justify-between">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href=""
                className="font-upright text-headingsans tracking-headingsans whitespace-nowrap
                text-center font-medium leading-[70%]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-upright text-headingsans tracking-headingsansleft-1/2 -translate-x-1/2
                whitespace-nowrap text-center font-medium leading-[70%]"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-upright text-headingsans tracking-headingsans whitespace-nowrap
                text-center font-medium leading-[70%]"
              >
                Motors
              </a>
            </li>
          </ul>

          <div className="flex h-fit items-center gap-4">
            <img className="size-24 h-fit" src="/RR.svg" alt="" />
            <span className="font-bruno text-light tracking-logo text-[1.8rem]">
              MOTORS
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col gap-14">
            <div className="flex justify-between">
              <ul>
                <li>
                  <a
                    href=""
                    className="font-montserrat tracking-smol text-smol leading-[95%]"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-montserrat tracking-smol text-smol leading-[95%]"
                  >
                    Twitter
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a
                    href=""
                    className="font-montserrat tracking-smol text-smol leading-[95%]"
                  >
                    3184-3425
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-montserrat tracking-smol text-smol leading-[95%]"
                  >
                    Manila, Caloocan City,
                    <br /> Phillipines
                  </a>
                </li>
              </ul>

              <div className="flex gap-2">
                <span
                  className="font-montserrat text-smol opacity-lighter
                tracking-smol"
                >
                  EN
                </span>
                <span
                  className="font-montserrat text-smol opacity-lighter
                tracking-smol"
                >
                  PH
                </span>
              </div>
            </div>

            <h2
              className="font-garamond text-subtitlesans tracking-subtitlesans relative
            break-all font-semibold italic leading-[80%]"
            >
              happy@joyriding.ph
            </h2>
          </div>

          <div className="flex items-end justify-between">
            <a
              href=""
              className="font-montserrat tracking-smol text-smol leading-[95%]"
            >
              DISCLAIMERS
            </a>
            <h3
              className="text-headings font-montserrat tracking-headings relative ml-8 font-medium
              leading-[70%]"
            >
              &copy;2024
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
};
