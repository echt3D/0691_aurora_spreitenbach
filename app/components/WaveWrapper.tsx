import Image from "next/image";

const WaveWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="-mt-20 flex flex-col gap-8 xl:gap-20 ">
      <div className="relative w-full h-[17vh] 3xl:h-[20vh]">
        <Image
          fill
          src="/assets/background_wave_top_cream.svg"
          alt="hi"
          className="object-cover"
        />
      </div>
    
        {children}
   
      <div className="relative w-full h-[18vh] 3xl:h-[20vh]">
        <Image
          fill
          src="/assets/background_wave_bottom_cream.svg"
          alt="hi"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default WaveWrapper;
