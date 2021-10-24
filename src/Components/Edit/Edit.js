import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Edit = () => {
  const [contact, setContact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data));
    // .then((data) => console.log(data));
  }, []);

  //Contact Edit
  const nameChangeHandler = (e) => {
    console.log(e.target.value);
    const updateName = e.target.value;
    const updatedContact = { name: updateName, number: contact.number };
    setContact(updatedContact);
  };

  const numberChangeHandler = (e) => {
    console.log(e.target.value);
    const updateNumber = e.target.value;
    /* 
    const updatedContact = { ...contact };
    updatedContact.number = updateNumber;
    */
    const updatedContact = { name: contact.name, number: updateNumber };
    setContact(updatedContact);
  };

  //Update & Save Contact
  const updateContactHandler = (e) => {
    const url = `http://localhost:5000/contacts/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.modifiedCount > 0){
          setContact({});
        }
      });
    e.preventDefault();
  };

  return (
    <div className="container mx-auto text-center mt-6">
      <span className="text-gray-500 text-2xl uppercase">
        edit this contact here
      </span>
      {/* Specific Contact */}
      <div className="mt-6">
        <h1 className="text-2xl uppercase">{contact.name}</h1>
        <h1 className="text-2xl uppercase mt-4">
          <i className="fas fa-phone text-red-500"></i>
          &nbsp; &nbsp;
          {contact.number}
        </h1>
      </div>
      {/* Form Field */}
      <div className="mx-52">
        <form onSubmit={updateContactHandler}>
          <div className="flex mt-12 items-center">
            {/* Name */}
            <input
              className="
                appearance-none 
                border
                border-gray-300 
                rounded w-full 
                py-2 
                px-4
                mr-4 
                text-gray-700 
                leading-tight 
                focus:outline-none  
                focus:border-red-500"
              // ref={nameRef}
              onChange={nameChangeHandler}
              id="inline-full-name"
              type="text"
              placeholder="Change Name"
              value={contact.name || " "}
            />

            {/* Contact */}
            <input
              className="
                appearance-none 
                border
                border-gray-300 
                rounded w-full 
                py-2 
                px-4
                mr-4 
                text-gray-700 leading-tight 
                focus:outline-none  
                focus:border-red-500"
              // ref={numberRef}
              onChange={numberChangeHandler}
              id="inline-full-name"
              type="text"
              placeholder="Change Contact"
              value={contact.number || " "}
            />
            {/* Button */}
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
              value="Update"
            >
              SAVE
            </button>
            {/* Button */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
