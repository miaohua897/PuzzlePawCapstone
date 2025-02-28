import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import * as sessionActions from '../../redux/session';
import { useModal } from "../../context/Modal";
import {useSideBarStatus} from '../../context/SideBar';
import './Navigation.css';

function ProfileButton() {
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();
  const {closeModal} = useModal()
  const {isSideBarOpen,setIsSideBarOpen}=useSideBarStatus();

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
    setIsSideBarOpen(false);
  };

  const navToDogPage=(e)=>{
    e.preventDefault()
    navigator('/dog')
  }

  const handleDemoUser=(e)=>{
    e.preventDefault()
    return dispatch(
      sessionActions.thunkLogin({
        email: 'demo@aa.io',
        password: 'password',
      })
    ).then(closeModal);
  }

  return (
    <>
     <div className="profile-button-container" style={{marginRight:isSideBarOpen?250:30}}>
     <button 
      className='fa-user-circle-button'
      onClick={toggleMenu}>
        <FaUserCircle  />
      </button>

     </div>
   
      {showMenu && (
        <ul className={"profile-dropdown"} ref={ulRef} style={{marginRight:isSideBarOpen?250:30}}>
          {user ? (
            <>
              <li id='profile-dropdown-li'>{user.username}</li>
              <li id='profile-dropdown-li'>{user.email}</li>
              <li id='profile-dropdown-li'>
                <button id='profile-dropdown-li-button'  onClick={logout}>Log Out</button>
              </li>
              <li id='profile-dropdown-li'> 
                <button id='profile-dropdown-li-button'  onClick={navToDogPage}>Dog page</button>
              </li>
            </>
          ) : (
            <div className="login-signup-container">
              <button id='demo-user-button'  onClick={handleDemoUser}>Demo User</button>
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
            </div>
          )}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
