import React, { useState } from "react";
import "../../assets/dashboard/assets/css/style.css";
import "../../assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/dashboard/assets/vendor/quill/quill.snow.css";
import "../../assets/dashboard/assets/vendor/quill/quill.bubble.css";
import "../../assets/dashboard/assets/vendor/remixicon/remixicon.css";
import "../../assets/dashboard/assets/vendor/simple-datatables/style.css";
function QuestionDashboardScreen() {
    const [answers, setAnswers] = useState({});

    const questions = [
        {
            id: 1,
            question: "What is your name?",
            options: ["John", "Jane", "Other"]
        },
        {
            id: 2,
            question: "Which department do you belong to?",
            options: ["Administration", "Faculty", "Staff"]
        },
        {
            id: 3,
            question: "How long have you been working at the university?",
            options: ["Less than 1 year", "1-5 years", "More than 5 years"]
        }
    ];

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    return (
        <div className="container">
            <h2 className="mt-5 mb-4">Question Dashboard</h2>
            <form>
                {questions.map(question => (
                    <div key={question.id} className="mb-4">
                        <p className="mb-2">{question.question}</p>
                        <div className="d-flex flex-column">
                            {question.options.map(option => (
                                <label key={option} className="radio-label mb-2">
                                    <input
                                        type="radio"
                                        name={`question_${question.id}`}
                                        value={option}
                                        onChange={() => handleAnswerChange(question.id, option)}
                                    />
                                    <span className="ml-2">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-4">
                <h3>Answers:</h3>
                <ul>
                    {Object.keys(answers).map(questionId => (
                        <li key={questionId}>
                            Question {questionId}: {answers[questionId]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default QuestionDashboardScreen;
