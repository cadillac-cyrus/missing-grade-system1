// src/components/instructorContactPage/InstructorContactPage.js
import React from "react";
import "./InstructorContactPage.css"; // Create this file for styling

const InstructorContactPage = () => {
  // Sample data (replace with actual data from your application)
  const instructorsData = [
    { name: "Dr. John Doe", email: "john.doe@example.com" },
    { name: "Prof. Jane Smith", email: "jane.smith@example.com" },
    { name: "Dr. Michael Johnson", email: "michael.johnson@example.com" },
  ];

  const sendEmail = (instructor) => {
    // Simulate sending an email (Replace with actual email sending logic)
    console.log(`Sending email to ${instructor.name} at ${instructor.email}`);
    alert(`Email sent to ${instructor.name} at ${instructor.email}`);
  };

  return (
    
    <div className="instructor-contact-container">
      <h2 className="heading">Instructor Contact</h2>
      <p className="overview">List of instructors and contact details.</p>
      <div className="mega-container">

      {/* Instructors List */}
      <ul className="instructors-list">
        {instructorsData.map((instructor, index) => (
          <li key={index}>
            <strong>{instructor.name}</strong>
            <br />
            Email: {instructor.email}
            <button onClick={() => sendEmail(instructor)}>Send Email</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default InstructorContactPage;
