import Image from "next/image";

type TextBannerV2Props = {
  text: string;
};

const TextBannerV2 = ({ text }: TextBannerV2Props) => {
  return (
    <section className="-mt-68  3xl:-mt-100">
      <div className="w-full h-[42vh] 3xl:h-[45vh] relative">
        <Image
          src="/assets/text_banner_top.svg"
          fill
          className="object-cover"
          alt="text banner top wave"
        />
      </div>
      <div className="h-[60vh] bg-text_primary ">
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-1/2 mx-auto  text-white">
          <p className="text-white text-h2_mobile xl:text-h2_desktop text-center ">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextBannerV2;
