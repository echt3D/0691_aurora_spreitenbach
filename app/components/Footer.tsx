"use client";
import Image from "next/image";
import Link from "next/link";
import { scrollToTop } from "../utils/scrollToTop";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "url(/assets/footer.svg)" }}
      className="w-full  bg-cover -mt-44 relative z-20 text-white "
    >
      <div className="container px-4 py-16 xl:py-20 3xl:py-32 h-full max-w-desktop 3xl:max-w-desktop-xl  mx-auto flex flex-col justify-between gap-8">
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
              <p className="font-bold">H&B Real Estate AG</p>
              <p>
                Lagerstrasse 107,
                <br /> 8004 ZH
              </p>
              <span>
                Tel. <a href="tel:0445757047">044 575 70 47</a>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Noemi Natalia Nagel</p>
              <a href="mailto:wohnen@hbre.ch">wohnen@hbre.ch</a>
            </div>
          </div>
          <div className="flex gap-12">
            <p className="hidden xl:block">Copyright 2025</p>
            <Link href="" className="underline hover:text-primary duration-300">
              Impressum
            </Link>
            <Link href="" className="underline hover:text-primary duration-300">
              Cookies
            </Link>
          </div>
          <p className="block xl:hidden">Copyright 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
