import Image from "next/image";

type TextBannerProps = {
  text: string;
  bgColor: string;
  hasMargin: boolean;
};

const TextBanner = ({ text, bgColor, hasMargin }: TextBannerProps) => {
  return (
    <div
      className={`relative -mt-12 md:-mt-12 z-20 overflow-hidden ${
        hasMargin ? " xl:-mt-40" : "xl:-mt-0"
      }`}
    >
      <div className="md:hidden">
        <Image
          src="/assets/text-banner-mobile.svg"
          width={600}
          height={600}
          alt="text banner mobile bg"
        />
      </div>
      <div className="hidden md:block">
        <svg
          viewBox="0 0 1476 489"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 87.4999V488.5C214.5 338.5 375.5 447 801.5 449C1142.3 450.6 1392.83 431.667 1475.5 422V7.5C1315 36.5 1178.5 42 971 46C763.5 50 720.5 26.5 452.5 3.49995C238.1 -14.9 61.5 51.8333 0 87.4999Z"
            fill={bgColor}
          />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 text-center">
        <p className="text-white text-h2_mobile xl:text-h2_desktop text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextBanner;
