import { ParralaxText } from "../../components/ui/parralax-text.tsx";

const Intro: React.FC = () => {
  return (
    <>
      <div className="absolute -z-[1] h-[130svh] w-full bg-slate-600">
        <img src="/intro.png" className="h-full w-full object-cover" alt="" />
      </div>

      <section
        className="relative flex h-[130svh] w-full flex-col
        items-end pt-36 font-montserrat"
      >
        <div className="mr-24 text-right">
          <h3 className="text-headings font-medium tracking-headings">
            Simplify Motor Concepts
          </h3>
          <p className="text-base font-regular leading-base tracking-base opacity-lighter">
            Our guide makes understanding electric
            <br /> motors simple with clear explanations
            <br /> and practical examples.
          </p>
        </div>

        <ParralaxText />
      </section>
    </>
  );
};

export default Intro;
