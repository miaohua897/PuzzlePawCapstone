import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {thunkLoadNotes} from '../../redux/note';
import {thunkLoadDogs} from '../../redux/dog';
import { useSetDogId } from "../../context/SetDogId";
import SideBarNote from './SideBarNote';
import AddNewNote from '../AddNewNote';
import UpdateNoteModal from '../UpdateNoteModal';
import DeleteNoteModal from '../DeleteNoteModal';
import OpenModalButton from '../OpenModalButton';
import {FaEdit,FaTrash} from 'react-icons/fa';
import SearchBar from "../SearchBar/SearchBar";

function NotePage(){
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const notes = useSelector(state=>state.note.note);
    const dogs = useSelector(state=>state.dog.dog);
    const sessionUser = useSelector((state) => state.session.user);
    const {selectedDogId} = useSetDogId(); 

    useEffect(()=>{
        dispatch(thunkLoadNotes())  
        dispatch(thunkLoadDogs()) 
    },[dispatch])

    if(!sessionUser) return navigator('/');
    let notesArr=[];
    let dogNotesArr=[];
    if(notes) notesArr = Object.values(notes).reverse();
    if( notesArr.length !==0) dogNotesArr = notesArr.filter(el=>el.dog_id===selectedDogId)
    let dogsArr =[];
    if(dogs) dogsArr = Object.values(dogs);


    return (
       <div>
         <div className="dog-cards-title-icon">
            {
                dogsArr.length !==0?
                <h1 id='beloved-dog-title'>My Beloved {dogsArr[selectedDogId-1].dog_name}&apos;s Records</h1>
                : <h1>Post your first dog</h1>

            }
            <OpenModalButton 
            buttonText="+"
            className='dog-add-new-dog'
            modalComponent={<AddNewNote />}/>
        </div>
        <SearchBar />
        <SideBarNote dogsArr={dogsArr}/>
        {  dogNotesArr.length !== 0?
          dogNotesArr.map((note,index)=>{
            return (
                <div key={index} className="dog-note-container">
                      <p id='note-title'>{note.title}</p>
                      <p id='note-content'>{note.content}</p>
                      <div className="note-update-delete-container">
                        <OpenModalButton 
                                buttonText= {< FaEdit/>}
                                className='note-update-icon'
                                modalComponent={<UpdateNoteModal note ={note} note_id={note.id} />}/>
                        <OpenModalButton 
                                buttonText={<FaTrash />}
                                className='note-delete-icon'
                                modalComponent={<DeleteNoteModal note_id={note.id}  />} />
            
                      </div>
                </div>
            )
          })
         :<p>your dog have no note yet</p> 
          }

       </div>
    )
}
export default NotePage;