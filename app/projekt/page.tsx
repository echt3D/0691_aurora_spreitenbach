import Hero from "../components/Hero";
import t from "../dics/text.json";
import ImageBanner from "../components/ImageBanner";
import TextBlock from "../components/TextBlock";
import WaveWrapper from "../components/WaveWrapper";
import DetailCards from "../components/DetailCards";
import TextBanner from "../components/TextBanner";
import LageBlock from "../components/LageBlock";
import ContactBlock from "../components/ContactBlock";

const Projekt = () => {
  const {
    hero,
    image_banner_one,
    text_block_one,
    text_banner_one,
    image_banner_two,
  } = t.projekt;
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
        <DetailCards />
      </WaveWrapper>
      <TextBanner text={text_banner_one} />
      <LageBlock />
      <ImageBanner
        src={image_banner_two.src}
        alt={image_banner_two.alt}
        hasMargin={true}
      />
      <ContactBlock color={"orange"} />
    </>
  );
};

export default Projekt;
