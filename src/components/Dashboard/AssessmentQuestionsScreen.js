import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../elements/Sidebar";

const questionsData = {
  1: [
    {
      question: "What are the main components of a pH-neutral cleaner, and why is it preferred for most surfaces?",
      options: [
        "Water, surfactants, and pH buffers; because it is safe for most surfaces.",
        "Acids, alkalis, and solvents; because it is more effective.",
        "Alcohol, water, and fragrances; because it smells better.",
        "Enzymes, water, and bleach; because it removes stains effectively."
      ]
    },
    {
      question: "What is the recommended dilution ratio for a typical disinfectant used in hospitals?",
      options: [
        "1:10",
        "1:100",
        "1:50",
        "1:5"
      ]
    },
    {
      question: "Which of the following cleaning agents is best suited for removing hard water stains?",
      options: [
        "Acidic cleaner",
        "Alkaline cleaner",
        "Neutral cleaner",
        "Solvent-based cleaner"
      ]
    },
    {
      question: "What is the primary purpose of a HEPA filter in vacuum cleaners?",
      options: [
        "To trap fine particles and allergens",
        "To increase suction power",
        "To reduce noise",
        "To enhance fragrance dispersion"
      ]
    },
    {
      question: "Why is microfiber preferred over cotton for cleaning cloths?",
      options: [
        "Microfiber has finer fibers that can trap more dirt and bacteria",
        "Microfiber is cheaper",
        "Cotton is too soft",
        "Microfiber dries faster"
      ]
    },
    {
      question: "What is the optimal temperature for laundering hospital linens to ensure disinfection?",
      options: [
        "160°F (71°C)",
        "120°F (49°C)",
        "140°F (60°C)",
        "180°F (82°C)"
      ]
    },
    {
      question: "How often should the filters in an HVAC system be cleaned or replaced to maintain air quality?",
      options: [
        "Every 1-3 months",
        "Every 6 months",
        "Once a year",
        "Only when visibly dirty"
      ]
    },
    {
      question: "Which method is most effective for cleaning and sanitizing a commercial kitchen floor?",
      options: [
        "Using a degreaser followed by a disinfectant",
        "Mopping with hot water only",
        "Sweeping followed by a dry mop",
        "Spraying with bleach and leaving to air dry"
      ]
    },
    {
      question: "What is the main advantage of using an enzymatic cleaner?",
      options: [
        "It breaks down organic matter such as blood and food stains",
        "It is cheaper than other cleaners",
        "It leaves a pleasant scent",
        "It is faster acting"
      ]
    },
    {
      question: "What is the appropriate action when encountering a chemical spill in a laboratory setting?",
      options: [
        "Use the appropriate spill kit and follow the MSDS guidelines",
        "Wipe it up with paper towels",
        "Leave it and report to the supervisor later",
        "Dilute with water and mop up"
      ]
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

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSelectAnswer = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() === "" || age.trim() === "" || answers.includes(null)) {
      alert("Please fill in all fields and answer all questions.");
      return;
    }

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Answers:", answers);

    setSubmitting(true);

    setTimeout(() => {
      setName("");
      setAge("");
      setAnswers(Array(questions.length).fill(null));
      setSubmitting(false);
    }, 2000);
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
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Assessment Questions Service {serviceId}</h1>
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
          <button className="btn btn-primary" onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </section>
      </main>
    </div>
  );
}

export default AssessmentQuestionsScreen;
