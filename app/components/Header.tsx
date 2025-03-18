"use client";
import Image from "next/image";
import Link from "next/link";
import { scrollToTop } from "../utils/scrollToTop";

const Header = () => {
  const navItems = ["Projekt", "Lage", "Kontakt"];
  return (
    <header className=" h-header bg-white shadow-md w-full fixed top-0 z-30">
      <div className="max-w-desktop 3xl:max-w-desktop-xl mx-auto h-full flex items-center justify-between">
        <Image
          src="/logos/logo.svg"
          width={263}
          height={60}
          alt="Aurora Logo"
          onClick={() => scrollToTop()}
          className="cursor-pointer"
        />

        <nav>
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
    </header>
  );
};

export default Header;
