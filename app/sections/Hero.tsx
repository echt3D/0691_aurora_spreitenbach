import Image from "next/image";

const Hero = () => {
  return (
    <section className=" w-full h-screen flex bg-tertiary">
      <aside className="max-w-desktop_half mx-auto pt-header flex flex-col justify-center gap-8">
        <div className="text-primary ">
          <p className="text-h4_desktop">Willkommen</p>
          <h1 className="text-h1_desktop leading-13">
            Dein perfektes{" "}
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
            In Spreitenbach entsteht ein Ort, an dem der Tag mit Licht
            durchflutet beginnt und die Nacht in stilvoller Atmosphäre endet. 
          </p>
        </div>
      </aside>
      <aside className="relative z-10">
        <Image
          src="/images/main_visu.png"
          width={800}
          height={1200}
          alt="aurora spreitenbach main visualisierung"
        />
      </aside>
    </section>
  );
};

export default Hero;
