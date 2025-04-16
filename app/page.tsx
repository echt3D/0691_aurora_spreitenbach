import MainHero from "./components/MainHero";
import ProjektBlock from "./components/ProjektBlock";
import TextBanner from "./components/TextBanner";
import Lage from "./components/LageBlock";
import AngebotBlock from "./components/AngebotBlock";
import GalleryBlock from "./components/GalleryBlock";
import ContactBlock from "./components/ContactBlock";
import ImageBanner from "./components/ImageBanner";
import DownloadBlock from "./components/DownloadBlock";
import t from "./dics/text.json";
export default function Home() {
  const { text_banner_one, text_banner_two, image_banner } = t.home;
  return (
    <>
      <MainHero />
      <ProjektBlock />
      <TextBanner text={text_banner_one} />
      <Lage />
      <AngebotBlock />
      <DownloadBlock />
      <GalleryBlock />
      <ContactBlock />
      <TextBanner text={text_banner_two} />
      <ImageBanner src={image_banner.src} alt={image_banner.alt} />
    </>
  );
}
