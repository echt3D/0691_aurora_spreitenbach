import Image from "next/image";
import t from "../dics/text.json";
import Button from "./Button";

const AngebotBlock = () => {
  const { lead, title, text, button } = t.gallery_block;
  return (
    <section className="relative h-[130vh] flex  -mt-44 3xl:-mt-64 -z-10">
      <aside className="">
        <div className="relative h-full w-[60vw] ">
          <Image
            src="/visus/visu_3.jpg"
            fill
            alt="hi"
            className="object-cover"
          />
        </div>
      </aside>
      <aside
        style={{ backgroundImage: "url(/assets/background_right_side.svg)" }}
        className="h-full w-1/2 bg-cover flex justify-center items-center absolute right-0"
      >
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop_half flex flex-col gap-8 mx-auto">
          <div>
            <p className="text-h4_desktop font-bold">{lead}</p>
            <h2
              className="text-h2_mobile xl:text-h2_desktop hyphens-auto "
              lang="de"
            >
              {title.one}{" "}
              <span className="bg-primary text-white px-2">
                {title.two}
                <br />
              </span>{" "}
              {title.three}{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="leading-10">{text.one}</p>
            <p className="leading-10">{text.two}</p>
          </div>
          <Button label={button.label} link={button.link} />
        </div>
      </aside>
    </section>
  );
};

export default AngebotBlock;
