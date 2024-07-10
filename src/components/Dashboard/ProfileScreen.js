import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
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
                <nav className="nav nav-pills flex-column flex-sm-row">
                    <NavLink to="/profile" className="flex-sm-fill text-sm-center nav-link">Overview</NavLink>
                    <NavLink to="/profile/edit" className="flex-sm-fill text-sm-center nav-link">Edit Profile</NavLink>
                    <NavLink to="/profile/settings" className="flex-sm-fill text-sm-center nav-link">Settings</NavLink>
                    <NavLink to="/profile/change-password" className="flex-sm-fill text-sm-center nav-link">Change Password</NavLink>
                </nav>

                <Routes>
                    <Route path="/" element={<ProfileOverview />} />
                    <Route path="/edit" element={<ProfileEdit />} />
                    <Route path="/settings" element={<ProfileSettings />} />
                    <Route path="/change-password" element={<ProfileChangePassword />} />
                </Routes>
            </main>
        </div>
    );
}

function ProfileOverview() {
    return (
        <div className="tab-pane fade show active profile-overview pt-3">
            <h5 className="card-title">About</h5>
            <p className="small fst-italic">Web designer, full-stack developer, and a tech enthusiast.</p>
            <h5 className="card-title">Profile Details</h5>
            <div className="row">
                <div className="col-lg-3 col-md-4 label">Full Name</div>
                <div className="col-lg-9 col-md-8">Merit Mohammed</div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 label">Company</div>
                <div className="col-lg-9 col-md-8">Tech Solutions Inc.</div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 label">Job</div>
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
    );
}

function ProfileEdit() {
    return (
        <div className="tab-pane fade pt-3">
            <form>
                <div className="row mb-3">
                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="fullName" type="text" className="form-control" id="fullName" value="Merit Mohammed" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="company" type="text" className="form-control" id="company" value="Tech Solutions Inc." />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="job" type="text" className="form-control" id="job" value="Web Designer" />
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
    );
}

function ProfileSettings() {
    return (
        <div className="tab-pane fade pt-3">
            <form>
                <div className="row mb-3">
                    <label htmlFor="emailNotifications" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                    <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="emailNotifications" checked />
                            <label className="form-check-label" htmlFor="emailNotifications">
                                Enable
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="profileVisibility" className="col-md-4 col-lg-3 col-form-label">Profile Visibility</label>
                    <div className="col-md-8 col-lg-9">
                        <select className="form-select" id="profileVisibility">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="friends">Friends Only</option>
                        </select>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Save Settings</button>
                </div>
            </form>
        </div>
    );
}

function ProfileChangePassword() {
    return (
        <div className="tab-pane fade pt-3">
            <form>
                <div className="row mb-3">
                    <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="currentPassword" type="password" className="form-control" id="currentPassword" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="newPassword" type="password" className="form-control" id="newPassword" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                    <div className="col-md-8 col-lg-9">
                        <input name="renewPassword" type="password" className="form-control" id="renewPassword" />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Change Password</button>
                </div>
            </form>
        </div>
    );
}

export default ProfileScreen;
