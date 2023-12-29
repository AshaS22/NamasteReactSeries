import Logo from "./../../assets/chef_food.png";
import { useState } from "react";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  return (
    <div className="header_container">
      <div className="logo_container">
        <img className="logo" src={Logo} alt="Logo"></img>
      </div>
      <div className="nav_container">
        <ul className="nav_items">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="login_btn"
              onClick={() => {
                loginStatus === "Login"
                  ? setLoginStatus("Logout")
                  : setLoginStatus("Login");
              }}
            >
              {loginStatus}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
