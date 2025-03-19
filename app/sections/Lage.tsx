import CoverflowTwo from "../components/CoverflowTwo";

const Lage = () => {
  return (
    <section
      id="Lage"
      className="bg-tertiary pt-80 pb-40 -mt-40  scroll-mt-header"
    >
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl mx-auto xl:grid xl:grid-cols-2 flex flex-col gap-8 xl:gap-20">
        <div className="flex xl:hidden flex-col items-end font-light">
          <p className="text-h4_desktop ">Lage</p>
          <span className="text-h2_desktop bg-primary text-white px-2">
            Spreitenbach
          </span>
        </div>
        <CoverflowTwo />
        <aside className="text-right flex flex-col gap-8 items-end">
          <div className="hidden xl:block">
            <p className="text-h4_mobile xl:text-h4_desktop font-light">Lage</p>
            <span className="text-h2_mobile xl:text-h2_desktop bg-primary text-white px-2 font-light">
              Spreitenbach
            </span>
          </div>
          <p className="leading-10">
            Spreitenbach wächst – und damit die Möglichkeiten. Das
            Langäckerquartier vereint einfaches Wohnen mit natürlicher Erholung.
            Ob entspannen in den Bädern, shoppen in modernen Zentren, aktiv sein
            im Golfpark oder treffen im Kino – die Lage bietet Vielfalt. 
          </p>
          <p>
            Wer das Beste aus beiden Welten sucht – lebendig und entspannt –,
            findet es hier.  
          </p>
          <a
            className="bg-primary xl:w-1/3 text-center rounded-3xl py-2 px-4 text-white hover:bg-accent duration-300"
            target="_blank"
            href="https://www.google.ch/maps/place/Bahnhofstrasse+59,+8957+Spreitenbach/@47.4233828,8.3600261,16z/data=!3m1!4b1!4m6!3m5!1s0x47901281e3e8e321:0x1ed7bd28893e524f!8m2!3d47.4233828!4d8.362601!16s%2Fg%2F11c1x985j5?entry=tts&g_ep=EgoyMDI1MDMwMi4wIPu8ASoASAFQAw%3D%3D"
          >
            Google Maps öffnen
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Lage;
