import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleLogout = () => {
        actions.logout();
        navigate("/");
    };

	const isLoggedIn = !!localStorage.getItem("token");

	return (
		<div className="d-flex flex-column justify-content-center align-items-center vh-100">
			<div>
				<h1 className="title text-dark">Hello,</h1>
				<h1 className="title text-dark fw-bold">welcome!</h1>
			</div>
			<div className="mt-5">
				{isLoggedIn ? (
					<div>
						<Link to="/private">
							<button className="btn btn-outline-dark me-3">Go to my profile</button>
						</Link>
						<button onClick={handleLogout} className="btn btn-outline-danger me-3">Logout</button>
					</div>

				) : (
					<div>
						<Link to="/login">
							<button className="btn btn-primary mx-5">Log In</button>
						</Link>
						<Link to="/signup">
							<button className="btn btn-secondary mx-5">Register</button>
						</Link>
					</div>
				)}
			</div>

		</div>
	);
};
