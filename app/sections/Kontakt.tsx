import Image from "next/image";
import Form from "../components/Form";

const Kontakt = () => {
  return (
    <section id="Kontakt" className="relative  scroll-mt-header">
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
      <div className="bg-secondary w-screen h-520 xl:h-240 3xl:h-200 -mt-1"></div>

      <div className="absolute inset-0 flex justify-center ">
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full mx-auto relative flex flex-col gap-16">
          <div className="xl:pt-28 3xl:pt-40 xl:grid xl:grid-cols-2 gap-20 ">
            <aside className=" flex flex-col gap-8 pt-32">
              <div>
                <p className="text-h4_desktop">Kontakt</p>
                <h2 className="text-h2_desktop">
                  <span className="bg-primary text-white px-2">
                    Interesse?
                    <br />
                  </span>{" "}
                  Wage den ersten Schritt
                </h2>
              </div>
              <div>
                <p className="leading-10">
                  Hast du dein neues Zuhause schon vor Augen? «Aurora» bietet
                  von 2- bis 4- Zimmerwohnungen alles, was modernes Wohnen
                  ausmacht. Hier finden Patchworkfamilien, kreative Studierende
                  oder alle, die das urbane Leben mit der Ruhe der Natur
                  verbinden wollen, ihren perfekten Platz. Fordere jetzt
                  unverbindlich alle Informationen an und läute mit uns deinen
                  Neubeginn ein. 
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
              <div className="flex flex-col bg-white p-4 w-[286px] h-[208px] justify-center gap-2 rounded-3xl text-center xl:text-left xl:mr-40 -mt-4 xl:-mt-20">
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
