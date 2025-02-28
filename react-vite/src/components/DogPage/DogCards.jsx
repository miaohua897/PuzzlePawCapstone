import OpenModalButton from '../OpenModalButton';
import { useState,useRef,useEffect } from "react";
import UpdateDogPage from '../UpdateDogPage';
import DeleteDogPage from '../DeleteDogPage';
import {useSetDogId} from '../../context/SetDogId'; 
import {useSideBarStatus} from '../../context/SideBar';

function DogCards({dogsArr}){
    const ulRef = useRef();
    const {setSelectedDogId} =  useSetDogId();
    const {setIsSideBarOpen}=useSideBarStatus();
      const [showMenu, setShowMenu] = useState(false);
      const [selectedDog,setSelectedDog] = useState(-1);
  

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

  return (
    <div className="select-dog-container" onClick={() =>setIsSideBarOpen(false)}>
  {
      dogsArr.length !== 0 ?
      dogsArr.map((dog,index) =>(
          <div key={index} onClick={()=> setSelectedDogId(dog.id)} className="dog-card">
              <img src={dog.image_url} className="dog-cards-image"></img>
              <p className="dog-cards-text" >{dog.dog_name}</p>
              <button onClick={
                  (e)=>{
                      e.stopPropagation(); 
                      setShowMenu(!showMenu);                   
                      setSelectedDog(dog.id)
                  }
              } id='dog-cards-options'>...</button>
              {showMenu && selectedDog ===dog.id?
               <div
               className="dog-cards-menu"
                ref={ulRef}
               >
                  <OpenModalButton 
                  buttonText="Update Dog Info"
                  onButtonClick={closeMenu}
                  className='dog-cards-delete'
                  modalComponent={<UpdateDogPage updateDog={dog}  />}
                              />
                  <OpenModalButton 
                  buttonText="Delete Dog Info"
                  onButtonClick={closeMenu}
                  className='dog-cards-delete'
                  modalComponent={<DeleteDogPage dog_id={dog.id}  />}
                              />
               </div>
               :null
              }
          </div>
      )):null
  }
  </div>

  )
}
export default DogCards;