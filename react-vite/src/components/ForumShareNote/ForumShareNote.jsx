
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { thunkLoadAllNotes } from '../../redux/note';
import { useNavigate } from 'react-router-dom';
import AddNewFriendModal from '../AddNewFriendModal';
import OpenModalButton from '../OpenModalButton';
import SideBarFriend from './SideBarFriend';
import {thunkLoadDogs} from '../../redux/dog';
import SearchBar  from '../SearchBar';
import MovingImages from '../MovingImages';
import './ForumShareNote.css';

function ForumShareNote(){
    const dispatch = useDispatch()
    const navigator = useNavigate();
    const notes= useSelector(state=>state.note.allUserNote)
    const sessionUser= useSelector(state=>state.session.user)
    const dogs = useSelector(state=>state.dog.dog);

    useEffect(()=>{
           dispatch(thunkLoadAllNotes())
           dispatch(thunkLoadDogs())
    },[dispatch])

    if(!sessionUser) return navigator('/');
    let notesArr =[];
    let shareNotes =[];
    if(notes) notesArr = Object.values(notes).reverse();
    if(notesArr.length !==0) shareNotes = notesArr.filter(el=>el.share)
    let dogs_arr =[]
    if (dogs) dogs_arr = Object.values(dogs);

    return (
     <div className='forum-wrapper'>
              <div className='forum-container'>
            <h1 id='beloved-dog-title'>Welcome to Forum</h1>
            <SearchBar />
            {
                shareNotes.length !==0?
                shareNotes.map((note,index)=>{
                    return (
                        <div key={index} className='dog-note-container'>
                            <p id='note-title'>{note.title}</p>
                            <p id='note-content'>{note.content}</p>
                            <div className='username-add-friend'>
                            <p>Created by:  {note.user.username} / ID: {note.user.id}</p>
                            <OpenModalButton 
                            buttonText="+"
                            className='dog-add-new-dog'
                            modalComponent={<AddNewFriendModal />}/>
                            </div>
                        </div>
                    )
                })
                :null
            }
            <SideBarFriend dogs_arr={dogs_arr} />
        </div>
            <MovingImages/>
     </div>
    )
}
export default ForumShareNote