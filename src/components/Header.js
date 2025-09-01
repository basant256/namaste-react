import { Logo_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo_URL} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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