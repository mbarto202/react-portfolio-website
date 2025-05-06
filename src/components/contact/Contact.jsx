import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m13i7tp",
        "template_463rygv",
        form.current,
        "t202L9B5fU3XrJhDl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section ${inView ? "fadeIn" : ""}`}
    >
      <h2 className="title">Contact Me</h2>
      <div className="container contactContainer">
        {/* Contact Options */}
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className="contactOption-icon" />
            <h4>Email</h4>
            <h5>michael.d.barto@gmail.com</h5>
            <a
              href="mailto:michael.d.barto@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contactOption">
            <BsLinkedin className="contactOption-icon" />
            <h4>LinkedIn</h4>
            <h5>Michael Barto</h5>
            <a
              href="https://www.linkedin.com/in/michael-barto-6a2365230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn sendMessage">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
