"use client";
import Image from "next/image";
import Link from "next/link";
import { scrollToTop } from "../utils/scrollToTop";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "url(/assets/footer.svg)" }}
      className="w-screen h-120 bg-cover -mt-44 relative z-20 text-white "
    >
      <div className="py-20 h-full max-w-desktop mx-auto flex flex-col justify-between">
        <div className="flex justify-between">
          <Image
            src="/logos/logo_white.svg"
            width={263}
            height={61}
            alt="aurora Spreitenbach white logo"
          />

          <Image
            src="/icons/arrow.svg"
            width={28}
            height={28}
            alt="back to the top icon"
            className="rotate-90 cursor-pointer"
            onClick={() => scrollToTop()}
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-12">
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
            <p>Copyright 2025</p>
            <Link href="" className="underline hover:text-primary duration-300">
              Impressum
            </Link>
            <Link href="" className="underline hover:text-primary duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
