import React, { useState } from 'react';



function Contact() {
  // Here we set two state variables for email and Body using `useState`
  const [email, setemail] = useState('');
  const [Body, setBody] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setemail or setBody based on what field the user is typing in
    return name === 'email' ? setemail(value) : setBody(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${email} ${Body}`);
    setemail('');
    setBody('');
  };

  return (
    <div>
      <p>
        Hello {email} {Body}
      </p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={Body}
          name="Body"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;

