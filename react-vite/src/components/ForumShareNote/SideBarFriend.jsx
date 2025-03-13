import {useSideBarStatus} from '../../context/SideBar';
import { FaArrowRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import FriendList from '../FriendList';
import OpenModalButton from '../OpenModalButton';
import DogBasicInfo  from '../DogBasicInfo';

function SideBarFriend({dogs_arr}){

    const navigator = useNavigate();

    const {isSideBarOpen,setIsSideBarOpen} = useSideBarStatus();
     
    const navToDogPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/dog')
    }
    const navToNotePage=(e)=>{
      e.preventDefault()
      setIsSideBarOpen(false)
      navigator('/note')
    }
    const navToRecordPage=(e)=>{
      e.preventDefault()
      setIsSideBarOpen(false)
      navigator('/record')
    }

    const navToPhotoPage =(e)=>{
      e.preventDefault()
      setIsSideBarOpen(false)
      navigator('/photo')
    }

    
    return (
      <div className="sidebar"
        style={isSideBarOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }} >
      <div className="fixed-top">
          <div className="sidebar-header">
              <button className="arrow-button" onClick={() => {setIsSideBarOpen(false)}}>
                 <FaArrowRight />
              </button>
         </div>
           <h1 id='beloved-dog-sidebar'>Beloved Dogs</h1>
          <div className="dog-page-nav-button">
              <div>
              <button onClick ={navToDogPage} >dogs</button>
              <button onClick={navToNotePage}>notes</button>
              </div>
              <div>
              <button onClick={navToPhotoPage} >photos</button>
              <button onClick={navToRecordPage}>records</button>
              </div> 
          </div>
       </div>
      <div className="scrollable">
       < FriendList />
       {dogs_arr.length !==0?
      dogs_arr.map((dog,index)=>{
        return (
          <div className='sidebar-dog-info'  key={index}    >
            <img 
            src={dog.image_url} style={{width:50,height:50}}></img>
            {/* <p>{dog.dog_name}</p> */}
            <OpenModalButton 
            buttonText={dog.dog_name}
            // onButtonClick={closeMenu}
            className='sidebar-dog-name-button'
            modalComponent={<DogBasicInfo dog={dog}/>}/>
          </div>
        )
      })
      :null
      }
  
    </div>
   </div>
    )
}
export default SideBarFriend;