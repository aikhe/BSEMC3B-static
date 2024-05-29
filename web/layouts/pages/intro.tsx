const Intro = () => {
  return (
    <>
      <div className="absolute -z-[1] h-[130svh] w-full bg-slate-600">
        <img src="/intro.png" className="h-full w-full object-cover" alt="" />
      </div>

      <section
        className="font-montserrat container relative flex h-[130svh] w-full flex-col
        items-end pt-14"
      >
        <div className="text-right">
          <h3 className="text-headings tracking-headings font-medium">
            Simplify Motor Concepts
          </h3>
          <p className="font-regular opacity-lighter tracking-base leading-base text-base">
            Our guide makes understanding electric
            <br /> motors simple with clear explanations
            <br /> and practical examples.
          </p>
        </div>

        <div className="absolute -left-[22%] bottom-[7.5%] flex gap-10">
          <img src="/moving.svg" className="" alt="" />
          <img src="/moving.svg" className="" alt="" />
        </div>
      </section>
    </>
  );
};

export default Intro;
