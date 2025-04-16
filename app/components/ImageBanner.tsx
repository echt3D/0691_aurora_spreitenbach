import Image from "next/image";

type ImageBannerProps = {
  src: string;
  alt: string;
};

const ImageBanner = ({ src, alt }: ImageBannerProps) => {
  return (
    <section className="relative w-full h-screen -mt-36">
      <Image
        src={src}
        layout="fill"
        alt={alt}
        className="object-cover"
      />
    </section>
  );
};

export default ImageBanner;
