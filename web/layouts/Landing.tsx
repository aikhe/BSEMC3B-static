import { Header } from "../components/header";
import Hero from "./pages/hero";
import Intro from "./pages/intro";
import About from "./pages/about";
import SCTB from "./pages/SCTB";
import STI from "./pages/STI";
import { Footer } from "../components/footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <About />
      <SCTB />
      <STI />
      <Footer />
    </>
  );
};

export default Landing;
