import Image from "next/image";
import t from "../dics/text.json";
import Button from "./Button";

const AngebotBlock = () => {
  const { lead, title, text, button } = t.angebot_block;
  return (
    <section className="relative xl:h-[120vh] xl:flex -mt-28  md:-mt-44 3xl:-mt-64 -z-20">
      <aside
        style={{ backgroundImage: "url(/assets/background_left_side.svg)" }}
        className="h-full w-full xl:w-1/2 bg-cover flex justify-center items-center pb-20 pt-40 "
      >
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop_half flex flex-col gap-8 mx-auto ">
          <div>
            <p className="text-h4_desktop font-bold">{lead}</p>
            <h2
              className="text-h2_mobile xl:text-h2_desktop hyphens-auto"
              lang="de"
            >
              {title.one}{" "}
              <span className="bg-primary text-white px-2">
                {title.two}
                <br />
              </span>{" "}
            </h2>
          </div>
          <p className="leading-10">{text}</p>
          <Button label={button.label} link={button.link} />
        </div>
      </aside>
      <aside className="xl:absolute h-full right-0">
        <div className="relative h-screen w-full xl:w-[60vw] -z-10">
          <Image
            src="/visus/visu_2.jpg"
            fill
            alt="hi"
            className="object-cover"
          />
        </div>
      </aside>
    </section>
  );
};

export default AngebotBlock;
