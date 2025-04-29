import Form from "./Form";
import Image from "next/image";
import t from "../dics/text.json";
import ContactPerson from "./ContactPerson";

const ContactFormBlock = () => {
  const { title, name, email, phone } = t.contact_person;

  return (
    <section className="-mt-20">
      <div className="relative w-full h-[27vh] 3xl:h-[20vh]">
        <Image
          fill
          src="/assets/background_top_drop_orange.svg"
          alt="hi"
          className="object-cover"
        />
      </div>
      <div className="bg-secondary relative xl:h-[90vh]">
        <div className="block md:hidden  absolute  left-1/2 -top-70 -translate-x-1/2">
          <ContactPerson />
        </div>
        <div className="hidden md:flex absolute  left-1/2 -top-60 -translate-x-1/2 ">
          <div className="flex flex-col bg-white py-4 pl-10 pr-20  justify-center gap-2 rounded-3xl text-center xl:text-left shadow-custom">
            <p className="text-h3_desktop text-accent">{title}</p>
            <p className="font-bold">{name}</p>
            <a href={`mailto:${email}`}>{email}</a>

            <div>
              <span>Tel.</span> <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
          <div className="relative w-profile_image_mobile xl:w-profile_image_desktop h-profile_image_mobile xl:h-profile_image_desktop self-center -ml-16">
            <Image
              src="/images/noemi_nagel.jpeg"
              layout="fill"
              alt="Noemi Nagel"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop mx-auto xl:h-[80vh] flex justify-center items-center pb-52 xl:pb-0">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactFormBlock;
