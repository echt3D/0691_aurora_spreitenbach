import Button from "../components/Button";
import Coverflow from "../components/Coverflow";

const Projekt = () => {
  return (
    <section id="Projekt" className="relative scroll-mt-header">
      <svg
        viewBox="0 0 1510 347"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full  bg-tertiary"
      >
        <path
          d="M758 92.9997C491.16 26.9131 142 -6.33363 0 0.999705V55.9998V346.5H1510V308C1490.97 263.393 1420 305 1378 240C1331.41 180.177 1388 120 1276 55.9998C1178 -0.000217438 972 146 758 92.9997Z"
          fill="#F5E4D7"
        />
      </svg>
      <div className="bg-secondary w-screen h-300 xl:h-140 3xl:h-110 -mt-1"></div>
      <div className="absolute inset-0 flex justify-center ">
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full mx-auto relative">
          <div className="absolute top-20 3xl:top-44 xl:grid xl:grid-cols-2 gap-20">
            <aside className=" flex flex-col  xl:gap-8">
              <div>
                <p className="text-h4_mobile xl:text-h4_desktop">Projekt</p>
                <h2
                  className="text-h2_mobile xl:text-h2_desktop hyphens-auto"
                  lang="de"
                >
                  Raum für jede{" "}
                  <span className="bg-primary text-white px-2">
                    Lebensform:
                    <br />
                  </span>{" "}
                  stilvoll, zentral, zeitgemäss
                </h2>
              </div>
              <div className="hidden xl:block">
                <p className="leading-10">
                  Inmitten der Veränderung bewahrt das Projekt Vergangenes und
                  vereint es mit zeitgemässem Wohnkomfort. Das markante Hochhaus
                  an der Bahnhofstrasse 59 besticht durch schlicht sanierte
                  Wohnungen, einfache Küchen und helle Farben. Grosse Balkone,
                  gut geschnittene Grundrisse und faire Mietpreise sind weitere
                  Vorzüge der 2- bis 4-Zimmer-Wohnungen. Ob Stadtmensch oder
                  Naturliebhaber, Familie oder Individualist – hier findet jede
                  Lebensform Raum zum Entfalten. Bezugstermine sind ab dem{" "}
                  <span className="font-bold">1. November / 1. Dezember </span>{" "}
                  möglich. 
                </p>
              </div>
              <a
                href="#Lage"
                className="bg-primary w-1/3 text-center rounded-3xl py-2 px-4 text-white hover:bg-accent duration-300 hidden xl:block "
              >
                Weiter zur Lage
              </a>
            </aside>
            <aside className="flex flex-col gap-8">
              <Button />
              <Coverflow />
              <div className="block xl:hidden">
                <p className="leading-10">
                  Inmitten der Veränderung bewahrt das Projekt Vergangenes und
                  vereint es mit zeitgemässem Wohnkomfort. Das markante Hochhaus
                  an der Bahnhofstrasse 59 erstrahlt in frischer Architektur,
                  mit hochwertig sanierten Wohnungen, modernen Küchen und
                  stilvollen Materialien. Für alle, die das Besondere suchen: ob
                  Stadtmensch oder Naturliebhaber, Familie oder Individualist –
                  hier findet jede Lebensform Raum zum Entfalten.
                </p>
              </div>
              <a
                href="#Lage"
                className="bg-primary w-full xl:w-1/3 text-center rounded-3xl py-2 px-4 text-white hover:bg-accent duration-300 block xl:hidden "
              >
                Weiter zur Lage
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projekt;
