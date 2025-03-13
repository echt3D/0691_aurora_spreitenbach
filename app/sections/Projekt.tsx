import Button from "../components/Button";
import Coverflow from "../components/Coverflow";

const Projekt = () => {
  return (
    <section className="relative">
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
      <div className="bg-secondary w-screen h-140 -mt-1"></div>
      <div className="absolute inset-0 flex justify-center ">
        <div className="max-w-desktop w-full mx-auto relative">
          <div className="absolute top-28 grid grid-cols-2 gap-20">
            <aside className=" flex flex-col gap-8">
              <div>
                <p className="text-h4_desktop">Projekt</p>
                <h2 className="text-h2_desktop">
                  Raum für jede{" "}
                  <span className="bg-primary text-white px-2">
                    Lebensform:
                    <br />
                  </span>{" "}
                  stilvoll, zentral, zeitgemäss
                </h2>
              </div>
              <div>
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
                href="#lage"
                className="bg-primary w-1/3 text-center rounded-3xl py-2 px-4 text-white hover:bg-accent duration-300"
              >
                Weiter zur Lage
              </a>
            </aside>
            <aside className="flex flex-col gap-8">
              <Button />
              <Coverflow />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projekt;
