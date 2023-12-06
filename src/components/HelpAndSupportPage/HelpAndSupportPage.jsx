// src/components/helpAndSupportPage/HelpAndSupportPage.js
import React from "react";
import "./HelpAndSupportPage.css"; // Create this file for styling

const HelpAndSupportPage = () => {
  return (
    <div className="help-and-support-container">
      <h2 className="heading">Help and Support</h2>

      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <ul>
          <li>Q: How do I report a missing grade?</li>
          <li>
            A: Navigate to the "Missing Grade Form" page and fill out the form.
          </li>
          {/* Add more FAQ items as needed */}
        </ul>
      </div>

      {/* Contact Form for Technical Support (Placeholder) */}
      <div className="contact-form-section">
        <h3>Contact Technical Support</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" required></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
