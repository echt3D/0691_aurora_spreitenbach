import Hero from "./sections/Hero";
import Projekt from "./sections/Projekt";
export default function Home() {
  return (
    // <div className="w-screen h-screen border-red-500 border">
    //   <div className=" flex justify-end">
    //     <Image
    //       src="/hi.png"
    //       width={800}
    //       height={1200}
    //       alt="hi"
    //       className="border-blue-500 border "
    //     />
    //   </div>
    //   <div className="relative z-10">
    //     <svg
    //       viewBox="0 0 1510 347"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="w-full h-full"
    //     >
    //       <path
    //         d="M758 92.9997C491.16 26.9131 142 -6.33363 0 0.999705V55.9998V346.5H1510V308C1490.97 263.393 1420 305 1378 240C1331.41 180.177 1388 120 1276 55.9998C1178 -0.000217438 972 146 758 92.9997Z"
    //         fill="#F5E4D7"
    //       />
    //     </svg>
    //     <div className="bg-[#F5E4D7] h-[50vh]  -mt-1"></div>
    //   </div>
    //   <div className="relative -mt-40 z-20 border border-red-500">
    //     <svg
    //       viewBox="0 0 1476 489"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M0 87.4999V488.5C214.5 338.5 375.5 447 801.5 449C1142.3 450.6 1392.83 431.667 1475.5 422V7.5C1315 36.5 1178.5 42 971 46C763.5 50 720.5 26.5 452.5 3.49995C238.1 -14.9 61.5 51.8333 0 87.4999Z"
    //         fill="#353535"
    //       />
    //     </svg>
    //   </div>
    // </div>

    <>
      <Hero />
      <Projekt />
    </>
  );
}
