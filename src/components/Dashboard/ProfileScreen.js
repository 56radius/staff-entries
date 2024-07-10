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

function ProfileScreen() {
    return (
        <div className="container-fluid">
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <button style={{ borderWidth: 0, marginLeft: "30px", background: "#fff" }} className="logo d-flex align-items-center">
                        <span className="d-none d-lg-block">Staff Entry</span>
                    </button>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <span className="d-none d-md-block dropdown-toggle ps-2">Merit Mohammed</span>
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
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>

                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-circle" />
                                    <h2>Merit Mohammed</h2>
                                    <h3>Web Designer</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body pt-3">
                                    <ul className="nav nav-tabs nav-tabs-bordered">
                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                        </li>
                                    </ul>

                                    <div className="tab-content pt-2">
                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                            <h5 className="card-title">About</h5>
                                            <p className="small fst-italic">Web designer with 5+ years of experience in creating user-friendly and visually appealing websites.</p>
                                            <h5 className="card-title">Profile Details</h5>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Full Name</div>
                                                <div className="col-lg-9 col-md-8">Merit Mohammed</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Company</div>
                                                <div className="col-lg-9 col-md-8">Avinx Nation</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Job Title</div>
                                                <div className="col-lg-9 col-md-8">Web Designer</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Country</div>
                                                <div className="col-lg-9 col-md-8">Nigeria</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Address</div>
                                                <div className="col-lg-9 col-md-8">Lagos, Nigeria</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Phone</div>
                                                <div className="col-lg-9 col-md-8">+234 812 345 6789</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Email</div>
                                                <div className="col-lg-9 col-md-8">merit.mohammed@example.com</div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                                            <form>
                                                <div className="row mb-3">
                                                    <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <img src="https://via.placeholder.com/150" alt="Profile" />
                                                        <div className="pt-2">
                                                            <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></a>
                                                            <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" className="form-control" id="fullName" value="Merit Mohammed" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="company" type="text" className="form-control" id="company" value="Avinx Nation" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="jobTitle" className="col-md-4 col-lg-3 col-form-label">Job Title</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="jobTitle" type="text" className="form-control" id="jobTitle" value="Web Designer" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="country" type="text" className="form-control" id="country" value="Nigeria" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="address" type="text" className="form-control" id="address" value="Lagos, Nigeria" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" className="form-control" id="phone" value="+234 812 345 6789" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="email" type="email" className="form-control" id="email" value="merit.mohammed@example.com" />
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane fade pt-3" id="profile-settings">
                                            <form>
                                                <div className="row mb-3">
                                                    <label htmlFor="emailNotifications" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="emailNotifications" checked />
                                                            <label className="form-check-label" htmlFor="emailNotifications">
                                                                Receive email notifications for updates
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="accountPrivacy" className="col-md-4 col-lg-3 col-form-label">Account Privacy</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="accountPrivacy" checked />
                                                            <label className="form-check-label" htmlFor="accountPrivacy">
                                                                Keep my account private
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane fade pt-3" id="profile-change-password">
                                            <form>
                                                <div className="row mb-3">
                                                    <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="password" type="password" className="form-control" id="currentPassword" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="newpassword" type="password" className="form-control" id="newPassword" />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Change Password</button>
                                                </div>
                                            </form>
                                        </div>

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

export default ProfileScreen;
