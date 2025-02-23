import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import './Navigation.css';

function ProfileButton() {
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
  };

  const navToDogPage=(e)=>{
    e.preventDefault()
    navigator('/dog')
  }

  return (
    <>
     <div className="profile-button-container">
     <button 
      className='fa-user-circle-button'
      onClick={toggleMenu}>
        <FaUserCircle  />
      </button>

     </div>
   
      {showMenu && (
        <ul className={"profile-dropdown"} ref={ulRef}>
          {user ? (
            <>
              <li id='profile-dropdown-li'>{user.username}</li>
              <li id='profile-dropdown-li'>{user.email}</li>
              <li id='profile-dropdown-li'>
                <button id='profile-dropdown-li-button'  onClick={logout}>Log Out</button>
              </li>
              <li id='profile-dropdown-li'> 
                <button id='profile-dropdown-li-button'  onClick={navToDogPage}>got to dog page</button>
              </li>
            </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </>
          )}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
