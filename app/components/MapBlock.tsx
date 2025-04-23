import Image from "next/image";

type MapBlockProps = {
  map: { title: string; locations: string[] };
};

const MapBlock = ({ map }: MapBlockProps) => {
  return (
    <section
      className="relative w-screen h-[130vh] 3xl:h-[145vh] -mt-24 3xl:-mt-36 -z-10 bg-cover object-bottom"
      style={{ backgroundImage: "url(/images/map.png)" }}
    >
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full h-full mx-auto flex items-center">
        <div className="w-map-card_desktop bg-white p-8 rounded-3xl flex flex-col gap-6 shadow-custom">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/plot.svg"
              width={20}
              height={30}
              alt="map plot"
            />
            <span className="text-primary font-semibold">{map.title}</span>
          </div>
          <ul className="flex flex-col gap-6">
            {map.locations.map((location, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-accent font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{location}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MapBlock;
