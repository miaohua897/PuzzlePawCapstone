import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {thunkLoadDogs} from '../../redux/dog';

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
            {
                dogsArr.length !== 0 ?
                <div>
                <p>Happy Doy</p>
                <h3>{firstDog.dog_name}</h3>
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
    )
}
export default DogPage;