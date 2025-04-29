import Image from "next/image";
import t from "../dics/text.json";

const ContactPerson = () => {
  const { title, name, email, phone } = t.contact_person;
  return (
    <div className="flex flex-col">
      <div className="relative w-profile_image_mobile h-profile_image_mobile xl:w-profile_image_desktop xl:h-profile_image_desktop self-center -mr-60 -mb-8">
        <Image
          src="/images/noemi_nagel.jpeg"
          layout="fill"
          alt="Noemi Nagel"
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col bg-white py-4 pl-10 pr-20  justify-center gap-2 rounded-3xl text-center xl:text-left shadow-custom">
        <p className="text-h3_desktop text-accent">{title}</p>
        <p className="font-bold">{name}</p>
        <a href={`mailto:${email}`}>{email}</a>

        <div>
          <span>Tel.</span> <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPerson;
