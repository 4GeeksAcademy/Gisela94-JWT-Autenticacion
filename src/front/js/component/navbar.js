import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation(); 
    const navigate = useNavigate();
    
    const handleLogout = () => {
        actions.logout();
        navigate("/");
    };

    // Do not render the Navbar if the path is "/"
    if (location.pathname === "/") {
        return null;
    }

    // Check if the user is logged in based on the presence of a token
    const isLoggedIn = !!localStorage.getItem("token");

    return (
        <nav className="navbar navbar-dark">
            <div className="container">
                <Link to="/">
                    <button className="btn btn-outline-dark me-3">Home</button>
                </Link>
                <div className="d-flex justify-content-end">
                    {isLoggedIn ? (
                        // Show profile and logout buttons if logged in and not on "/login"
                        location.pathname !== "/login" && (
                            <div>
                                <Link to="/private">
                                    <button className="btn btn-outline-dark me-3">Go to my profile</button>
                                </Link>
                                <button onClick={handleLogout} className="btn btn-outline-danger me-3">Logout</button>
                            </div>
                        )
                    ) : (
                        // Show login and signup buttons if not logged in
                        <div>
                            <Link to="/login">
                                <button className="btn btn-outline-dark me-3">Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className="btn btn-outline-danger me-3">Signup</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
