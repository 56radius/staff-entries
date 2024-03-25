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

function UploadResumeScreen() {
    return (
        <div className="container">
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <button style={{ borderWidth: 0, marginLeft: "30px", background: "#fff" }} className="logo d-flex align-items-center">
                        <span className="d-none d-lg-block"> Staff Entry </span>
                    </button>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        {/* Other nav items */}
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <span className="d-none d-md-block dropdown-toggle ps-2"> Merit Mohammed </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6> Merit Mohammed </h6>
                                    <span>Web Designer</span>
                                </li>
                                {/* Profile options */}
                                <li><a className="dropdown-item d-flex align-items-center" href="users-profile.html"><i className="bi bi-person"></i><span>My Profile</span></a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item d-flex align-items-center" href="users-profile.html"><i className="bi bi-gear"></i><span>Account Settings</span></a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item d-flex align-items-center" href="pages-faq.html"><i className="bi bi-question-circle"></i><span>Need Help?</span></a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item d-flex align-items-center"><i className="bi bi-box-arrow-right"></i><span>Sign Out</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <Sidebar />

            {/* Content */}
            <main id="main" className="main">
                <section className="section dashboard">
                    {/* Upload Button */}
                    <div className="upload-container">
                        <h2>Please upload your resume here</h2>
                        <div className="upload-section">
                            <label htmlFor="resume-upload" className="upload-label">
                                <input type="file" id="resume-upload" accept=".pdf,.doc,.docx" className="visually-hidden" />
                                <span className="btn btn-primary">Choose File</span>
                            </label>
                            <p>Only PDF or DOC files are allowed</p>
                        </div>
                        <button className="btn btn-primary upload-btn">Upload</button>
                    </div>

                    {/* List of Past Resumes */}
                    <div className="past-resumes">
                        <h2>Past Resumes</h2>
                        <ul className="resume-list">
                            <li>Resume 1</li>
                            <li>Resume 2</li>
                            {/* Add dynamic rendering of past resumes here */}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default UploadResumeScreen;
