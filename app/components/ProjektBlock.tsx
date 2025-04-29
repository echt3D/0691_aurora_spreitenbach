import Sticker from "./Sticker";
import Coverflow from "../components/Coverflow";
import t from "../dics/text.json";
import Button from "./Button";
import Image from "next/image";

const ProjektBlock = () => {
  const { lead, title, text, button } = t.project_block;
  return (
    <section className=" xl:h-[100vh] relative ">
      <div className="relative w-full  h-[20vh] xl:h-[45vh] bg-tertiary">
        <Image
          src="/assets/background_blob_orange.svg"
          fill
          alt="background top orange"
          className="object-cover "
        />
      </div>
      <div className="bg-secondary h-[220vh] xl:h-[70vh]"></div>
      <div className="absolute w-full top-1/2 -translate-y-1/2">
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full mx-auto flex flex-col xl:gap-12 3xl:gap-32">
          <div className="flex justify-end">
            <Sticker />
          </div>
          <div className=" xl:grid xl:grid-cols-2 gap-40">
            <aside className="flex flex-col xl:gap-8">
              <div>
                <p className="text-h4_mobile xl:text-h4_desktop font-bold">
                  {lead}
                </p>
                <h2
                  className="text-h2_mobile xl:text-h2_desktop hyphens-auto "
                  lang="de"
                >
                  {title.one}{" "}
                  <span className="bg-primary text-white px-2">
                    {title.two}
                    <br />
                  </span>{" "}
                  {title.three}
                </h2>
              </div>
              <div className="hidden xl:flex flex-col gap-8">
                <p className="leading-10">
                  {text.one} <span className="font-bold">{text.two} </span>{" "}
                  {text.three}
                </p>
              <Button label={button.label} link={button.link} />
              </div>
            </aside>
            <aside className="flex flex-col md:gap-24 ">
              <Coverflow />
              <div className="flex flex-col gap-8 xl:hidden">
                <p className="leading-10">
                  {text.one} <span className="font-bold">{text.two} </span>{" "}
                  {text.three}
                </p>
                <Button label={button.label} link={button.link} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjektBlock;
