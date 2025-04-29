const DetailCards = () => {
  return (
    <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop flex flex-col xl:items-center mx-auto overflow-scroll">
      <div className="w-[200vw] md:w-[120vw] xl:w-full grid grid-cols-3 gap-12 xl:gap-20 p-2">
        <div className=" bg-white rounded-2xl flex flex-col items-center justify-center text-center gap-6 mt-2 px-8 py-12 shadow-custom">
          <p className="text-h3_desktop text-accent">
            Erstbezug:
            <br />
            Neues Wohnen
          </p>
          <p>52 Mietwohnungen</p>
          <p>13 Stockwerke</p>
          <p>38 Parkplätze</p>
        </div>
        <div
          className=" bg-white rounded-2xl flex flex-col items-center justify-center text-center gap-6 mt-2 px-8 shadow-custom"
          data-coverflow-index={2}
        >
          <p className="text-h3_desktop text-accent">
            Zimmer und
            <br />
            Wohnfläche
          </p>
          <p>
            <span className="font-bold">2.0 Zimmer</span> | 46.8m² - 47.5m²
          </p>
          <p>
            <span className="font-bold">3.0 Zimmer</span> | 61.3m² - 62.0m²
          </p>
          <p>
            <span className="font-bold">4.0 Zimmer</span> | 75.8m² - 76.5m²
          </p>
        </div>
        <div
          className=" bg-white rounded-2xl flex flex-col items-center justify-center text-center gap-6 mt-2 px-8 shadow-custom"
          data-coverflow-index={3}
        >
          <p className="text-h3_desktop text-accent">Bezugstermin</p>
          <p>verfügbar ab 1. November / 1. Dezember 2025</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
