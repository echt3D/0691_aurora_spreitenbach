import t from "../dics/text.json";

const GoogleMapButton = () => {
  const { label, link } = t.google_map_button;
  return (
    <a
      className="bg-primary xl:w-1/3 text-center rounded-3xl py-2 px-4 text-white hover:bg-accent duration-300"
      target="_blank"
      href={link}
    >
      {label}
    </a>
  );
};

export default GoogleMapButton;
