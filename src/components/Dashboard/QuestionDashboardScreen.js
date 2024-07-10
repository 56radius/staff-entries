import React from "react";
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
    const departments = [
        { id: 1, name: "Cleaning Service", available: true },
        { id: 2, name: "Lecturer Service", available: true },
        { id: 3, name: "Administration", available: false },
        { id: 4, name: "Maintenance", available: true },
        { id: 5, name: "Security", available: false },
        { id: 6, name: "Library Service", available: true },
        { id: 7, name: "IT Support", available: false }
    ];

    return (
        <div className="container">
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <button style={{ borderWidth: 0, marginLeft: "30px", background: "#fff" }} className="logo d-flex align-items-center">
                        <span className="d-none d-lg-block"> Staff Entry </span>{" "}
                    </button>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <span className="d-none d-md-block dropdown-toggle ps-2"> Merit Mohammed </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6> Merit Mohammed </h6>
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
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pagetitle">
                                <h1>
                                    <span style={{ color: "green" }}> User's </span> Dashboard
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
                            <h2 className="mt-5 mb-4">Available Departments/Services</h2>
                            <div className="row">
                                {departments.map(department => (
                                    <div key={department.id} className="col-md-4 mb-4">
                                        <div className={`card ${department.available ? 'clickable-card' : 'non-clickable-card'}`} style={{ cursor: department.available ? 'pointer' : 'not-allowed', opacity: department.available ? 1 : 0.5 }}>
                                            <div className="card-body">
                                                <h5 className="card-title">{department.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default QuestionDashboardScreen;
