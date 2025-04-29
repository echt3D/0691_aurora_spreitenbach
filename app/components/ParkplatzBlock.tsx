import Coverflow from "./Coverflow";

type ParkplatzBlockProps = {
  title: { [key: string]: string };
  text: string;
};

const ParkplatzBlock = ({ title, text }: ParkplatzBlockProps) => {
  return (
    <section className="bg-secondary h-[130vh] xl:h-[100vh] flex justify-center items-center -mt-20 xl:-mt-40">
      <div className=" max-w-mobile md:max-w-tablet xl:max-w-desktop mx-auto xl:grid xl:grid-cols-2 gap-40">
        <aside className="flex flex-col  justify-center xl:gap-8">
          <div>
            <h2
              className="text-h2_mobile xl:text-h2_desktop hyphens-auto "
              lang="de"
            >
              {title.one}{" "}
              <span className="bg-primary text-white px-2">
                {title.two}
                <br />
              </span>{" "}
            </h2>
          </div>
          <div className="hidden xl:block">
            <p className="leading-10">{text}</p>
          </div>
        </aside>
        <aside>
          <Coverflow />
        </aside>
      </div>
    </section>
  );
};

export default ParkplatzBlock;
