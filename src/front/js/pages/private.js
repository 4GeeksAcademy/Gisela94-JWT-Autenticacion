import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const Private = () => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();
    const handleLogout = () => {
        actions.logout();
        navigate("/");
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1>Enhorabuena por lograr acceder a la "private space"</h1>
            <p>PROFE HE TENIDO UN PORBLEMA EN EL REGISTRO, SE ME REGISTRA EL NUEVO usuario en el  DATABASE PERO NO ME ENTRA EN EL PRIVADO, ME DA UN ERROR DE CORS?... </p>
            <div>
                <Link to="/">
                    <button className="btn btn-outline-dark me-3">Go Back Home</button>
                </Link>
                <button onClick={handleLogout} className="btn btn-outline-danger me-3">Logout</button>
            </div>

        </div>
    )
}

export default Private;