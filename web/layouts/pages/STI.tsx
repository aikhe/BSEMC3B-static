const STI = () => {
  return (
    <>
      <section
        className="bg-light container relative flex h-[120svh]
        w-full items-center justify-center gap-[1.75rem]"
      >
        <div className="-mt-24 h-[22.5rem] w-[16rem] bg-slate-600">
          <img
            src="/street-bike.png"
            className=" h-full w-full object-cover"
            alt=""
          />
        </div>

        <div className="relative h-[46rem] w-[30rem] bg-black text-center">
          <h3
            className="font-upright text-headingsans tracking-headingsans absolute
            -top-[9%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center leading-[70%]"
          >
            Thai Concept
          </h3>
          <div className="h-[34rem] w-full bg-slate-600">
            <img
              src="/thai.png"
              className=" h-full w-full object-cover"
              alt=""
            />
          </div>
          <div
            className="text-light flex h-[12.5rem] w-full items-center justify-center
            bg-[#7F8267]"
          >
            <div className="-mt-6 flex flex-col items-start gap-4">
              <span
                className="font-montserrat font-regular text-smol opacity-lighter
                tracking-smol"
              >
                05
              </span>
              <p className="font-montserrat font-regular tracking-smol text-smol leading-[95%]">
                Motorcycles that are modified to
                <br /> make them race-ready or street legal.
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-24 h-[22.5rem] w-[16rem] bg-slate-600">
          <img src="/indo.png" className=" h-full w-full object-cover" alt="" />
        </div>

        <div className="absolute bottom-[10rem] flex w-full justify-between">
          <div className="flex flex-col items-start gap-2">
            <h3
              className="text-headings font-montserrat tracking-headings relative ml-8
              font-medium"
            >
              Street
              <span
                className="font-montserrat font-regular text-smol opacity-lighter
                tracking-smol leadinre absolute -left-[30%] top-2"
              >
                06
              </span>
            </h3>
            <p className="font-montserrat font-regularm tracking-smol text-smol leading-[95%]">
              Lightened parts, heavily
              <br />
              modified, for racing use only.
            </p>
            <p></p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <h3
              className="text-headings font-montserrat tracking-headings relative ml-8
              font-medium"
            >
              Indo
              <span
                className="font-montserrat font-regular text-smol opacity-lighter
                tracking-smol leadinre absolute -left-[40%] top-2"
              >
                07
              </span>
            </h3>
            <p className="font-montserrat font-regular tracking-smol text-smol text-end leading-[95%]">
              Intended for daily driving, heavily
              <br />
              related to looks, and commonly known for its
              <br />
              clean aesthetics.
            </p>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default STI;
