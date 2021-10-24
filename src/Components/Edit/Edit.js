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
      <div className="px-52">
        <form
        // onSubmit={addContactHandler}
        >
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
              id="inline-full-name"
              type="text"
              placeholder="Change Name"
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
              id="inline-full-name"
              type="text"
              placeholder="Change Contact"
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
