import Image from "next/image";

const ImageBanner = () => {
  return (
    <section className="relative w-full h-screen -mt-36">
      <Image
        src="/visus/visu.jpg"
        layout="fill"
        alt="visu"
        className="object-cover"
      />
    </section>
  );
};

export default ImageBanner;
