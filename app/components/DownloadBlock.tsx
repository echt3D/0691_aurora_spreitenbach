import Image from "next/image";
import t from "../dics/text.json";
import Button from "./Button";
const DownloadBlock = () => {
  const { lead, title, text, button } = t.download_block;
  return (
    <section className="-mt-52 3xl:-mt-80">
      <div className="relative w-full h-[32vh] 3xl:h-[35vh] ">
        <Image
          fill
          src="/assets/background_top_cream.svg"
          alt="hi"
          className="object-cover"
        />
      </div>
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop flex flex-col items-center gap-8 mx-auto text-center">
        <div>
          <p className="text-accent font-bold text-h4_desktop">{lead}</p>
          <h2 className="text-h2_mobile xl:text-h2_desktop hyphens-auto flex flex-col">
            <span className="text-accent">{title.one}</span>
            <span className="bg-primary text-white px-2">{title.two}</span>
          </h2>
        </div>
        <p className="w-1/2 leading-10">{text}</p>
        <Button label={button.label} link={button.link} />
      </div>
      <div className="relative w-full h-[32vh] 3xl:h-[35vh] ">
        <Image
          fill
          src="/assets/background_bottom_cream.svg"
          alt="hi"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default DownloadBlock;
