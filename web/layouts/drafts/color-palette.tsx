const ColorPallete = () => {
  return (
    <section className="container bg-[#B8B8B8]/30 p-16">
      <h2
        className="leading-fit font-garamond text-subtitlesans font-semibold
        italic tracking-subtitlesans"
      >
        COLOR PALETTE
      </h2>

      <hr className="mt-8 h-[3px] w-full bg-black/30 opacity-lighter" />

      <div className="mt-20 flex flex-col gap-12">
        <div className="flex justify-between">
          <div
            className="flex h-[15rem] w-[24rem] items-end border-2
            border-black bg-[#eeeeee] p-4 shadow-[8px_8px_0px_black]"
          >
            <p className="font-montserrat text-base font-regular leading-base tracking-base">
              #EEEEEE
            </p>
          </div>
          <div
            className="flex h-[15rem] w-[24rem] items-end border-2
            border-black bg-[#424242] p-4 shadow-[8px_8px_0px_black]"
          >
            <p className="font-montserrat text-base font-regular leading-base tracking-base text-white">
              #424242
            </p>
          </div>
          <div
            className="flex h-[15rem] w-[24rem] items-end border-2
            border-black bg-[#20221F] p-4 shadow-[8px_8px_0px_black]"
          >
            <p className="font-montserrat text-base font-regular leading-base tracking-base text-white">
              #20221F
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-12">
          <div
            className="flex h-[15rem] w-[24rem] items-end border-2
            border-black bg-[#C7CBBD] p-4 shadow-[8px_8px_0px_black]"
          >
            <p className="font-montserrat text-base font-regular leading-base tracking-base">
              #C7CBBD
            </p>
          </div>
          <div
            className="flex h-[15rem] w-[24rem] items-end border-2
            border-black bg-[#7F8267] p-4 shadow-[8px_8px_0px_black]"
          >
            <p className="font-montserrat text-base font-regular leading-base tracking-base text-white">
              #7F8267
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPallete;
