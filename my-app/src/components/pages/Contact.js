import React, { useState } from "react";
import "../../styles.css/Contact.css";


function Contact() {

  const [yourname, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const validEmail = /^\S+@\S+\.\S+$/;

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    if (name === "name") {
      setYourName(value);
    }
    if (name === "email") {

      setEmail(value);
    }
    if (name === "comment") {
      setComment(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validEmail.test(email)) {

      alert(`Thank you for your Submission ${yourname}.`);

      setYourName("");
      setEmail("");
      setComment("");
    }
    else {
      alert(`You entered an invalid password ${yourname}.`);
      setEmail("");
    }
  };

  return (
    <div className="row formContainer t-30">
      <div className="col-6 flex m-10" id="left-box">
        <div className="mb-5">

          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input
            className="form-control"
            value={yourname}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />

          <label for="exampleFormControlInput1" className="form-label">email</label>
          <input
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="example@example.com"
          />

          <label for="exampleFormControlInput1" className="form-label">Comment</label>
          <textarea
            className="form-control"
            value={comment}
            name="comment"
            onChange={handleInputChange}
            type="text"
            placeholder="Comment"
          ></textarea>

          <button
            className="btn btn-primary"
            type="button"
            onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>

      <div className="col-6 flex" id="right-box">
        <h3>hello</h3>
      </div>
    </div>
  )
};
export default Contact;