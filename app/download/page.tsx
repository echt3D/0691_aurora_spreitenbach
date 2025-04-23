import Hero from "../components/Hero";
import t from "../dics/text.json";
import ImageBanner from "../components/ImageBanner";
import WaveWrapper from "../components/WaveWrapper";
import TextBlock from "../components/TextBlock";
import DownloadCards from "../components/DownloadCards";
import TextBanner from "../components/TextBanner";
import GalleryBlock from "../components/GalleryBlock";
import ContactBlock from "../components/ContactBlock";

const Download = () => {
  const {
    hero,
    image_banner_one,
    text_block_one,
    download_cards,
    text_banner_one,
  } = t.download;
  return (
    <>
      <Hero lead={hero.lead} title={hero.title} />
      <ImageBanner
        src={image_banner_one.src}
        alt={image_banner_one.alt}
        hasMargin={false}
      />
      <WaveWrapper>
        <TextBlock title={text_block_one.title} text={text_block_one.text} />
        <DownloadCards downloadCards={download_cards} />
      </WaveWrapper>
      <TextBanner
        text={text_banner_one}
        bgColor={"#353535"}
        hasMargin={false}
      />
      <GalleryBlock />
      <ContactBlock color="cream" />
    </>
  );
};

export default Download;
