import { Header } from "../components/header";
import Hero from "./pages/hero";
// import Intro from "./pages/intro";
// import About from "./pages/about";
// import SCTB from "./pages/SCTB";
// import STI from "./pages/STI";
import { Footer } from "../components/footer";

import TextVariations from "./drafts/text-variations";
import ColorPallete from "./drafts/color-palette";
import Components from "./drafts/components";

const Landing = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        {/* <Intro />
        <About />
        <SCTB />
        <STI /> */}

        <TextVariations />
        <ColorPallete />
        <Components />
      </main>

      <Footer />
    </>
  );
};

export default Landing;
