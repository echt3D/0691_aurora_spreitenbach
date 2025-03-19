"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const CoverFlow = () => {
  const [position, setPosition] = useState(1);

  const handlePrev = () => {
    setPosition((prev) => (prev > 1 ? prev - 1 : 3));
  };

  const handleNext = () => {
    setPosition((prev) => (prev < 3 ? prev + 1 : 1));
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="relative w-full">
        <button
          className="absolute top-1/2 left-0  md:left-28 xl:left-16 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={() => handlePrev()}
        >
          <Image src="/icons/arrow.svg" width="20" height="20" alt="arrow" />
        </button>
        <div
          className="coverflow flex justify-center pt-2"
          data-coverflow-position={position}
        >
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center justify-center text-center gap-6 mt-2"
            data-coverflow-index={1}
          >
            <p className="text-h3_desktop text-primary">
              Erstbezug:
              <br />
              Neues Wohnen
            </p>
            <p>52 Mietwohnugnen</p>
            <p>13 Stockwerke</p>
            <p>38 Parkplätze</p>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center justify-center text-center gap-6 mt-2"
            data-coverflow-index={2}
          >
            <p className="text-h3_desktop text-primary">
              Zimmer und
              <br />
              Wohnfläche
            </p>
            <p>
              <span className="font-bold">2.0 Zimmer</span> | 46.8m² - 47.45m²
            </p>
            <p>
              <span className="font-bold">3.0 Zimmer</span> | 61.3m² - 61.95m²
            </p>
            <p>
              <span className="font-bold">4.0 Zimmer</span> | 75.8m² - 76.45m²
            </p>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center justify-center text-center gap-6 mt-2"
            data-coverflow-index={3}
          >
            <p className="text-h3_desktop text-primary">Bezugstermin</p>
            <p>verfügbar ab 1. November / 1. Dezember</p>
          </div>
        </div>
        <button
          className="absolute top-1/2 right-0 md:right-32 xl:right-16 transform -translate-y-1/2 cursor-pointer"
          onClick={() => handleNext()}
        >
          <Image
            src="/icons/arrow.svg"
            width="20"
            height="20"
            alt="arrow"
            className="rotate-180"
          />
        </button>
      </div>
    </section>
  );
};

export default CoverFlow;
