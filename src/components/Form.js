
import React, { useState } from 'react'
import Selects from 'react-select';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Subjects = [
  { label: "Enquiries", value: 1 },
  { label: "Support", value: 2 },
  { label: "Feedbacks", value: 3 },
  { label: "Others", value: 4 },
];

function Form() {
  const [selectedOption, setSelectedOption] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="login-box">
    <h2>Send us a message</h2>
    <form  ref={form} onSubmit={sendEmail} >
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Name</label>
      </div>
      <div className="user-box">
        <input type="text" name="" required="" />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="text" name="phone number" required="" />
        <label>Phone number</label>
      </div>
      <div style={{marginBottom: 30}} className="user-box">
      <Selects placeholder="Choose a Subject" className='select' defaultValue={selectedOption}
        onChange={setSelectedOption} options={ Subjects } />
      </div>
      <div className="user-box">
        <textarea style={{ border: "2px solid lightGray", width: "100%" , height:"200px", fontSize:"16px"}} type="textArea" name="phone number" required="" />
        <label>message</label>
      </div>
    


      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
  )
}

export default Form;