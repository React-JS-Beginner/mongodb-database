import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Update = () => {
  const [contact, setContact] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data));
    // .then((data) => console.log(data));
  }, []);

  return (
    <div className="container mx-auto text-center mt-6">
      <span className="text-gray-500 text-2xl uppercase">Updated contacts</span>
      <div className="mt-12">
        {id}        
      </div>
      <p>{contact.name}</p>
    </div>
  );
};

export default Update;
