import Image from "next/image";
import Form from "../components/Form";

const Kontakt = () => {
  return (
    <section id="Kontakt" className="relative  scroll-mt-header">
      <div className="block md:hidden">
        <svg
          viewBox="0 0 589 230"
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
      <div className="bg-secondary w-screen h-440 md:h-360 xl:h-240 3xl:h-200 -mt-1"></div>

      <div className="absolute inset-0 flex justify-center ">
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full mx-auto relative flex flex-col gap-16">
          <div className="xl:pt-28 3xl:pt-40 xl:grid xl:grid-cols-2 gap-20 ">
            <aside className=" flex flex-col gap-8 pt-20 xl:pt-32">
              <div>
                <p className="text-h4_mobile xl:text-h4_desktop font-light">
                  Kontakt
                </p>
                <h2 className="text-h2_mobile xl:text-h2_desktop font-light">
                  <span className="bg-primary text-white px-2">
                    Interesse?
                    <br />
                  </span>{" "}
                  Wage den ersten Schritt
                </h2>
              </div>
              <div className="leading-10 flex flex-col gap-8">
                <p>Hast du dein neues Zuhause schon vor Augen?</p>
                <p>
                  Über das Kontaktformular kannst du dich auf die Warteliste
                  setzen. Rund zwei Wochen vor Vermarktungsstart erhältst du
                  exklusive Informationen zu den verfügbaren Wohnungen. 
                </p>
              </div>
            </aside>

            <aside className="flex flex-col items-center xl:items-end">
              <div className="relative w-[240px] h-[240px] ">
                <Image
                  src="/images/noemi_nagel.jpeg"
                  layout="fill"
                  alt="Noemi Nagel"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col bg-white p-4 w-[286px] h-[208px] justify-center gap-2 rounded-3xl text-center xl:text-left xl:mr-40 -mt-8 xl:-mt-20">
                <p className="text-h3_desktop text-accent">Ansprechsperson</p>
                <p className="font-bold">Noemi Nagel</p>
                <a href="mailto:wohnen@hbre.ch">wohnen@hbre.ch</a>

                <div>
                  <span>Tel.</span> <a href="tel:0445757047">044 575 70 47</a>
                </div>
              </div>
            </aside>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
