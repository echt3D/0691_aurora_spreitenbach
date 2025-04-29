"use client";
import Image from "next/image";
import Link from "next/link";
import { scrollToTop } from "../utils/scrollToTop";
import t from "../dics/text.json";

const Footer = () => {
  const {
    company,
    address,
    mail,
    phone,
    contact_person,
    copyright,
    impressum_datenschutz,
  } = t.footer;
  return (
    <footer
      style={{ backgroundImage: "url(/assets/footer.svg)" }}
      className="w-full  bg-cover -mt-16 md:-mt-20 xl:-mt-36 3xl:-mt-44 relative z-20 text-white "
    >
      <div className="container px-4 py-16 xl:py-20 3xl:py-32 h-full max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl  mx-auto flex flex-col justify-between gap-8">
        <div className="flex justify-between">
          <div className="relative w-[180px] h-[56px] xl:w-[263px] xl:h-[60px]">
            <Image
              src="/logos/logo_white.svg"
              layout="fill"
              alt="Aurora Logo"
              onClick={() => scrollToTop()}
              className="cursor-pointer"
            />
          </div>

          <Image
            src="/icons/arrow.svg"
            width={28}
            height={28}
            alt="back to the top icon"
            className="rotate-90 cursor-pointer"
            onClick={() => scrollToTop()}
          />
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-4">
          <div className="flex flex-col gap-8 xl:gap-12">
            <div className="flex flex-col gap-1">
              <p className="font-bold">{company}</p>
              <p>
                {address.one}
                <br /> {address.two}
              </p>
              <span>
                Tel. <a href={`tel:${phone}`}>{phone}</a>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">{contact_person}</p>
              <a href={`mailto:${mail}`}>{mail}</a>
            </div>
          </div>
          <div className="flex gap-12">
            <p className="hidden xl:block">{copyright}</p>
            <Link
              href={`${impressum_datenschutz.link}`}
              className="underline hover:text-primary duration-300"
            >
              {impressum_datenschutz.label}
            </Link>
          </div>
          <p className="block xl:hidden">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
