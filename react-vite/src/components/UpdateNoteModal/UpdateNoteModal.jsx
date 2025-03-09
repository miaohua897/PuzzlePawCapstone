import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkUpdateNote } from '../../redux/note';
import { useModal } from '../../context/Modal';
import './UpdateNoteModal.css';


function UpdateNoteModal({note,note_id}){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state=>state.session.user)
    // const notes = useSelector(state=>state.note.note);
    // const note = notes[note_id];
    const noteDateObject = new Date(note.note_date);
    const formattedDate = noteDateObject.toISOString().split('T')[0];
    const [noteDate, setNoteDate] = useState(formattedDate);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [dogId, setDogId] = useState(note.dog_id);
    const [errorServer,setErrorServer] = useState({});
    const {closeModal} = useModal();

    const today = new Date().toISOString().split('T')[0];


    const handleAddNoteSubmit=async(e)=>{
        e.preventDefault()
        const data ={
            "note_date":noteDate,
            "title":title,
            'content':content,
            'dog_id':dogId,
            'user_id':sessionUser.id
        }
        console.log(data,note_id)
        const serverResponse = await dispatch(thunkUpdateNote(data,note_id))
        if (serverResponse) {
            const errorKey = Object.keys(serverResponse);
            const errorValue = Object.values(serverResponse);
            const errorArr=[]
            for (let i=0;i<errorKey.length;i++){
                errorArr.push(`${errorKey[i]}:${errorValue[i]}`)
            }
            setErrorServer({'server':errorArr});
           
          
          } else {
            closeModal();
       
          }
    }


    return (
        <div className="update-container">
           
        <form className="add-form-container" 
        onSubmit={handleAddNoteSubmit}
        >
        <h1>Add a New Photo</h1>
        <p id ='photo-required-message'>Required fields are in red and marked with an *</p>
        {errorServer.server? 
        errorServer.server.map((error,index)=>{
            return  <p  key={index}  id='photo-error'>{error}</p>
        })
        :null  
        }
        <div>
        <div className='add-input'>
        <label htmlFor ='note_date' className='add-form-lable'>note written date *</label>
        <input type='date' id='input-note-date' name='photo_date' value={noteDate}
        onChange={(e)=>setNoteDate(e.target.value)}  min='1900-01-01' max={today}></input>
        </div>
        <div className='add-input'>
            <label htmlFor ='title' className='add-form-lable'>title *</label>
            <input type='text' id='input-note-title' name='title' value={title}
            onChange={(e)=>setTitle(e.target.value)}  minLength="0" maxLength="20"></input>
        </div>
        {/* {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null} */}
        <div className='add-input' >
            <label htmlFor ='content' className='add-form-lable'>Content *</label>
            <input type='text' id='input-note-content' name='content'  value={content}
            onChange={(e)=>setContent(e.target.value)}  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='dog_id' className='add-form-lable'>DogId *</label>
            <input type='text' id='input-note-dogId' name='dogId'  value={dogId}
            onChange={(e)=>setDogId(e.target.value)}  minLength="0" maxLength="500" ></input>
        </div>
     
        </div>
        <button className='add-form-submit' >Submit</button>
        </form>
    </div>
    )
}
export default UpdateNoteModal;