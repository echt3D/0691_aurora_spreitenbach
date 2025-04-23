import Hero from "../components/Hero";
import ImageBanner from "../components/ImageBanner";
import t from "../dics/text.json";
import WaveWrapper from "../components/WaveWrapper";
import TextBlock from "../components/TextBlock";
import DetailSlider from "../components/DetailSlider";
import GoogleMapButton from "../components/GoogleMapButton";
import MapBlock from "../components/MapBlock";
import AngebotBlock from "../components/AngebotBlock";
import TextBannerV2 from "../components/TextBannerV2";
import ContactBlock from "../components/ContactBlock"

const Lage = () => {
  const { hero, image_banner_one, text_block_one, map_block, text_banner_two } =
    t.lage;
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
        <DetailSlider />
        <div className=" max-w-mobile md:max-w-tablet xl:max-w-desktop mx-auto">
          <GoogleMapButton />
        </div>
      </WaveWrapper>
      <MapBlock map={map_block} />
      <AngebotBlock />
      <TextBannerV2 text={text_banner_two} />
      <ContactBlock color={"orange"} />
    </>
  );
};

export default Lage;
