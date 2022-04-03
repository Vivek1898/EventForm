import React from 'react'
import './form.css';
import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const Form = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Whatsapp, setWhatsapp] = useState('');
  const [Institute, setInstitute] = useState('');
  const [Branch, setBranch] = useState('');
  const [Year, setYear] = useState('');


  const handleSubmit = (e)=> {
    e.preventDefault();
    
  
const  formData = {Name,Email,Mobile,Whatsapp,Institute,Branch,Year};
console.log(formData);

 axios.post("https://sheet.best/api/sheets/1b1a7f92-1b0f-49a1-bd5e-a3510daffb9b",formData)
 .then((response)=>{
   console.log(response);
 });
 toast("Congratulation " +Name+ " Registration Sucessfull")
 e.target.reset();

}

  return (
    <div>
      <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CODE GAME</h2>
      <br/>
      <h3>REGISTER</h3>
    </div>
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-item" id='create-course-form'>
          <input type="text" onChange={(e) => setName(e.target.value)}  required/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" onChange={(e) => setEmail(e.target.value)}  required/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <input type="number" onChange={(e) => setMobile(e.target.value)}  required/>
          <label>Mobile Number:</label>
        </div>
        <div className="form-item">
          <input type="number" onChange={(e) => setWhatsapp(e.target.value)}  required/>
          <label>Whatsapp Number:</label>
        </div>
        <div className="form-item">
          <input type="text" onChange={(e) => setInstitute(e.target.value)}  required/>
          <label>Institution:</label>
        </div>
        <div className="form-item">
          <input type="text" onChange={(e) => setBranch(e.target.value)} required/>
          <label>Branch:</label>
        </div>
        <div className="form-item">
          <input type="number" onChange={(e) => setYear(e.target.value)}  required/>
          <label>Year:</label>
        </div>
        <button className="submit-btn" type='submit' >Register</button>  
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Form;