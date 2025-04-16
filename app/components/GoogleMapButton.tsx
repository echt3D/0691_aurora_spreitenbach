import t from "../dics/text.json";

const GoogleMapButton = () => {
  const { label, link } = t.google_map_button;
  return (
    <a
      className="bg-transparent xl:w-1/3 text-center text-primary rounded-3xl py-2 px-4 border-primary border-2  hover:bg-primary hover:border-transparent hover:text-white duration-300"
      target="_blank"
      href={link}
    >
      {label}
    </a>
  );
};

export default GoogleMapButton;
