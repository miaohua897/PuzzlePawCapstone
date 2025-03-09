import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {thunkLoadNotes} from '../../redux/note';
import {thunkLoadDogs} from '../../redux/dog';
import { useSetDogId } from "../../context/SetDogId";
import SideBarNote from './SideBarNote';
import { useSideBarStatus } from "../../context/SideBar";
import {FaArrowLeft} from 'react-icons/fa';

function NotePage(){
    const dispatch = useDispatch()
    const notes = useSelector(state=>state.note.note);
    const dogs = useSelector(state=>state.dog.dog);

    const {selectedDogId} = useSetDogId(); 
    const {setIsSideBarOpen} = useSideBarStatus();
    useEffect(()=>{
        dispatch(thunkLoadNotes())  
        dispatch(thunkLoadDogs()) 
    },[dispatch])

    let notesArr=[];
    let dogNotesArr=[];
    if(notes) notesArr = Object.values(notes).reverse();
    if( notesArr.length !==0) dogNotesArr = notesArr.filter(el=>el.dog_id===selectedDogId)
    let dogsArr =[];
    if(dogs) dogsArr = Object.values(dogs);

    return (
       <div>
                     <div className="sidebar-button-container">
                        <button className='sidebar-button' onClick={()=>{
                            setIsSideBarOpen(true)
                            }} >
                        <FaArrowLeft color='darkblue'/>
                        </button>
                    </div>  
        <SideBarNote dogsArr={dogsArr}/>
        {dogNotesArr.length !== 0?
          dogNotesArr.map((note,index)=>{
            return (
                <div key={index} className="dog-note-container">
                      <p id='note-title'>{note.title}</p>
                      <p id='note-content'>{note.content}</p>
                </div>
            )
          })
         :<p>your dog have note yet</p> 
          }

       </div>
    )
}
export default NotePage;