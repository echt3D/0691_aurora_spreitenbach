import Image from "next/image";

type HeroProps = {
  lead: string;
  title: { [key: string]: string };
};

const Hero = ({ lead, title }: HeroProps) => {
  return (
    <section className="relative pt-header_mobile h-hero_desktop xl:pt-header z-20">
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl mx-auto flex flex-col justify-center items-center h-full text-accent">
        <p className="font-bold">{lead}</p>
        <h1 className="text-h1_mobile xl:text-h1_desktop text-center">
          {title.one}{" "}
          <span className=" bg-primary text-white px-2">{title.two}</span>
          <br />
          {title.three}
        </h1>
      </div>
      <div className="relative w-full h-[17vh] 3xl:h-[20vh]">
        <Image
          fill
          src="/assets/background_wave_bottom_cream.svg"
          alt="hi"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
