import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full xl:h-screen flex flex-col-reverse xl:flex-row bg-tertiary">
      <aside className="max-w-mobile xl:max-w-desktop_half mx-auto xl:pt-header flex flex-col justify-center gap-8 py-8 xl:py-0">
        <div className="text-primary ">
          <p className="text-h4_desktop">Willkommen</p>
          <h1 className="text-h1_desktop leading-13 hyphens-auto" lang="de">
            Dein geborgenes 
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
      <aside className="z-10">
        <div className="relative w-screen h-[485px] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] max-w-7xl mx-auto md:h-auto aspect-[2/3]">
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
