const SCTB = () => {
  return (
    <>
      <section
        className="bg-light gribo container grid h-[125svh]
        w-full grid-cols-4 grid-rows-2 items-end justify-between px-32 py-36"
      >
        {/* COL 1 ROW 1 */}
        <div className="flex h-full w-full items-center justify-end pr-6">
          <h2
            className="font-garamond text-subtitlesans tracking-subtitlesans relative
            w-[1.65ch] break-all font-semibold italic leading-[80%]"
          >
            STANCE
            <span
              className="font-montserrat text-smol opacity-lighter tracking-smol
              font-regular absolute -left-[70%] -top-3 not-italic"
            >
              01
            </span>
          </h2>
        </div>
        <div
          className="h-full w-full cursor-pointer bg-slate-600 duration-200
          hover:scale-75 hover:opacity-80"
        >
          <img
            src="/stance.png"
            className=" h-full w-full object-cover"
            alt=""
          />
        </div>

        {/* COL 2 ROW 1 */}
        <div className="flex h-full w-full items-start justify-end pr-8 pt-[15%]">
          <h2
            className="font-montserrat tracking-subtitle text-subtitle font relative
            font-medium leading-[115%]"
          >
            TOU
            <br />
            RING.
            <span
              className="font-montserrat text-smol opacity-lighter tracking-smol font-regular
              absolute -left-[30%] -top-3 not-italic"
            >
              03
            </span>
          </h2>
        </div>
        <div className="h-full w-full cursor-pointer bg-slate-600 duration-200 hover:scale-75">
          <img
            src="/touring.png"
            className=" h-full w-full object-cover"
            alt=""
          />
        </div>

        {/* COL 1 ROW 2 */}
        <div className="h-full w-full cursor-pointer bg-slate-600 duration-200 hover:scale-75">
          <img
            src="/classic.png"
            className=" h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex h-full w-full items-end justify-start pb-[15%] pl-8">
          <h2
            className="font-montserrat tracking-subtitle text-subtitle font relative
            font-medium leading-[115%]"
          >
            CLA
            <br />
            SSIC.
            <span
              className="font-montserrat text-smol opacity-lighter tracking-smol font-regular
              absolute -right-[17.5%] -top-3 not-italic"
            >
              02
            </span>
          </h2>
        </div>

        {/* COL 2 ROW 2 */}
        <div className="h-full w-full cursor-pointer bg-slate-600 duration-200 hover:scale-75">
          <img
            src="/bigbike.png"
            className=" h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex h-full w-full items-center justify-start pl-6">
          <h2
            className="font-garamond text-subtitlesans tracking-subtitlesans relative
            w-[1.65ch] break-all font-semibold italic leading-[80%]"
          >
            BIGBIKE
            <span
              className="font-montserrat text-smol opacity-lighter tracking-smol
              font-regular absolute -right-[70%] -top-3 not-italic"
            >
              04
            </span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default SCTB;
