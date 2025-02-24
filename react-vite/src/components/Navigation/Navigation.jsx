import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <ul className="nav-container">
      <li>
        <NavLink to="/">
        <img src="/puzzlePawIcon.png" style={{width:50,height:50}}/>
        </NavLink>
      </li>

      <li>
        <ProfileButton  />
      </li>
    </ul>
  );
}

export default Navigation;
