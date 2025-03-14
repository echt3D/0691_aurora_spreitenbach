import Hero from "./sections/Hero";
import Projekt from "./sections/Projekt";
import TextBanner from "./components/TextBanner";
import Lage from "./sections/Lage";
import Kontakt from "./sections/Kontakt";
import TextBannerTwo from "./components/TextBannerTwo";
import ImageBanner from "./components/ImageBanner";
export default function Home() {
  return (
    <>
      <Hero />
      <Projekt />
      <TextBanner />
      <Lage />
      <Kontakt />
      <TextBannerTwo />
      <ImageBanner />
    </>
  );
}
