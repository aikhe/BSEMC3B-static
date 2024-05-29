const About = () => {
  return (
    <>
      <section
        className="bg-light container flex h-[100svh] w-full
        items-end justify-between pb-8"
      >
        <div className="flex flex-col gap-6">
          <h2 className="font-montserrat tracking-subtitle text-subtitle font-medium leading-[70%]">
            ABOUT MOTOR CONCEPT’S
          </h2>
          <div className=" h-[40rem] w-[50rem] bg-slate-600">
            <img
              src="/about.png"
              className=" h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-6 text-right">
          <h3
            className=" font-upright text-headingsans tracking-headingsans relative
            leading-[70%]"
          >
            Essential Motors
            <span className="font-montserrat font-regular text-smol opacity-lighter tracking-smol absolute -left-[10%] -top-5">
              09
            </span>
          </h3>
          <p className="tracking-base leading-base font-montserrat whitespace-nowrap text-base">
            Motor concepts are the basics explaining
            <br /> how electric motors work, crucial for their
            <br /> effective use across industries.
          </p>
          <a
            href=""
            className="relative mr-2 mt-6 flex w-fit flex-col items-center"
          >
            <span className="font-montserrat font-stick tracking-smol text-smol">
              Read more
            </span>
            <div className="absolute -bottom-[10.5%] h-[2px] w-[7rem] bg-black/70"></div>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
