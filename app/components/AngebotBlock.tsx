import Image from "next/image";

const AngebotBlock = () => {
  return (
    <section className="relative h-[100vh] flex  -mt-44">
      <aside
        style={{ backgroundImage: "url(/assets/background_side.svg)" }}
        className="h-full w-1/2 bg-cover"
      ></aside>
      <aside className="absolute h-full right-0">
        <div className="relative h-full w-[60vw] -z-10">
          <Image src="/visus/visu.jpg" fill alt="hi" />
        </div>
      </aside>
    </section>
  );
};

export default AngebotBlock;
