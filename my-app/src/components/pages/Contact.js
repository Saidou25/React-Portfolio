import React, { useState } from 'react';

function Contact() {

  const [yourName, setYourName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    if (yourName === 'yourName') {
      setYourName(value);
      console.log(value);
    }
    else if (name === 'email') {
      setEmail(value);
      console.log(value);
    }
    else if (name === 'comment') {
      setComment(value);
      console.log(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your Submission ${yourName}.`)
    setYourName('');
    setEmail('');
    setComment('');
  };

  return (
    <div>

      <form className="form">
        <input
          className='form-control'
          value={yourName}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="example@example.com"
        />
        <input
          className='form-control'
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="Comment"
        />
        <button
          className='btn btn-primary'
          type="button"
          onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

    </div>
  )
};
export default Contact;