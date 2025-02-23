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
    const [selectedDog,setSelectedDog] = useState(-1)

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


    if(!sessionUser) return <h1>log in, please</h1>;

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

    return (
        <div className="dog-page-container">
            <div className="dog-page-nav-button">
                <button>dogs</button>
                <button>notes</button>
                <button onClick ={navToPhotoPage}>photos</button>
                <button>records</button>

            </div>
             <div>
            {
                dogsArr.length !== 0?
                existDog?
                <div className="showcase-container">
                <h1>My Beloved Dogs</h1>

                <OpenModalButton 
                buttonText="Add a New Dog"
                onButtonClick={closeMenu}
                className='dog-add-new-dog'
                modalComponent={<AddNewDogPage />}
                />
                
                <div className="dog-info-container">
                <div className="showcase-dog-img-container">
                <img src={dogs[selectedId].image_url} className="dog-info-image" />
                </div>
                <div className="dog-info">
                <h3>{dogs[selectedId].dog_name}</h3>
                <div className="dog-basic-info">
                <p>{'age:  '+dogs[selectedId].age}</p>
                <p>{'weight:  '+dogs[selectedId].weight}</p>
                <p>{'breed:  '+dogs[selectedId].breed_name}</p>
                </div>
                <p className="showcase-dog-bio">{'bio:  '+dogs[selectedId].description}</p>
              
           
                {/* <p>{dogsArr[selectId].gender}</p> */}
                <p>{'medical/allergies:  '+dogs[selectedId].medical_allergies}</p>
                <p>{'owner:  '+dogs[selectedId].owner.username}</p>
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
                <h3>{showDog.dog_name}</h3>
                <div className="dog-basic-info">
                <p>{'age:  '+showDog.age}</p>
                <p>{'weight:  '+showDog.weight}</p>
                <p>{'breed:  '+showDog.breed_name}</p>
                </div>
                <p className="showcase-dog-bio">{'bio:  '+showDog.description}</p>
              
           
                {/* <p>{dogsArr[selectId].gender}</p> */}
                <p>{'medical/allergies:  '+showDog.medical_allergies}</p>
                <p>{'owner:  '+showDog.owner.username}</p>
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
                        buttonText="Update A Photo"
                        onButtonClick={closeMenu}
                        className='photo-cards-delete'
                        modalComponent={<UpdateDogPage updateDog={dog}  />}
                                    />
                        <OpenModalButton 
                        buttonText="Delete A Photo"
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