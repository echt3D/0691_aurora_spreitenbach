import Link from "next/link";
import t from "../dics/text.json";

type MenuProps = {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
};

const Menu = ({ openMenu, setOpenMenu }: MenuProps) => {
  const { header } = t;

  return (
    <section
      className={`relative w-full h-screen bg-white flex flex-col justify-between  pt-12 ${
        openMenu ? "animate-menuSlideIn z-20" : "hidden"
      }`}
    >
      <nav className="">
        <ul className=" max-w-mobile mx-auto flex flex-col gap-4">
          {header.map((navItem, i) => (
            <li key={i}>
              <Link
                className="text-accent text-h2_mobile"
                href={`${navItem.link}`}
                onClick={() => setOpenMenu(false)}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        style={{ backgroundImage: "url(/assets/footer.svg)" }}
        className="w-full  bg-cover relative z-20 text-white py-20 h-[40vh] "
      >
        <div className="flex flex-col  max-w-mobile mx-auto">
          <div className="flex flex-col justify-center gap-1">
            <p className="font-bold">Noemi Natalia Nagel</p>
            <a href="mailto:wohnen@hbre.ch">wohnen@hbre.ch</a>
            <span>
              Tel. <a href="tel:0445757047">044 575 70 47</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
