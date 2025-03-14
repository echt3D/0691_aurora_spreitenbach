const Form = () => {
  return (
    <form className="grid grid-cols-2 gap-12 w-full ">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="font-bold">
          Vorname*
        </label>
        <input
          id="firstName"
          type="text"
          className="border-b border-text_primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="font-bold ">
          Deine Telefonnummer
        </label>
        <input
          id="phone"
          type="text"
          className="border-b border-text_primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName" className="font-bold ">
          Nachname*
        </label>
        <input
          id="lastName"
          type="text"
          className="border-b border-text_primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="mail" className="font-bold ">
          Deine E-Mail-Adresse*
        </label>
        <input
          id="lastName"
          type="text"
          className="border-b border-text_primary focus:outline-none"
        />
      </div>
      <div>INTERESSE AN</div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-bold ">
          Deine Nachricht*
        </label>
        <input
          id="message"
          type="text"
          className="border-b border-text_primary focus:outline-none h-20"
        />
      </div>
      <div className="col-span-2 flex justify-center">
        <input
          type="submit"
          value="Absenden"
          className="w-1/4 bg-primary text-white py-2 px-4 rounded-3xl hover:bg-accent duration-300 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Form;
