import Button from "../components/Button";
import Coverflow from "../components/Coverflow";

const Projekt = () => {
  return (
    <section id="Projekt" className="relative scroll-mt-header">
      <div className="block md:hidden">
        <svg
          viewBox="0 0 589 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-tertiary"
        >
          <mask
            id="mask0_291_243"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="589"
            height="233"
          >
            <rect width="589" height="233" fill="#F5E4D7" />
          </mask>
          <g mask="url(#mask0_291_243)">
            <path
              d="M604.19 116.788C337.289 30.2441 -11.9494 -13.2942 -153.981 -3.69084L-236 46.0721L-196 1494C280.108 1822.7 1377.16 1518.01 1388.37 1334.67C1389.11 1322.48 1460.68 718.469 1356.36 398.342C1337.32 339.927 1266.34 394.413 1224.33 309.292C1177.73 230.951 1234.33 152.146 1122.31 68.3346C1024.28 -5.00029 818.238 186.194 604.19 116.788Z"
              fill="#F5E4D7"
            />
          </g>
        </svg>
      </div>
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1510 345"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full  bg-tertiary"
        >
          <path
            d="M758 92.9997C491.16 26.9131 142 -6.33363 0 0.999705V55.9998V346.5H1510V308C1490.97 263.393 1420 305 1378 240C1331.41 180.177 1388 120 1276 55.9998C1178 -0.000217438 972 146 758 92.9997Z"
            fill="#F5E4D7"
          />
        </svg>
      </div>
      <div className="bg-secondary w-screen h-380 md:h-260 xl:h-180 -mt-2"></div>
      <div className="absolute inset-0 flex justify-center ">
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full mx-auto relative">
          <div className="absolute top-8 md:top-30 3xl:top-60 xl:grid xl:grid-cols-2 gap-2 ">
            <aside className=" flex flex-col  xl:gap-8 pt-26">
              <div>
                <p className="text-h4_mobile xl:text-h4_desktop font-light">
                  Projekt
                </p>
                <h2
                  className="text-h2_mobile xl:text-h2_desktop hyphens-auto font-light"
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
            <aside className="flex flex-col gap-12 md:gap-24">
              <Button />
              <Coverflow />
              <div className="block xl:hidden">
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
