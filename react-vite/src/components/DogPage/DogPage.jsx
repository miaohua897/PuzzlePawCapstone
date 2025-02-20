import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {thunkLoadDogs} from '../../redux/dog';
import './DogPage.css'

function DogPage(){
    const dispatch = useDispatch()
    useEffect(()=>{
            dispatch(thunkLoadDogs())
    },[dispatch])

    const dogs = useSelector(state=>state.dog.dog);
    let dogsArr=[];
    let firstDog;
    if(dogs) {
        dogsArr = Object.values(dogs);
        firstDog = dogsArr[0];
    }
    // console.log('i am from dog page',dogs,dogsArr,firstDog) 
   
    return (
        <div>
             <div>
            {
                dogsArr.length !== 0 ?
                <div>
                <p>Happy Doy</p>
                <h3>{firstDog.dog_name}</h3>
                <img src={firstDog.image_url} className="dog-info-image" />
                <p>{firstDog.age}</p>
                <p>{firstDog.birth_date}</p>
                <p>{firstDog.color}</p>
                <p>{firstDog.weight}</p>
                <p>{firstDog.breed_name}</p>
                <p>{firstDog.description}</p>
                <p>{firstDog.gender}</p>
                <p>{firstDog.medical_allergies}</p>
                <p>{firstDog.owner.username}</p>
                </div>
                :<h2>add your first dog</h2>
            }
        </div>
        <div>
        {
            dogsArr.length !== 0 ?
            dogsArr.map((dog,index) =>(
                <div key={index}>
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