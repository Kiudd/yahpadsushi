import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contactez-Nous</h1>
      </section>

      <section className="container">
        <h2>Nous Contacter</h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <input
            type="hidden"
            name="access_key"
            value="976e2063-f469-49e7-94d5-f3776b24bc8a"
          />

          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
