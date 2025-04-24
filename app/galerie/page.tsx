import Hero from "../components/Hero";
import t from "../dics/text.json";
import ImageBanner from "../components/ImageBanner";
import WaveWrapper from "../components/WaveWrapper";
import TextBlock from "../components/TextBlock";
import Gallery from "../components/Gallery";
import ContactBlock from "../components/ContactBlock";

const Galerie = () => {
  const { hero, image_banner_one, text_block_one, image_banner_two } =
    t.gallery;
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
        <Gallery />
      </WaveWrapper>
      <ImageBanner
        src={image_banner_two.src}
        alt={image_banner_two.alt}
        hasMargin={true}
      />
      <ContactBlock color="orange" />
    </>
  );
};

export default Galerie;
