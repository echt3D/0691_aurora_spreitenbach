import Image from "next/image";
import t from "../dics/text.json";

const Hero = () => {
  const { main_hero } = t.home;
  return (
    <section className="relative w-full flex flex-col-reverse xl:flex-row bg-tertiary  ">
      <aside className="max-w-mobile md:max-w-tablet xl:max-w-desktop_half mx-auto xl:pt-header flex flex-col justify-center gap-8 py-8 pb-16 xl:py-0">
        <div className="text-accent ">
          <p className="text-h4_mobile xl:text-h4_desktop">{main_hero.lead}</p>
          <h1
            className="text-h1_mobile xl:text-h1_desktop leading-15 font-light
hyphens-auto"
            lang="de"
          >
            {main_hero.title.one}
            <br />
            <span className="bg-primary text-white px-2">
              {main_hero.title.two}
            </span>{" "}
            {main_hero.title.three}
          </h1>
        </div>
        <div className="flex flex-col gap-8 leading-10">
          <p>{main_hero.text.one}</p>
          <p>
            {main_hero.text.two}{" "}
            <span className="font-bold">{main_hero.text.three}</span>{" "}
            {main_hero.text.four}
          </p>
        </div>
      </aside>
      <aside className="z-10 h-full flex justify-end ">
        <Image
          src="/images/main_visu.png"
          width={800}
          height={1000}
          alt="aurora spreitenbach main visualisierung"
          className="w-4/5 h-2/3 xl:h-auto xl:w-auto"
        />
      </aside>
    </section>
  );
};

export default Hero;
