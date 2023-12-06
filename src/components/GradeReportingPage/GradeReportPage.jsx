// src/components/gradeReportPage/GradeReportPage.js
import React from "react";
import "./GradeReportPage.css"; // Create this file for styling

const GradeReportPage = () => {
  // Sample data (replace with actual data from your application)
  const gradeReportData = [
    { course: "Mathematics", grade: "A", semester: "Fall 2022" },
    { course: "History", grade: "B", semester: "Fall 2022" },
    { course: "Science", grade: "A-", semester: "Spring 2023" },
  ];

  return (
    <div className="grade-report-container">
      <h2 className="heading">Grade Report</h2>
      <p className="overview">
        Detailed view of all courses and respective grades.
      </p>

      {/* Filter Section (Placeholder, replace with actual filter options) */}
      <div className="filter-section">
        <label htmlFor="semester">Filter by Semester:</label>
        <select id="semester" name="semester">
          <option value="all">All Semesters</option>
          <option value="fall2022">Fall 2022</option>
          <option value="spring2023">Spring 2023</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Grade Report Section */}
      <div className="grade-report-section">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {gradeReportData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.course}</td>
                <td>{entry.grade}</td>
                <td>{entry.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradeReportPage;
