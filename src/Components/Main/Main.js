import React from "react";
import { useEffect, useRef, useState } from "react";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const nameRef = useRef();
  const numberRef = useRef();

  //Node will block this fetch by Cors policy that why install Cors
  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  const addContactHandler = (e) => {
    e.preventDefault();
    // console.log(nameRef.current);
    // console.log(nameRef.current.value);
    const name = nameRef.current.value;
    const number = numberRef.current.value;
    const newContact = { name: name, number: number };
    // const newContact = {name, number} //if the keys and values are same then you can use this

    //send data to server
    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); /* 
        const addContact = data;
        const newContact = [...contacts, addContact]
        setContacts(newContact); */
      });

    nameRef.current.value = "";
    numberRef.current.value = "";
  };

  return (
    <div className="container mx-auto">
      
      {/* main-section */}
      <div className="container mx-auto px-8 flex justify-between">
        {/* Form Field */}
        <form onSubmit={addContactHandler} className="max-w-xs mt-28">
          <div className="mb-6">
            {/* Name */}
            <div className="mb-5">
              <label className="text-gray-500">Name</label>

              <input
                className="
                appearance-none 
                border
                border-gray-300 
                rounded w-full 
                py-2 
                px-4 
                text-gray-700 
                leading-tight 
                focus:outline-none  
                focus:border-red-500"
                ref={nameRef}
                id="inline-full-name"
                type="text"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="text-gray-500">Contact</label>

              <input
                className="
                appearance-none 
                border
                border-gray-300 
                rounded w-full 
                py-2 
                px-4 
                text-gray-700 leading-tight 
                focus:outline-none  
                focus:border-red-500"
                ref={numberRef}
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          {/* Button */}
          <div>
            <button
              className="
                shadow 
                bg-red-500 
                hover:bg-red-400 
                focus:shadow-outline 
                focus:outline-none 
                text-white  
                py-2 
                px-4 
                rounded"
              type="submit"
            >
              ADD
            </button>
          </div>
        </form>

        {/* Contact List */}
        <div className="mt-12">
          <h1 className="text-red-500 text-2xl uppercase mb-6">
            {" "}
            <span className="text-black">{contacts.length}</span> Contacts
          </h1>
          {/* Contact Bar */}
          {contacts.map((contact) => (
            <div key={contact.id} className="h-16 mb-12">
              <div
                className="
        py-4
        px-6
        w-96
        border-l-4 
        border-red-500 
        bg-white 
        rounded-r-xl 
        shadow-md"
              >
                <div>
                  <div className="text-xl font-medium text-black">
                    {contact.name}
                  </div>
                  <p className="text-gray-500">
                    <i className="fas fa-phone text-red-500"></i>
                    &nbsp; &nbsp;
                    {contact.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Div-End */}
      </div>
    </div>
  );
};

export default Main;
