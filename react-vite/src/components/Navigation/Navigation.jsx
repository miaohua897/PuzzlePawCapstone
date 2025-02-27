import { useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import "./Navigation.css";
import {useSideBarStatus} from '../../context/SideBar';

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate()
  const {isSideBarOpen,setIsSideBarOpen} = useSideBarStatus();
  return (
    <ul className="nav-container" >
      <li>
  
        <img src="/puzzlePawIcon.png" style={{width:50,height:50}} onClick={()=>{
          navigate('/')
          setIsSideBarOpen(false)
        }}/>
     
      </li>
      
  
      {
        sessionUser?
        <li>
        <button className='go-see-dog-button' style={{marginRight:isSideBarOpen?250:30}}  onClick={()=>navigate('/dog')}>go to see your dogs</button>
        </li>
      :null
      }
    
      <li >
        <ProfileButton  />
      </li>

      
     
    </ul>
  );
}

export default Navigation;
