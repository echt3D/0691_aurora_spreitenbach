import Image from "next/image";

type SubmitPopUpProps = {
  isSubmitted: boolean;
  setIsSubmitted: (isSubmitted: boolean) => void;
};

const SubmitPopUp = ({ isSubmitted, setIsSubmitted }: SubmitPopUpProps) => {
  return (
    <section
      className={`fixed top-0 left-0 bg-black/50 w-screen h-screen flex ${
        isSubmitted ? "opacity-100 z-30" : "opacity-0 -z-10"
      } duration-200`}
    >
      <div className="max-w-mobile md:max-w-tablet xl:max-w-desktop mx-auto flex items-center justify-center">
        <div className="bg-tertiary xl:w-[940px] xl:h-[600px] p-6  xl:p-12 flex flex-col items-center justify-start">
          <div className="w-full flex justify-end ">
            <Image
              src="icons/close.svg"
              width={20}
              height={20}
              alt="close icon"
              onClick={() => setIsSubmitted(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 flex-grow text-center">
            <p className="text-h2_mobile xl:text-h2_desktop">
              Vielen Dank für die Anfrage
            </p>
            <div >
              <p className="font-bold">
                Dein Interesse an «Aurora» freut uns sehr!
              </p>
              <p>
                Vielleicht geniesst du schon bald deinen Blick über das Tal.
                <br /> Wir melden uns, sobald es Neuigkeiten gibt. 
              </p>
            </div>
            <p>Bis dahin – wir sind für dich da. </p>
            <button
              className="bg-primary hover:bg-accent text-white py-2 px-4 rounded-3xl  flex justify-center items-center duration-300 cursor-pointer"
              onClick={() => setIsSubmitted(false)}
            >
              Zurück zur Website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitPopUp;
