import CoverflowTwo from "./CoverflowTwo";
import t from "../dics/text.json";
import GoogleMapButton from "./GoogleMapButton";
import Image from "next/image";
import Button from "./Button";

const Lage = () => {
  const { lead, title, text, button } = t.lage_block;
  return (
    <section className="relative z-10 pt-28 xl:pt-40 3xl:pt-80">
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl mx-auto xl:grid xl:grid-cols-2 flex flex-col gap-8 xl:gap-20">
        <div className="flex xl:hidden flex-col items-end ">
          <p className="text-h4_desktop font-bold">{lead}</p>
          <span className="text-h2_desktop bg-primary text-white px-2">
            {title}
          </span>
        </div>
        <CoverflowTwo />
        <aside className="text-left xl:text-right flex flex-col gap-8 items-end">
          <div className="hidden xl:block">
            <p className="text-h4_mobile xl:text-h4_desktop font-bold">
              {lead}
            </p>
            <span className="text-h2_mobile xl:text-h2_desktop bg-primary text-white px-2 ">
              {title}
            </span>
          </div>
          <p className="leading-10">{text}</p>
          <div className="flex flex-col gap-4 items-start xl:items-end w-full">
            <Button label={button.label} link={button.link} />
            <GoogleMapButton />
          </div>
        </aside>
      </div>

      <div className="relative w-full h-[20vh] xl:h-[32vh] 3xl:h-[35vh]">
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

export default Lage;
