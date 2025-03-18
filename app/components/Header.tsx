"use client";
import Image from "next/image";
import Link from "next/link";
import { scrollToTop } from "../utils/scrollToTop";
import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const navItems = ["Projekt", "Lage", "Kontakt"];
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="h-header_mobile xl:h-header bg-white shadow-md w-screen fixed top-0 z-30">
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop 3xl:max-w-desktop-xl mx-auto h-full flex items-center justify-between ">
        <div className="relative w-[180px] h-[56px] xl:w-[263px] xl:h-[60px]">
          <Link href="/">
            <Image
              src="/logos/logo.svg"
              layout="fill"
              alt="Aurora Logo"
              onClick={() => scrollToTop()}
              className="cursor-pointer"
            />
          </Link>
        </div>

        <Image
          src={`/icons/${openMenu ? "close" : "burger"}.svg`}
          width={40}
          height={40}
          alt="burger menu icon"
          className="cursor-pointer xl:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        />

        <nav className="hidden xl:block">
          <ul className="flex font-bold gap-12">
            {navItems.map((navItem, i) => (
              <li key={i}>
                <Link
                  className="hover:bg-primary hover:text-white py-2 px-4 duration-300 rounded-3xl"
                  href={`#${navItem}`}
                >
                  {navItem}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
