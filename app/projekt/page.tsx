import Hero from "../components/Hero";
import t from "../dics/text.json";
import ImageBanner from "../components/ImageBanner";
import TextBlock from "../components/TextBlock";
import WaveWrapper from "../components/WaveWrapper";
import DetailCards from "../components/DetailCards";

const Projekt = () => {
  const { hero, image_banner, text_block_one } = t.projekt;
  return (
    <>
      <Hero lead={hero.lead} title={hero.title} />
      <ImageBanner
        src={image_banner.src}
        alt={image_banner.alt}
        hasMargin={false}
      />
      <WaveWrapper>
        <TextBlock title={text_block_one.title} text={text_block_one.text} />
        <DetailCards />
      </WaveWrapper>
    </>
  );
};

export default Projekt;
