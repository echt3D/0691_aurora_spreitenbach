import Link from "next/link";

type ButtonProps = {
  label: string;
  link: string;
};

const Button = ({ label, link }: ButtonProps) => {
  return (
    <Link
      href={link}
      className="w-fit bg-primary hover:bg-accent rounded-3xl py-2 px-4 duration-300 text-white text-center"
    >
      {label}
    </Link>
  );
};
export default Button;
