import React from 'react'
import './form.css';

const Form = () => {
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
      <form>
        <div className="form-item">
          <input type="text" name="sender" required/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <input type="number" name="sender" required/>
          <label>Mobile Number:</label>
        </div>
        <div className="form-item">
          <input type="number" name="sender" required/>
          <label>Whatsapp Number:</label>
        </div>
        <div className="form-item">
          <input type="text" name="sender" required/>
          <label>Institution:</label>
        </div>
        <div className="form-item">
          <input type="text" name="sender" required/>
          <label>Branch:</label>
        </div>
        <div className="form-item">
          <input type="number" name="sender" required/>
          <label>Year:</label>
        </div>
        <button className="submit-btn">Register</button>  
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Form;