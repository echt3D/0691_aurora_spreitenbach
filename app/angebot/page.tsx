import t from "../dics/text.json";
import Hero from "../components/Hero";
import ImageBanner from "../components/ImageBanner";
import WaveWrapper from "../components/WaveWrapper";
import TextBlock from "../components/TextBlock";
import ParkplatzBlock from "../components/ParkplatzBlock";
import TextBanner from "../components/TextBanner";
import ContactBlock from "../components/ContactBlock";
import DownloadBlock from "../components/DownloadBlock";

const Angebot = () => {
  const {
    hero,
    image_banner_one,
    text_block_one,
    parkplatz_block,
    text_banner_one,
  } = t.angebot;
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
        <section className="bg-tertiary flex justify-center items-center h-[80vh] text-5xl -mt-30">
          ISOMETRIE
        </section>
      </WaveWrapper>
      <ParkplatzBlock
        title={parkplatz_block.title}
        text={parkplatz_block.text}
      />
      <TextBanner bgColor={"#353535"} text={text_banner_one} hasMargin={true} />
      <DownloadBlock hasMargin={true} />
      <ContactBlock color={"orange"} />
    </>
  );
};

export default Angebot;
