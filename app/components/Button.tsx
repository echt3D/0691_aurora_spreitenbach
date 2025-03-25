import Link from "next/link";

const Button = () => {
  return (
    <Link
      href="#Kontakt"
      className="self-end xl:mr-32 h-button w-button bg-primary hover:bg-accent -rotate-12 hover:rotate-0 duration-300 p-6 rounded-full text-center text-white hidden xl:flex justify-center items-center font-bold"
    >
      <p>Neugierig geworden? Schreib uns gern!</p>
    </Link>
  );
};

export default Button;
