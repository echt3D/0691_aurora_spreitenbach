import Hero from "../components/Hero";
import ImageBanner from "../components/ImageBanner";
import t from "../dics/text.json";
import WaveWrapper from "../components/WaveWrapper";
import TextBlock from "../components/TextBlock";
import DetailSlider from "../components/DetailSlider";
import GoogleMapButton from "../components/GoogleMapButton";
import MapBlock from "../components/MapBlock";
import AngebotBlock from "../components/AngebotBlock";

const Lage = () => {
  const { hero, image_banner_one, text_block_one, map_block } = t.lage;
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
    </>
  );
};

export default Lage;
