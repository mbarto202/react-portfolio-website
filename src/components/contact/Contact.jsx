import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m13i7tp', 'template_463rygv', form.current, 't202L9B5fU3XrJhDl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id = 'contact'>
      <h2>Contact Me</h2>

      <div className='container contactContainer'>
        <div className="contactOptions">
          <article className='contactOption'>
          <MdOutlineEmail className='contactOption-icon'/>
          <h4>Email</h4>
          <h5>michael.d.barto@gmail.com</h5>
          <a href="mailto:michael.d.barto@gmail.com" target={"_blank"}
          >Send a message</a>   
          </article>
          <article className='contactOption'>
          <RiMessengerLine className='contactOption-icon'/>
          <h4>Messenger</h4>
          <h5>Michael Barto</h5>
          <a href="https://m.me/michael.barto.92" target={"_blank"}>Send a message</a>   
          </article>
          {/*end of contact options*/}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder = 'Your Full Name' required/>
          <input type="email" name='email' placeholder = 'Your Email' required/>
          <textarea name="message" rows="4" placeholder = 'Your Message' required></textarea>
          <button type='submit' className='btn sendMessage'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact