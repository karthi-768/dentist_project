import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hstmutq", "template_zcbonnm", form.current, {
        publicKey: "llI_xOtVyv9HQxZIV",
      })
      .then(
        () => {
          //   console.log("SUCCESS!");
          alert("Message sent successfully. We will get back to you shortly.");
          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h3>Get in Touch</h3>
        <input type="text" placeholder="Your Name" name="user_name" required />
        <input
          type="email"
          placeholder="Your Email"
          name="user_email"
          required
        />
        <textarea placeholder="Your Message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <footer className="footer">
        <p>&copy; 2025 Nalam Dental Clinic. All rights reserved.</p>
      </footer>
    </>
  );
};
export default ContactForm;
