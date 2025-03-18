"use client";
import { useState } from "react";
import Image from "next/image";
import SubmitPopUp from "./SubmitPopUp";

const Form = () => {
  type Contact = {
    firstname: string;
    name: string;
    phone?: string;
    email: string;
    remarks: string;
    additional_info: string;
  };

  const initContact: Contact = {
    firstname: "",
    name: "",
    phone: "",
    email: "",
    remarks: "",
    additional_info: "",
  };

  const [contact, setContact] = useState<Contact>(initContact);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContact({ ...contact, [name]: value });
  };

  const canSubmitForm = () => {
    const requiredFields = ["firstname", "name", "email", "remarks"];

    const requiredFieldsareFilled = requiredFields.every(
      (field) => contact[field as keyof Contact]
    );
    return requiredFieldsareFilled;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(process.env.NEXT_PUBLIC_FORM_API!, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.NEXT_PUBLIC_USERNAME!}:${process.env
            .NEXT_PUBLIC_PASSWORD!}`
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (res.status === 200) {
      setIsSubmitted(true);
      setContact(initContact);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className="xl:grid xl:grid-cols-2 flex flex-col gap-12 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="firstname" className="font-bold">
            Vorname*
          </label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            className="border-b border-text_primary focus:outline-none"
            value={contact.firstname}
            onChange={handleContact}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-bold ">
            Deine Telefonnummer
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            className="border-b border-text_primary focus:outline-none"
            value={contact.phone}
            onChange={handleContact}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="font-bold ">
            Nachname*
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="border-b border-text_primary focus:outline-none"
            value={contact.name}
            onChange={handleContact}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mail" className="font-bold ">
            Deine E-Mail-Adresse*
          </label>
          <input
            id="mail"
            type="email"
            name="email"
            className="border-b border-text_primary focus:outline-none"
            value={contact.email}
            onChange={handleContact}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="remarks" className="font-bold ">
            Zusätzliche Bemerkung (Interesse an Wohnung)
          </label>
          <input
            id="additional_info"
            type="text"
            name="additional_info"
            className="border-b border-text_primary focus:outline-none h-20"
            value={contact.additional_info}
            onChange={handleContact}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="remarks" className="font-bold ">
            Deine Nachricht*
          </label>
          <input
            id="remarks"
            type="text"
            name="remarks"
            className="border-b border-text_primary focus:outline-none h-20"
            value={contact.remarks}
            onChange={handleContact}
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className={`xl:w-1/4 bg-primary text-white py-2 px-4 rounded-3xl  flex justify-center items-center duration-300 cursor-pointer ${
              canSubmitForm()
                ? "hover:bg-accent opacity-100 pointer-events-auto"
                : "opacity-70 pointer-events-none"
            }`}
          >
            {isLoading ? (
              <Image
                src="/icons/loading.gif"
                width={24}
                height={24}
                alt="loading"
              />
            ) : (
              "Absenden"
            )}
          </button>
        </div>
      </form>
      <SubmitPopUp isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
    </>
  );
};

export default Form;
