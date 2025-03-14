import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = ["Projekt", "Lage", "Kontakt"];
  return (
    <header className=" h-header bg-white shadow-md w-full fixed top-0 z-30">
      <div className="max-w-desktop mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logos/logo.svg"
            width={263}
            height={60}
            alt="Aurora Logo"
          />
        </Link>
        <nav>
          <ul className="flex font-bold gap-12">
            {navItems.map((navItem, i) => (
              <li
                key={i}
                className="hover:bg-primary hover:text-white py-2 px-4 duration-300 rounded-3xl"
              >
                <Link href={`#${navItem}`}>{navItem}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
