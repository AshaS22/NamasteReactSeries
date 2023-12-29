import Logo from "./../../assets/chef_food.png";

const Header = () => (
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
      </ul>
    </div>
  </div>
);

export default Header;
