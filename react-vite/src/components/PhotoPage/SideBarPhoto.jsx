import { useEffect } from 'react';
import {useSideBarStatus} from '../../context/SideBar';
import  DogBasicInfo from '../DogBasicInfo';
import LargePhotoPage from './LargePhotoPage';
import OpenModalButton from '../OpenModalButton';
import { useNavigate } from 'react-router-dom';
import FriendList from '../FriendList';

function SideBarPhoto({dogs_arr,photos_arr,closeMenu}){

    const navigator = useNavigate();
    const {isSideBarOpen,setIsSideBarOpen} = useSideBarStatus();

    useEffect(()=>{
          const handleMouseMove =(e)=>{
              if(e.clientX > window.innerWidth - 200){
                  setIsSideBarOpen(true)
              }else{
                  setIsSideBarOpen(false)
              }
          }
          window.addEventListener('mousemove', handleMouseMove);
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
      },[])
     
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

    
    return (
      <div className="sidebar"
        style={isSideBarOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }} >
      <div className="fixed-top">
           <h1 id='beloved-dog-sidebar'>Beloved Dogs</h1>
          <div className="dog-page-nav-button">
              <div>
              <button onClick ={navToDogPage} >dogs</button>
              <button onClick={navToNotePage}>notes</button>
              </div>
              <div>
              <button id='photo-page-photo-button' >photos</button>
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