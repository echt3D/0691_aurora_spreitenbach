import Hero from "../components/Hero";
import ImageBanner from "../components/ImageBanner";
import t from "../dics/text.json";
import WaveWrapper from "../components/WaveWrapper";
import TextBlock from "../components/TextBlock";
import ContactFormBlock from "../components/ContactFormBlock";
import TextBanner from "../components/TextBanner";

const Kontakt = () => {
  const {
    hero,
    image_banner_one,
    text_block_one,
    text_banner_one,
    image_banner_two,
  } = t.contact;
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
      </WaveWrapper>
      <ContactFormBlock />
      <TextBanner
        bgColor={"#353535"}
        text={text_banner_one}
        hasMargin={true}
      />
      <ImageBanner
        src={image_banner_two.src}
        alt={image_banner_two.alt}
        hasMargin={true}
      />
    </>
  );
};

export default Kontakt;
