"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import t from "../dics/text.json";
import Image from "next/image";

const DetailSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full mx-auto "
      loop={true}
      slidesPerView={3}
      spaceBetween={50}
    >
      {t.slider.map((detail, i) => (
        <SwiperSlide
          key={i}
          className="bg-white rounded-2xl flex flex-col items-center text-center gap-6 mt-2"
        >
          <div className="relative w-full h-[191px]">
            <Image
              src={detail.src}
              layout="fill"
              alt={detail.title}
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-6 px-4 py-12 justify-center items-center">
            <p className="text-h3_desktop text-accent">{detail.title}</p>
            <p>{detail.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DetailSlider;
