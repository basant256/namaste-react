import { Logo_URL } from "../utils/constants";
import { useEffect, useState } from "react";

import { Link } from "react-router";



const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("useEffect called");
    }, [isLoggedIn]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo_URL} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li>
                        <button
                            className="login-btn"
                            onClick={() => setIsLoggedIn(!isLoggedIn)}
                        >
                            {isLoggedIn ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;