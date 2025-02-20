import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {thunkLoadDogs} from '../../redux/dog';
import './DogPage.css'

function DogPage(){
    const dispatch = useDispatch()
    const [selectId,setSelectId] = useState(0)
    useEffect(()=>{
            dispatch(thunkLoadDogs())
    },[dispatch])

    const dogs = useSelector(state=>state.dog.dog);
    let dogsArr=[];
    if(dogs) {
        dogsArr = Object.values(dogs);
  
    }
    // console.log('i am from dog page',dogs,dogsArr,firstDog) 
   
    return (
        <div>
             <div>
            {
                dogsArr.length !== 0 ?
                <div>
                <p>Happy Doy</p>
                <h3>{dogsArr[selectId].dog_name}</h3>
                <img src={dogsArr[selectId].image_url} className="dog-info-image" />
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
                :<h2>add your first dog</h2>
            }
        </div>
        <div>
        {
            dogsArr.length !== 0 ?
            dogsArr.map((dog,index) =>(
                <div key={index} onClick={()=> setSelectId(dog.id-1)}>
                    <img src={dog.image_url} className="dog-cards-image"></img>
                    <p>{dog.dog_name}</p>
                </div>
            )):null
        }
        </div>

        </div>
       
    )
}
export default DogPage;