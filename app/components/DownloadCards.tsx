import Button from "./Button";

type DownloadCardsProps = {
  downloadCards: {
    title: string;
    text: string;
    button: { label: string; link: string };
  }[];
};

const DownloadCards = ({ downloadCards }: DownloadCardsProps) => {
  return (
    <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop flex flex-col items-center mx-auto ">
      <ul className="grid grid-cols-2 gap-20 w-2/3 ">
        {downloadCards.map((downloadCard, i) => (
          <li
            key={i}
            className="bg-white rounded-2xl flex flex-col items-center justify-center text-center gap-6 mt-2 px-8 py-12 shadow-custom"
          >
            <p className="text-h3_desktop text-accent">{downloadCard.title}</p>
            <p>{downloadCard.text}</p>
            <Button
              label={downloadCard.button.label}
              link={downloadCard.button.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadCards;
