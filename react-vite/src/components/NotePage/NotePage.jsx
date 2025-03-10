import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {thunkLoadNotes} from '../../redux/note';
import {thunkLoadDogs} from '../../redux/dog';
import { useSetDogId } from "../../context/SetDogId";
import SideBarNote from './SideBarNote';
import AddNewNote from '../AddNewNote';
import UpdateNoteModal from '../UpdateNoteModal';
import DeleteNoteModal from '../DeleteNoteModal';
// import { useModal } from "../../context/Modal";
import OpenModalButton from '../OpenModalButton';
import { useSideBarStatus } from "../../context/SideBar";
import {FaArrowLeft,FaEdit,FaTrash} from 'react-icons/fa';

function NotePage(){
    const dispatch = useDispatch()
 

    const notes = useSelector(state=>state.note.note);
    const dogs = useSelector(state=>state.dog.dog);

    const {selectedDogId} = useSetDogId(); 
    const {setIsSideBarOpen} = useSideBarStatus();
    // const {closeModal} = useModal()

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
         <div className="dog-cards-title-icon">
            {
                dogsArr.length !==0?
                <h1 id='beloved-dog-title'>My Beloved {dogsArr[selectedDogId-1].dog_name}&apos;s Records</h1>
                : <h1>Post your first dog</h1>

            }
            <OpenModalButton 
            buttonText="+"
            // onButtonClick={closeModal}
            className='dog-add-new-dog'
            modalComponent={<AddNewNote />}/>
        </div>

        <div className="sidebar-button-container">
            <button className='sidebar-button' onClick={()=>{
                setIsSideBarOpen(true)
                }} >
            <FaArrowLeft color='darkblue'/>
            </button>
        </div>  
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
                                // onButtonClick={closeMenu}
                                className='note-update-icon'
                                modalComponent={<UpdateNoteModal note ={note} note_id={note.id} />}/>
                        <OpenModalButton 
                                buttonText={<FaTrash />}
                                // onButtonClick={closeMenu}
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