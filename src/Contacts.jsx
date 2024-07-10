import React, { useState } from "react";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  return (
    <div className="contact-card">
      <h1 id="contact">Contact Us</h1>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <h2>Follow Us</h2>
      <div className="social-media-links">
        <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare />
        </a>
        <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
          <BiLogoTelegram />
        </a>
        <a href="https://www.tiktok.com/@your_username" target="_blank" rel="noopener noreferrer">
          <AiFillTikTok />
        </a>
      </div>
    </div>
  );
};

export default Contact;

