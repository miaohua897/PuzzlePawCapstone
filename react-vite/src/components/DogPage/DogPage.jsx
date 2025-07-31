import { useEffect, useState,useRef } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import AddNewDogPage from '../AddNewDogPage';
import SideBarDogPage from './SideBarDogPage';
import DogShowCase from './DogShowCase';
import {thunkLoadDogs} from '../../redux/dog';
import {useSetDogId} from '../../context/SetDogId'; 
import SearchBar from '../SearchBar';
import MovingImages from "../MovingImages";
import './DogPage.css'
import './DogPageMedia.css'

function DogPage(){
  
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const ulRef = useRef();
    const sessionUser = useSelector((state) => state.session.user);
    const dogs = useSelector(state=>state.dog.dog);
    const [showMenu, setShowMenu] = useState(false);
    const {selectedDogId} =  useSetDogId();
   
    useEffect(()=>{
            dispatch(thunkLoadDogs())
    },[dispatch])

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

    if(!sessionUser) return navigator('/');

    let dogsArr=[];
    if(dogs) {
        dogsArr = Object.values(dogs);
    }
    let existDog;
    let showDog;
    if(dogs)  {
        existDog= dogs[selectedDogId]
        showDog =  dogsArr[0];
    }

    const closeMenu = () => setShowMenu(false);
   
    return (
      <div  className="dog-page-wrapper">
         <div className="dog-page-container" > 
            <div className="dog-page-title-wrapper">
                  <div className="dog-cards-title-icon">
                          <h1 id='beloved-dog-title'>My Beloved Dogs</h1>
                        <OpenModalButton 
                        buttonText="+"
                        onButtonClick={closeMenu}
                        className='dog-add-new-dog'
                        modalComponent={<AddNewDogPage />}/>

                  </div>
              
                    <SearchBar />
            </div>
            <SideBarDogPage dogsArr ={dogsArr} />       
            <DogShowCase dogsArr ={dogsArr}  existDog={existDog} showDog={showDog} dogs={dogs} />
        </div>
            <MovingImages  />
      </div>      
    )
}
export default DogPage;