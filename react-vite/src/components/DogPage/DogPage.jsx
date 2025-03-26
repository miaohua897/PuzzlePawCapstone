import { useEffect, useState,useRef } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import AddNewDogPage from '../AddNewDogPage';
import SideBarDogPage from './SideBarDogPage';
import DogShowCase from './DogShowCase';
import {thunkLoadDogs} from '../../redux/dog';
import {useSetDogId} from '../../context/SetDogId'; 
import {useSideBarStatus} from '../../context/SideBar';
import {FaArrowLeft} from 'react-icons/fa';
import SearchBar from '../SearchBar';
// import  FriendList from '../FriendList';
import './DogPage.css'

function DogPage(){
  
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const ulRef = useRef();

    const sessionUser = useSelector((state) => state.session.user);
    const dogs = useSelector(state=>state.dog.dog);

    const [showMenu, setShowMenu] = useState(false);
    const {selectedDogId} =  useSetDogId();
    const {setIsSideBarOpen}=useSideBarStatus();
   
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
        <div className="dog-page-container" > 
            <div className="dog-cards-title-icon">
                    <h1 id='beloved-dog-title'>My Beloved Dogs</h1>
                        <OpenModalButton 
                        buttonText="+"
                        onButtonClick={closeMenu}
                        className='dog-add-new-dog'
                        modalComponent={<AddNewDogPage />}/>
            </div>
            {/* <  FriendList /> */}
            <SearchBar />
            <button onClick={()=>navigator('/friendsnote')}>friends notes</button>
        
            <div className="sidebar-button-container">
                <button className='sidebar-button' onClick={()=>{
                    setIsSideBarOpen(true)
                    }} >
                <FaArrowLeft color='darkblue'/>
                </button>
            </div>   
            <SideBarDogPage dogsArr ={dogsArr} />       
            <DogShowCase dogsArr ={dogsArr}  existDog={existDog} showDog={showDog} dogs={dogs} />
        </div>
       
    )
}
export default DogPage;