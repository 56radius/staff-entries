import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../../elements/Sidebar";

// Dummy data for questions based on service ID
const questionsData = {
  1: [
    {
      question: "How satisfied are you with the cleaning service?",
      options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
    },
    {
      question: "Are there any improvements you would suggest?",
      options: ["Yes", "No"]
    },
    {
      question: "Would you recommend this service to others?",
      options: ["Definitely yes", "Probably yes", "Not sure", "Probably not", "Definitely not"]
    }
  ],
  2: [
    {
      question: "How would you rate your experience with the lecturer service?",
      options: ["Excellent", "Good", "Fair", "Poor"]
    },
    {
      question: "Do you feel adequately supported by the lecturers?",
      options: ["Yes, completely", "Somewhat", "No"]
    },
    {
      question: "What areas of improvement do you see for this service?",
      options: ["Teaching methods", "Communication", "Feedback mechanisms", "Other"]
    }
  ],
  // Add more cases for other services as needed
};

function AssessmentQuestionsScreen() {
  const { serviceId } = useParams();
  const questions = questionsData[serviceId] || [];

  // State to track selected answers
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Handle selecting an answer
  const handleSelectAnswer = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // Handle input change for name and age
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate inputs
    if (name.trim() === "" || age.trim() === "" || answers.includes(null)) {
      alert("Please fill in all fields and answer all questions.");
      return;
    }

    // Submit data (for demo, console logging)
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Answers:", answers);

    // Set submitting state or submit to backend
    setSubmitting(true);

    // Simulate submit delay (for demo)
    setTimeout(() => {
      // Clear form and reset state
      setName("");
      setAge("");
      setAnswers(Array(questions.length).fill(null));
      setSubmitting(false);
    }, 2000); // Adjust time as needed
  };

  return (
    <div className="container-fluid">
       <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <button
                        style={{ borderWidth: 0, marginLeft: "30px", background: "#fff" }}
                        className="logo d-flex align-items-center"
                    >
                        <span className="d-none d-lg-block">Staff Entry</span>
                    </button>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown pe-3">
                            <a
                                className="nav-link nav-profile d-flex align-items-center pe-0"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                <span className="d-none d-md-block dropdown-toggle ps-2">
                                    Merit Mohammed
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Merit Mohammed</h6>
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            
      {/* Sidebar component (assuming Sidebar is imported and used similarly as before) */}
       <Sidebar /> 
      
      {/* Main content section */}
      <main id="main" className="main">
        <div className="pagetitle">
          {/* Page title with dynamic serviceId */}
          <h1>Assessment Questions for Service {serviceId}</h1>
        </div>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Questions</h5>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <ul>
                      {questions.map((question, index) => (
                        <li key={index}>
                          <h6>{question.question}</h6>
                          <ul className="options-list">
                            {question.options.map((option, optionIndex) => (
                              <li key={optionIndex}>
                                <label>
                                  <input
                                    type="radio"
                                    name={`question${index}`}
                                    value={optionIndex}
                                    checked={answers[index] === optionIndex}
                                    onChange={() => handleSelectAnswer(index, optionIndex)}
                                  />
                                  {option}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Name and Age input fields */}
          <div className="row mt-4">
            <div className="col-lg-6 mb-3">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="ageInput" className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                id="ageInput"
                value={age}
                onChange={handleAgeChange}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="row mt-4">
            <div className="col-lg-12">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AssessmentQuestionsScreen;
