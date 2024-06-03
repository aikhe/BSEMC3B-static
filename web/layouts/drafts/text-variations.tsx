const TextVariations = () => {
  return (
    <section className="container">
      {/* <--- TITLE ---> */}
      <div className="flex justify-between">
        <h1
          className="font-unicase text-titlesans font-light leading-[60%]
          tracking-titlesans"
        >
          TITLE'S
        </h1>
        <h1
          className="font-montserrat text-title font-light leading-[70%]
          tracking-title"
        >
          TITLE'S
        </h1>
      </div>

      {/* <--- HEADING ---> */}
      <div className="mt-24 flex justify-between text-left">
        <div className="flex flex-col gap-8">
          <h3 className="leading-fit font-upright text-headingsans tracking-headingsans">
            The Heading's
          </h3>
          <h3
            className="leading-fit font-montserrat text-headings font-[475]
            tracking-headings"
          >
            Another Heading's
          </h3>
        </div>

        {/* <--- SUB TITLE ---> */}
        <div className="flex flex-col gap-8 text-right">
          <h2
            className="leading-fit font-montserrat text-subtitle font-medium
            tracking-subtitle"
          >
            SUB Title's
          </h2>
          <h2
            className="leading-fit font-garamond text-subtitlesans font-semibold
            italic tracking-subtitlesans"
          >
            SUB TITLE'S
          </h2>
        </div>
      </div>

      {/* <--- BASE ---> */}
      <div className="mt-12 flex flex-col gap-6">
        <p
          className="font-montserrat text-base font-regular leading-base tracking-base
          opacity-lighter"
        >
          This is the base font size that will be used in paragaphs
          <br />
          or description to better enhance the reading experience.
        </p>
        <p className="font-montserrat text-base font-regular leading-base tracking-base">
          This is the base font size that will be used in paragaphs
          <br />
          or description to better enhance the reading experience.
        </p>
      </div>

      <hr className="mt-8 h-[3px] w-full bg-black/30 opacity-lighter" />

      {/* <--- SMALLER ---> */}
      <p
        className="mt-12 text-right font-montserrat text-smol font-regular
        leading-[95%] tracking-smol opacity-lighter"
      >
        And this one on the other hand is a smaller text for <br />
        supporting details or information.
      </p>
    </section>
  );
};

export default TextVariations;
