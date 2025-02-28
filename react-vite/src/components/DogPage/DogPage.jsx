import { useEffect, useState,useRef } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {thunkLoadDogs} from '../../redux/dog';
import OpenModalButton from '../OpenModalButton';
import AddNewDogPage from '../AddNewDogPage';
import { FaArrowRight,FaArrowLeft} from 'react-icons/fa';
import './DogPage.css'
import {useSideBarStatus} from '../../context/SideBar';
import DogCards from './DogCards';
import {useSetDogId} from '../../context/SetDogId'; 

function DogPage(){
    const {setIsSideBarOpen}=useSideBarStatus();
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const ulRef = useRef();
    const sessionUser = useSelector((state) => state.session.user);
    const dogs = useSelector(state=>state.dog.dog);
    const [showMenu, setShowMenu] = useState(false);
    // const [selectedDog,setSelectedDog] = useState(-1);
    const [sidebar, setSideBar] = useState(false);
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
              
    const navToPhotoPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/photo') 
    }

    const closeMenu = () => setShowMenu(false);
   
    const handleUnfinishedFeatures=()=>{
            window.alert('The feature coming soon ^.^')
        }

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
          

            <div className="sidebar-button-container">
            <button className='sidebar-button' onClick={()=>{
                setSideBar(true)
                setIsSideBarOpen(true)
                }} >
            <FaArrowLeft color='blue'/>
            </button>
            </div>        
            <div className="sidebar"
            style={sidebar ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }}
            >
                
                <div className="fixed-top">
                <div className="sidebar-header">
            <button className="arrow-button" onClick={() => {
                setSideBar(false)
                setIsSideBarOpen(false)
                }}>
               <FaArrowRight />
            </button>
            </div>
            <h1 id='beloved-dog-sidebar'>Beloved Dogs</h1>
            <div className="dog-page-nav-button">
                <div>
                <button id='dog-page-dog-button'>dogs</button>
                <button onClick={handleUnfinishedFeatures}>notes</button>
                </div>
                <div>
                <button onClick ={navToPhotoPage}>photos</button>
                <button onClick={handleUnfinishedFeatures} >records</button>
                </div> 
            </div>                    
                </div>
          <div className="scrollable">
          <DogCards  dogsArr={dogsArr} />
          {/* {dogsArr.length !==0?
                      dogsArr.map((dog,index)=>{
                        return (
                            <div  key={index} >

                          <div className='sidebar-dog-info-dogpage'  onClick={()=>setSelectedId(dog.id)}  >
                          <DogCards  dogsArr={dogsArr} />
                            <img src={dog.image_url} style={{width:50,height:50}}></img>
                            <p id='sidebar-dog-info-dog-name'>{dog.dog_name}</p>
                          </div>
                          <div className="sidebar-dog-records">
                          <p>
                            🧰 this is a note place
                          </p>
                          <p>
                            🧰 this is a training record place
                          </p>
                          <p>
                            🧰 this is a health record place
                          </p>
                          <p>
                            🧰 this is a bahavior record place
                          </p>
                          </div>
                          </div>

                        )
                      })
                      :null
                      } */}
          </div>
          
            </div>

             <div>
            {
                dogsArr.length !== 0?
                existDog?
                <div className="showcase-container" onClick={() => {
                    setSideBar(false)
                    setIsSideBarOpen(false)
                }}>
                
                <div className="dog-info-container">
                <div className="showcase-dog-img-container">
                <img src={dogs[selectedDogId].image_url} className="dog-info-image" />
                </div>
                <div className="dog-info">
                <p id='showcase-info-dog-name'>{dogs[selectedDogId].dog_name}</p>
                <div className="dog-basic-info">
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Age: 
                    </p>
                    <p id='dog-basic-info-text' >{dogs[selectedDogId].age}</p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Weight: 
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedDogId].weight}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Breed:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedDogId].breed_name}
                    </p>
                </div>

                </div>
          
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Bio:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedDogId].description}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Medical/Allergies:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedDogId].medical_allergies}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Owner:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedDogId].owner.username}
                    </p>
                </div>

                </div>          
                </div>
                </div>
                :
                <div className="showcase-container" onClick={() => {
                    setSideBar(false)
                    setIsSideBarOpen(false)
                    }}>
                <h1>My Beloved Dogs</h1>
                <div className="dog-info-container">
                <div className="showcase-dog-img-container">
                <img src={showDog.image_url} className="dog-info-image" />
                </div>
                <div className="dog-info">
                <p id='showcase-info-dog-name'>{showDog.dog_name}</p>   
                <div className="dog-basic-info">
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Age: 
                    </p>
                    <p id='dog-basic-info-text' >{showDog.age}</p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Weight: 
                    </p>
                    <p id='dog-basic-info-text' >
                        {showDog.weight}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Breed:
                    </p>
                    <p id='dog-basic-info-text' >
                        {showDog.breed_name}
                    </p>
                </div>

                </div>

                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Bio:
                    </p>
                    <p id='dog-basic-info-text' >
                        {showDog.description}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Medical/Allergies:
                    </p>
                    <p id='dog-basic-info-text' >
                        {showDog.medical_allergies}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Owner:
                    </p>
                    <p id='dog-basic-info-text' >
                        {showDog.owner.username}
                    </p>
                </div>
            
                </div>          
                </div>
                </div>
                :<h2>add your first dog</h2>
                

            }
        </div>
        <p></p>
        {/* <DogCards  dogsArr={dogsArr} /> */}
       

        </div>
       
    )
}
export default DogPage;