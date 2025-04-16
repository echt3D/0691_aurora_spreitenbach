import t from "../dics/text.json";
import Button from "./Button";
import Image from "next/image";
import ContactPerson from "./ContactPerson";

type ContactBlockProps = {
  color: string;
};

const ContactBlock = ({ color }: ContactBlockProps) => {
  const { lead, title, text, button } = t.contact_block;
  return (
    <section className="h-[100vh] relative -mt-90 3xl:-mt-130 ">
      <div className="relative w-full h-[45vh] ">
        <Image
          src={`/assets/background_blob_${color}.svg`}
          fill
          alt={`background top ${color}`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col md:gap-24 absolute top-1/8 right-1/4 translate-x-1/2">
        <ContactPerson />
      </div>
      <div
        className={` ${
          color === "cream" ? "bg-tertiary" : "bg-secondary"
        } h-[70vh]`}
      ></div>
      <div className="absolute w-full top-1/2 -translate-y-1/2">
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl w-full mx-auto flex flex-col xl:gap-12 3xl:gap-32">
          <div className="flex justify-end"></div>
          <div className=" top-0 md:top-30 3xl:top-60 xl:grid xl:grid-cols-2 gap-40">
            <div className="flex flex-col xl:gap-8">
              <div>
                <p className="text-h4_mobile xl:text-h4_desktop font-bold text-accent">
                  {lead}
                </p>
                <h2
                  className="text-h2_mobile xl:text-h2_desktop hyphens-auto "
                  lang="de"
                >
                  <span className="bg-primary text-white px-2">
                    {title.one} <br />
                  </span>{" "}
                  {title.two}
                </h2>
              </div>
              <div className="hidden xl:block leading-10">
                <p className="font-bold">{text.one}</p>
                <p>{text.two}</p>
              </div>
              <p>{text.three}</p>
              <Button label={button.label} link={button.link} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
