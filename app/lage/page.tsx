import Hero from "../components/Hero";
import ImageBanner from "../components/ImageBanner";
import t from "../dics/text.json";
import WaveWrapper from "../components/WaveWrapper";
import TextBlock from "../components/TextBlock";
import DetailSlider from "../components/DetailSlider";

const Lage = () => {
  const { hero, image_banner_one, text_block_one } = t.lage;
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
      </WaveWrapper>
    </>
  );
};

export default Lage;
