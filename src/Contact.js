import React, { useState } from 'react'
import Map from './Map'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  
  const ref = useRef();
  const [success,setSuccess] = useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_1mrkmky', 'template_muaj4v6', ref.current, '7GL--g2AnHxjR1_PT')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
          }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
  }

  return (
    <div className='contact-container'>
      <div className='contact-items'>
        <div className='contact-left'>
          <form ref={ref} onSubmit={handleSubmit}>
            <h1 className='title3'>Contact Us</h1>
            <input type='text' name='name' placeholder='Name'/>
            <input type='email' name='email' placeholder='Email'/>
            <textarea name='message' placeholder='Write your message' rows={10}></textarea>
            <button type='submit'>Submit</button>
            {success && "Your message is delivered" }
          </form>
        </div>
        <div className='contact-right'>
          <Map/>
        </div>
      </div>
    </div>
  )
}

export default Contact
