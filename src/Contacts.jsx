//Importing Instagram icon from react-icons/fa library
import { FaInstagramSquare } from "react-icons/fa";
// Importing Facebook icon from react-icons/fa library
import { FaFacebookSquare } from "react-icons/fa";
//Import BiLogoTelegram icon from react-icons/ai library
import { BiLogoTelegram } from "react-icons/bi";
// Importing TikTok icon from react-icons/ai library
import { AiFillTikTok } from "react-icons/ai";

// Contact component definition
const Contact = () => {
 
  return (
    // Contact card container
    <div className="contact-card">
      {/* Contact Us heading */ }
      <h1 id="contact">Contact Us</h1>
      {/* Contact form section */}
      <div className="contact-form">
        {/* Contact form heading */}
        <h2>Contact Form</h2>
        {/* Contact form */}
        <form>
          {/* Name input field */}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          {/* Email input field */}
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          {/* Message input field */}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    
        {/* Follow Us heading */}
        <h2>Follow Us</h2>
        {/* Social media links */}
        <div className="social-media-links">
          {/* Instagram link */}
          <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
            {/* Instagram icon */}
            <FaInstagramSquare />
          </a>
          {/* Facebook link */}
          <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
            {/* Facebook icon */}
            <FaFacebookSquare />
          </a>
          {/* Telegram link */}
          <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
            {/* Telegram icon */}
            <BiLogoTelegram />
          </a>
          {/* TikTok link */}
          <a href="https://www.tiktok.com/@your_username" target="_blank" rel="noopener noreferrer">
            {/* TikTok icon */}
            <AiFillTikTok />
          </a>
        </div>
      </div>    
  );        
};

// Exporting Contact component
export default Contact;
