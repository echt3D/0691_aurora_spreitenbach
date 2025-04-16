import t from "../dics/text.json";

const GoogleMapButton = () => {
  const { label, link } = t.google_map_button;
  return (
    <a
      className="bg-transparent text-center text-primary rounded-3xl py-2 px-6 border-primary border-2  hover:bg-primary hover:border-transparent hover:text-white duration-300"
      target="_blank"
      href={link}
    >
      {label}
    </a>
  );
};

export default GoogleMapButton;
