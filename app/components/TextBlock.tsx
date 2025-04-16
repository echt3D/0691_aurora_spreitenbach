type TextBlockProps = {
  title: string;
  text: { [key: string]: string };
};

const TextBlock = ({ title, text }: TextBlockProps) => {
  return (
    <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop flex flex-col items-center gap-8 mx-auto w-1/2 leading-10">
      <h2 className="text-h2_desktop text-accent">{title}</h2>
      <div className="text-center flex flex-col gap-8">
        <p>{text.one}</p>
        <p>{text.two}</p>
      </div>
    </div>
  );
};

export default TextBlock;
