import React, { useState, useEffect } from "react";
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

function NotificationScreen() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications from API or set hardcoded data
        const fetchedNotifications = [
            { id: 1, message: "Your application for the Software Engineer role has been accepted.", status: "accepted" },
            { id: 2, message: "Your application for the Designer role is still under review.", status: "pending" },
            { id: 3, message: "Your application for the Product Manager role has been rejected.", status: "rejected" },
        ];
        setNotifications(fetchedNotifications);
    }, []);

    const renderNotificationStatus = (status) => {
        switch (status) {
            case "accepted":
                return <span className="badge bg-success">Accepted</span>;
            case "pending":
                return <span className="badge bg-warning">Pending</span>;
            case "rejected":
                return <span className="badge bg-danger">Rejected</span>;
            default:
                return <span className="badge bg-secondary">Unknown</span>;
        }
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
                        <span style={{ color: "green" }}>User's</span> Notification
                    </h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active"> Notification </li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Notifications</h5>
                                    <div className="list-group">
                                        {notifications.map((notification) => (
                                            <div key={notification.id} className="list-group-item">
                                                <p>{notification.message}</p>
                                                {renderNotificationStatus(notification.status)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default NotificationScreen;
