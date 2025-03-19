import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full xl:h-screen flex flex-col-reverse xl:flex-row bg-tertiary">
      <aside className="max-w-mobile md:max-w-tablet xl:max-w-desktop_half mx-auto xl:pt-header flex flex-col justify-center gap-8 py-8 pb-16 xl:py-0">
        <div className="text-accent ">
          <p className="text-h4_mobile xl:text-h4_desktop">Willkommen</p>
          <h1
            className="text-h1_mobile xl:text-h1_desktop leading-15 font-light
hyphens-auto"
            lang="de"
          >
            Dein geborgenes 
            <br />
            <span className="bg-primary text-white px-2">Zuhause</span> wartet
            auf dich!
          </h1>
        </div>
        <div className="flex flex-col gap-8 leading-10">
          <p>
            Wenn das Morgenlicht den Horizont färbt, erwacht ein neues
            Wohngefühl. «Aurora» verbindet die Dynamik urbanen Lebens mit der
            Ruhe des Grüns. Hier trifft Weitblick auf Geborgenheit und Moderne
            auf Behaglichkeit.
          </p>
          <p>
            In Spreitenbach entstehen{" "}
            <span className="font-bold">Wohnungen zur Erstvermietung</span>, in
            denen der Tag mit Licht durchflutet beginnt und die Nacht in
            angenehmer Atmosphäre endet. 
          </p>
        </div>
      </aside>
      <aside className="z-10  flex justify-end">
        <div className="relative w-[90vw] h-[485px] lg:w-[90vw] xl:w-[60vw] 2xl:w-[40vw] xl:max-w-7xl xl:mx-auto md:h-[98vh] lg:h-auto  object-cover">
          <Image
            src="/images/main_visu.png"
            fill
            
            alt="aurora spreitenbach main visualisierung"
          />
        </div>
      </aside>
    </section>
  );
};

export default Hero;
