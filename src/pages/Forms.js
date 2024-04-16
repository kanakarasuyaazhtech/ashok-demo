import React, { useState } from "react";
import './Forms.css'
//react arrow function component
const Form = () => {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");


  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here (e.g., send it to a backend API)
    console.log("Form submitted:", { name, email, message, date });
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
    setDate("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="name" htmlFor="name">Name:</label>
        <input
        className="namefield"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
      <label className=" mt-40"  for="birthday">Birthday:</label>
      <input 
      className="namefield"
      type="date" 
      id="birthday" 
      value={date}
          onChange={(e) => setDate(e.target.value)}></input>
      <input className='submit' type="submit"></input>
      </div>
      <div>
        <label className="name" htmlFor="email">Email:</label>
        <input
        className="namefield"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="name" htmlFor="message">Message:</label>
        <textarea
        className="namefield"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button className=" p-5 bg-black text-white hover:bg-red-600 focus:bg-green-500 border-slate-950 rounded-3xl"  type="submit">Submit</button>

      
    </form>
  );
};


export default Form;