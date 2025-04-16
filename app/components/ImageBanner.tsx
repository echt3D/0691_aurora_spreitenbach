import Image from "next/image";

type ImageBannerProps = {
  src: string;
  alt: string;
  hasMargin: boolean;
};

const ImageBanner = ({ src, alt, hasMargin }: ImageBannerProps) => {
  return (
    <section className={`relative w-full h-screen  ${hasMargin && "-mt-44 3xl:-mt-64"}`}>
      <Image src={src} layout="fill" alt={alt} className="object-cover" />
    </section>
  );
};

export default ImageBanner;
