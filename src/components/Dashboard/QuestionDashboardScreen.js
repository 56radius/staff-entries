import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/dashboard/assets/css/style.css";
import "../../assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/dashboard/assets/vendor/quill/quill.snow.css";
import "../../assets/dashboard/assets/vendor/quill/quill.bubble.css";
import "../../assets/dashboard/assets/vendor/remixicon/remixicon.css";
import "../../assets/dashboard/assets/vendor/simple-datatables/style.css";

import Sidebar from "../../elements/Sidebar";

function QuestionDashboardScreen() {
    const navigate = useNavigate();

    const departments = [
        { id: 1, name: "Cleaning Service", available: true },
        { id: 2, name: "Lecturer Service", available: true },
        { id: 3, name: "IT Support", available: false },
        { id: 4, name: "Library Service", available: true },
        { id: 5, name: "Cafeteria Service", available: false },
        { id: 6, name: "Security Service", available: true },
        { id: 7, name: "Maintenance Service", available: true },
        { id: 8, name: "Transportation Service", available: false },
        { id: 9, name: "Medical Service", available: true },
        { id: 10, name: "Student Counseling", available: true },
        { id: 11, name: "Academic Advising", available: true },
        { id: 12, name: "Financial Aid", available: false },
        { id: 13, name: "Career Services", available: true },
        { id: 14, name: "Alumni Relations", available: true },
        { id: 15, name: "IT Help Desk", available: false },
        { id: 16, name: "Housing Services", available: true },
        { id: 17, name: "Sports Facilities", available: true },
        { id: 18, name: "Recreational Activities", available: false },
        { id: 19, name: "Event Management", available: true },
        { id: 20, name: "Research Support", available: true },
    ];

    const handleServiceClick = (serviceId) => {
        navigate(`/assessment/${serviceId}`);
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
                    <h1>
                        <span style={{ color: "green" }}>User's</span> Dashboard
                    </h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        {departments.map((department) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={department.id}>
                                <div className={`card info-card ${department.available ? 'available' : 'unavailable'}`}>
                                    <div className="card-body">
                                        <h5 className="card-title">{department.name}</h5>
                                        <div className="d-flex align-items-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className={`bi ${department.available ? 'bi-check-circle' : 'bi-x-circle'}`} style={{ color: department.available ? 'green' : 'red' }}></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>{department.available ? 'Available' : 'Unavailable'}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {department.available && (
                                        <div className="card-footer">
                                            <button className="btn btn-primary" onClick={() => handleServiceClick(department.id)}>Access Service</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default QuestionDashboardScreen;
