"use client";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { useEffect } from "react";
import t from "../dics/text.json";
import Image from "next/image";

const Gallery = () => {
  useEffect(() => {
    initLightboxJS("854A-6FA8-FCFD-BC79", "Individual");
  });

  const { images } = t.gallery;
  return (
    <div className="xl:h-[80vh] ">
      <div className="mx-auto max-w-mobile md:max-w-tablet xl:max-w-desktop">
        <SlideshowLightbox
          lightboxIdentifier="lightbox1"
          framework="next"
          images={images}
          fullScreen={true}
          backgroundColor={"rgba(0, 0, 0, 0.6)"}
          iconColor={"rgba(255,255,255,1)"}
          className="xl:grid xl:grid-cols-2 flex flex-col gap-6 "
        >
          {images.map((image, i) => (
            <div key={i} className="relative w-full h-gallery_image_desktop ">
              <Image
                src={image.src}
                alt={image.alt}
                data-lightboxjs="lightbox1"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </SlideshowLightbox>
      </div>
    </div>
  );
};

export default Gallery;
