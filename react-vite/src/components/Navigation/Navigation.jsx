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
        <img src="/puzzlePawIcon.png" style={{width:50,height:45}} onClick={()=>{
          navigate('/')
          setIsSideBarOpen(false)
        }}/>
      </li>
  
        {
          sessionUser?
          <div>
              <li>
                  <button className='go-see-dog-button' style={{marginRight:isSideBarOpen?250:30}}  onClick={()=>navigate('/dog')}>Dog Page</button> 
              </li> 
          </div>  
        :null
        }  
        <li >
          <ProfileButton  />
        </li>   
  </ul>
  );
}

export default Navigation;
