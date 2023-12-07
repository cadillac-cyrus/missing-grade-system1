// src/components/helpAndSupportPage/HelpAndSupportPage.js
import React from "react";
import "./HelpAndSupportPage.css"; // Create this file for styling

const HelpAndSupportPage = () => {
  const QandAData = [
    { Question: "How do I report a missing grade?", Answer: "To report a missing grade, navigate to the 'Missing Grade Form' page. Fill out the form with the required details, including the course name, instructor name, expected grade, and an explanation. Click the submit button to report the missing grade." },
    { Question: "Can I view grades from previous semesters?", Answer: "Yes, you can view grades from previous semesters on the 'Grade Report' page. Use the provided filters to select the desired semester or academic year and view detailed course information and grades." },
    { Question: "What should I do if I receive an alert for a missing grade on the dashboard?", Answer: "If you receive an alert for a missing grade on the dashboard, it means there is a course with an unrecorded grade. Visit the 'Missing Grade Form' page to report the missing grade and provide the necessary information." },
    { Question: "How can I contact my instructors about missing grades?", Answer: "The 'Instructor Contact' page lists instructors along with their contact details. You can use the provided option to simulate sending an email to your instructor. Note that this is a mock-up, and no real emails will be sent." },
    { Question: "Is there technical support available for the system?", Answer: " Yes, if you encounter technical issues or need assistance, visit the 'Help and Support' page. You can find a list of frequently asked questions (FAQ) related to grade reporting. Additionally, there is a contact form for technical support (mock-up) that you can use to reach out for assistance." },
    { Question: "What information is displayed on the dashboard?", Answer: "Access the 'Login' page, where you will find a secure login form. Enter your student ID and PIN to log in." },
    { Question: " Can I filter my grades by semester or academic year?", Answer: "The dashboard provides an overview of your current grades. It may include alerts or notifications for any missing grades that need attention." },
  ];

  return (
    <div className="help-and-support-container">
      <h2 className="heading">Help and Support</h2>

      {/* FAQ Section
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
      </div> */}
      <div className="faq-section">
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {QandAData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.Question}</td>
                <td>{entry.Answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
