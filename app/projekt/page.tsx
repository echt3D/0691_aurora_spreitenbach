import Hero from "../components/Hero";
import t from "../dics/text.json";
import ImageBanner from "../components/ImageBanner";

const Projekt = () => {
  const { hero, image_banner } = t.projekt;
  return (
    <>
      <Hero lead={hero.lead} title={hero.title} />
      <ImageBanner
        src={image_banner.src}
        alt={image_banner.alt}
        hasMargin={false}
      />
    </>
  );
};

export default Projekt;
