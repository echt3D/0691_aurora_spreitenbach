import Hero from "./components/MainHero";
import ProjektBlock from "./components/ProjektBlock";
import TextBanner from "./components/TextBanner";
import Lage from "./components/LageBlock";
import AngebotBlock from "./components/AngebotBlock";
import Kontakt from "./sections/Kontakt";
import TextBannerTwo from "./components/TextBannerTwo";
import ImageBanner from "./components/ImageBanner";
import t from "./dics/text.json";
export default function Home() {
  const { text_banner_one } = t.home;
  return (
    <>
      <Hero />
      <ProjektBlock />
      <TextBanner text={text_banner_one} />
      <Lage />
      <AngebotBlock />
      <Kontakt />
      <TextBannerTwo />
      <ImageBanner />
    </>
  );
}
