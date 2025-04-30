import Isometrie from "./Isometrie";

const IsometrieBlock = () => {
  return (
    <section className="bg-tertiary flex flex-col xl:grid xl:grid-cols-3 place-items-center max-w-mobile md:max-w-tablet xl:max-w-desktop w-full mx-auto gap-8">
      <Isometrie />
      <div className="col-span-2 border border-text_primary h-[40vh] xl:h-full w-full flex items-center justify-center">
        <span className="text-h2_desktop">TABELLE</span>
      </div>
    </section>
  );
};
export default IsometrieBlock;
