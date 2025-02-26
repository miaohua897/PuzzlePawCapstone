import { useEffect, useState,useRef } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {thunkLoadDogs} from '../../redux/dog';
import DeleteDogPage from '../DeleteDogPage';
import OpenModalButton from '../OpenModalButton';
import AddNewDogPage from '../AddNewDogPage';
import UpdateDogPage from '../UpdateDogPage';
import './DogPage.css'

function DogPage(){
    
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const ulRef = useRef();

  
    const sessionUser = useSelector((state) => state.session.user);
    const dogs = useSelector(state=>state.dog.dog);


    const [selectedId,setSelectedId] = useState(1)
    const [showMenu, setShowMenu] = useState(false);
    const [selectedDog,setSelectedDog] = useState(-1);
   

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
        existDog= dogs[selectedId]
        showDog =  dogsArr[0];
    }
              
    const navToPhotoPage=(e)=>{
        e.preventDefault()
        navigator('/photo') 
    }

    const closeMenu = () => setShowMenu(false);
   
    const handleUnfinishedFeatures=()=>{
            window.alert('The feature coming soon ^.^')
        }

    return (
        <div className="dog-page-container">
            <div className="dog-page-nav-button">
                <button id='dog-page-dog-button'>dogs</button>
                <button onClick={handleUnfinishedFeatures}>notes</button>
                <button onClick ={navToPhotoPage}>photos</button>
                <button onClick={handleUnfinishedFeatures} >records</button>

            </div>
            <h1>My Beloved Dogs</h1>

            <OpenModalButton 
            buttonText="Add a New Dog"
            onButtonClick={closeMenu}
            className='dog-add-new-dog'
            modalComponent={<AddNewDogPage />}
/>
             <div>
            {
                dogsArr.length !== 0?
                existDog?
                <div className="showcase-container">
                
                <div className="dog-info-container">
                <div className="showcase-dog-img-container">
                <img src={dogs[selectedId].image_url} className="dog-info-image" />
                </div>
                <div className="dog-info">
                <p id='showcase-info-dog-name'>{dogs[selectedId].dog_name}</p>
                <div className="dog-basic-info">
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Age: 
                    </p>
                    <p id='dog-basic-info-text' >{dogs[selectedId].age}</p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Weight: 
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedId].weight}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Breed:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedId].breed_name}
                    </p>
                </div>

                </div>
          
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    Bio:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedId].description}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    medical/allergies:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedId].medical_allergies}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    owner:
                    </p>
                    <p id='dog-basic-info-text' >
                        {dogs[selectedId].owner.username}
                    </p>
                </div>

                </div>          
                </div>
                </div>
                :
                <div className="showcase-container">
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
                    medical/allergies:
                    </p>
                    <p id='dog-basic-info-text' >
                        {showDog.medical_allergies}
                    </p>
                </div>
                <div className="dog-basic-text">
                    <p id='dog-basic-label'>
                    owner:
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
        <div className="select-dog-container">
        {
            dogsArr.length !== 0 ?
            dogsArr.map((dog,index) =>(
                <div key={index} onClick={()=> setSelectedId(dog.id)} className="dog-card">
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
                        buttonText="Update A Dog"
                        onButtonClick={closeMenu}
                        className='photo-cards-delete'
                        modalComponent={<UpdateDogPage updateDog={dog}  />}
                                    />
                        <OpenModalButton 
                        buttonText="Delete A Dog"
                        onButtonClick={closeMenu}
                        className='photo-cards-delete'
                        modalComponent={<DeleteDogPage dog_id={dog.id}  />}
                                    />
                     </div>
                     :null
                    }
                </div>
            )):null
        }
        </div>

        </div>
       
    )
}
export default DogPage;