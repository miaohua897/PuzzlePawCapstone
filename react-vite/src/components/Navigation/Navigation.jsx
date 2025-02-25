import { NavLink, useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate()
  return (
    <ul className="nav-container">
      <li>
        <NavLink to="/">
        <img src="/puzzlePawIcon.png" style={{width:50,height:50}}/>
        </NavLink>
      </li>
      {
        sessionUser?
        <li>
        <button className='go-see-dog-button'  onClick={()=>navigate('/dog')}>go to see your dogs</button>
      </li>
      :null
      }
    
      <li>
        <ProfileButton  />
      </li>
    </ul>
  );
}

export default Navigation;
