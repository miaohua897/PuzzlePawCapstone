import {useSideBarStatus} from '../../context/SideBar';
import { FaArrowRight} from 'react-icons/fa';
import  DogBasicInfo from '../DogBasicInfo';
import LargePhotoPage from './LargePhotoPage';
import OpenModalButton from '../OpenModalButton';
import { useNavigate } from 'react-router-dom';

function SideBarPhoto({dogs_arr,photos_arr,closeMenu}){

    const navigator = useNavigate();

    const {isSideBarOpen,setIsSideBarOpen} = useSideBarStatus();
     
    const navToDogPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/dog')
    }
    const handleUnfinishedFeatures=()=>{
        window.alert('The feature coming soon ^.^')
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
              <button onClick={handleUnfinishedFeatures}>notes</button>
              </div>
              <div>
              <button id='photo-page-photo-button' >photos</button>
              <button onClick={handleUnfinishedFeatures}>records</button>
              </div> 
          </div>
       </div>
      <div className="scrollable">

      {dogs_arr.length !==0?
      dogs_arr.map((dog,index)=>{
        return (
          <div className='sidebar-dog-info'  key={index}    >
            <img 
          
            src={dog.image_url} style={{width:50,height:50}}></img>
            {/* <p>{dog.dog_name}</p> */}
            <OpenModalButton 
            buttonText={dog.dog_name}
            onButtonClick={closeMenu}
            className='sidebar-dog-name-button'
            modalComponent={<DogBasicInfo dog={dog}/>}/>
          </div>
        )
      })
      :null
      }
       <p id='see-large-photos'>Larger Photos</p>
       <div >
        {
          photos_arr !==0 ?
          photos_arr.map((photo,index)=>{
            return (
              <div key ={index}  className="sidebar-photo-info">
                 <img src={photo.image_url} style={{width:50,height:50}} />
                 <OpenModalButton 
                buttonText={photo.title}
                onButtonClick={closeMenu}
                className='sidebar-photo-name-button'
                modalComponent={<LargePhotoPage photo={photo}/>}/>
              </div>)
          })
          : null}
      </div>  
    </div>
   </div>
    )
}
export default SideBarPhoto;