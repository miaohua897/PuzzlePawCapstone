import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {thunkLoadDogs} from '../../redux/dog';
import './DogPage.css'

function DogPage(){
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [selectId,setSelectId] = useState(0)
    useEffect(()=>{
            dispatch(thunkLoadDogs())
    },[dispatch])

    const dogs = useSelector(state=>state.dog.dog);
    let dogsArr=[];
    if(dogs) {
        dogsArr = Object.values(dogs);
  
    }
    const navToPhotoPage=(e)=>{
        e.preventDefault()
        navigator('/photo') 
    }
   
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
                dogsArr.length !== 0 ?
                <div className="showcase-container">
                <h1>Happy Doy</h1>
                <div className="dog-info-container">
                <div className="showcase-dog-img-container">
                <img src={dogsArr[selectId].image_url} className="dog-info-image" />
                </div>
                <div className="dog-info">
                <h3>{dogsArr[selectId].dog_name}</h3>
                <p>{dogsArr[selectId].age}</p>
                <p>{dogsArr[selectId].birth_date}</p>
                <p>{dogsArr[selectId].color}</p>
                <p>{dogsArr[selectId].weight}</p>
                <p>{dogsArr[selectId].breed_name}</p>
                <p>{dogsArr[selectId].description}</p>
                <p>{dogsArr[selectId].gender}</p>
                <p>{dogsArr[selectId].medical_allergies}</p>
                <p>{dogsArr[selectId].owner.username}</p>
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
                <div key={index} onClick={()=> setSelectId(dog.id-1)} className="dog-card">
                    <img src={dog.image_url} className="dog-cards-image"></img>
                    <p className="dog-cards-text" >{dog.dog_name}</p>
                </div>
            )):null
        }
        </div>

        </div>
       
    )
}
export default DogPage;