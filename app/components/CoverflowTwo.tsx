"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const CoverflowTwo = () => {
  const [position, setPosition] = useState(1);

  const handlePrev = () => {
    setPosition((prev) => (prev > 1 ? prev - 1 : 8));
  };

  const handleNext = () => {
    setPosition((prev) => (prev < 8 ? prev + 1 : 1));
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
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={1}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_1.jpg"
                layout="fill"
                alt="coverflow 1"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">Bäder Baden</p>
              <p>
                Wellness, Spa und Erholung im historischen Thermalbad von Baden.
              </p>
            </div>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={2}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_2.jpg"
                layout="fill"
                alt="coverflow 2"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">
                Cinemax Spreitenbach
              </p>
              <p>
                Kinoerlebnis mit aktuellen Blockbustern und komfortablen Sälen.
              </p>
            </div>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={3}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_3.jpg"
                layout="fill"
                alt="coverflow 3"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">Golfpark Otelfingen</p>
              <p>Nur wenige Minuten entfernt für alle Golf-Liebhaber.</p>
            </div>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={4}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_4.jpg"
                layout="fill"
                alt="coverflow 4"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">
                Trampolino Kinderparadies
              </p>
              <p>Indoor-Spielplatz für Familien und Kinder.</p>
            </div>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={5}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_5.jpg"
                layout="fill"
                alt="coverflow 5"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">Limmat Uferweg</p>
              <p>Perfekt zum Joggen, Radfahren oder Spazieren in der Natur.</p>
            </div>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={6}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_6.jpg"
                layout="fill"
                alt="coverflow 6"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">
                Umwelt Arena Schweiz
              </p>
              <p>Spannendes Ausflugsziel</p>
            </div>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={7}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_7.jpg"
                layout="fill"
                alt="coverflow 7"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">Shoppi Tivoli</p>
              <p>Eines der grössten Einkaufszentren der Schweiz.</p>
            </div>
          </div>
          <div
            className="coverflow__image bg-white rounded-2xl flex flex-col items-center  text-center gap-6 mt-2"
            data-coverflow-index={8}
          >
            <div className="relative w-full h-[191px]">
              <Image
                src="/images/coverflow_8.jpg"
                layout="fill"
                alt="coverflow 8"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6 px-6 justify-center items-center">
              <p className="text-h3_desktop text-accent">
                Sportzentrum Müliwis
              </p>
              <p>
                Fussballplätze, Sporthallen und vielseitige
                Trainingsmöglichkeiten.
              </p>
            </div>
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

export default CoverflowTwo;
