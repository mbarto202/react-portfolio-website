import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
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
        <form action="">
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