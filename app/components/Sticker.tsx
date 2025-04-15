import Link from "next/link";
import t from "../dics/text.json";

const Sticker = () => {
  return (
    <Link
      href="#Kontakt"
      className=" h-button w-button bg-primary hover:bg-accent -rotate-12 hover:rotate-0 duration-300 p-6 rounded-full text-center text-white hidden xl:flex justify-center items-center font-bold"
    >
      <p>{t.sticker.text}</p>
    </Link>
  );
};

export default Sticker;
