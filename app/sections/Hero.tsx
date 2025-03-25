import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full xl:h-[120vh] flex flex-col-reverse xl:flex-row bg-tertiary xl:gap-20">
      <aside className="max-w-mobile md:max-w-tablet xl:max-w-desktop_half ml-auto  xl:pt-header flex flex-col justify-center gap-8 py-8 pb-16 xl:py-0">
        <div className="text-accent ">
          <p className="text-h4_mobile xl:text-h4_desktop">Willkommen</p>
          <h1
            className="text-h1_mobile xl:text-h1_desktop leading-15 font-light
hyphens-auto"
            lang="de"
          >
            Dein neues
            <br />
            <span className="bg-primary text-white px-2">Zuhause</span> wartet
            auf dich!
          </h1>
        </div>
        <div className="flex flex-col gap-8 leading-10">
          <p>
            Wenn das Morgenlicht den Horizont färbt, erwacht ein neues
            Wohngefühl. «Aurora» verbindet die Dynamik urbanen Lebens mit der
            Ruhe des Grüns. Hier vereinen sich Weitblick und Innovation mit
            moderner Behaglichkeit.
          </p>
          <p>
            In Spreitenbach entstehen{" "}
            <span className="font-bold">Wohnungen zur Erstvermietung</span>, in
            denen der Tag mit Licht durchflutet beginnt und die Nacht in
            angenehmer Atmosphäre endet. 
          </p>
        </div>
      </aside>
      <aside className="z-10  h-[80vh] md:h-[100vh] xl:h-full flex justify-end">
        <div className="relative  h-full w-[92vw] xl:w-[45vw]  xl:max-w-7xl xl:mx-auto ">
          <Image
            src="/images/main_visu.png"
            fill
            alt="aurora spreitenbach main visualisierung"
            className="object-contain md:object-cover xl:object-contain"
          />
        </div>
      </aside>
    </section>
  );
};

export default Hero;
