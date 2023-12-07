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
          <li>
            Q: My grades are not showing up on the site. What should I do?
          </li>
          <li>
            A: If your grades are not displaying, please ensure that you have logged in with the correct credentials. If the issue persists, contact your school's administration or the support team for further assistance.
          </li>
        </ul>
        <ul>
          <li>
            Q: Are there any known technical issues affecting the site's performance?
          </li>
          <li>
            A: Check the site's status page for information on any ongoing technical issues. If there are no reported issues and you're still facing problems, contact our support team for further investigation.
          </li>
        </ul>
        <ul>
          <li>
            Q: How do I report a missing grade?
          </li>
          <li>
          A: To report a missing grade, navigate to the "Missing Grade Form" page. Fill out the form with the required details, including the course name, instructor name, expected grade, and an explanation. Click the submit button to report the missing grade.
          </li>
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
