import Image from "next/image";

type ImageBannerProps = {
  src: string;
  alt: string;
  hasMargin: boolean;
};

const ImageBanner = ({ src, alt, hasMargin }: ImageBannerProps) => {
  return (
    <section className={`relative w-full h-screen -z-10 ${hasMargin && "-mt-20 xl:-mt-44 3xl:-mt-64"}`}>
      <Image src={src} layout="fill" alt={alt} className="object-cover object-center" />
    </section>
  );
};

export default ImageBanner;
