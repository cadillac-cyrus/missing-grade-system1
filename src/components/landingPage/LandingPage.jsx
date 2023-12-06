import React from "react";
import "./landingpage.css";
function LandingPage() {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Welcome to the Missing Grade Reporting System
        </h1>
        <p className="description">
          This system is designed to help students track and report grades that
          are not recorded in their academic profiles. Use the navigation links
          to explore the features.
        </p>

        <div className="features">
          <div className="feature-card">
            <h2 className="feature-title">View Your Grades</h2>
            <p className="feature-description">
              Get an overview of your current grades and track your academic
              performance.
            </p>
          </div>

          <div className="feature-card">
            <h2 className="feature-title">Report Missing Grades</h2>
            <p className="feature-description">
              Easily report any missing grades using the intuitive Missing Grade
              Form.
            </p>
          </div>

          <div className="feature-card">
            <h2 className="feature-title">Connect with Instructors</h2>
            <p className="feature-description">
              Access contact details of your instructors and communicate with
              them directly.
            </p>
          </div>
        </div>

        {/* Placeholder for more sections/pages */}
      </div>
    </>
  );
}

export default LandingPage;
