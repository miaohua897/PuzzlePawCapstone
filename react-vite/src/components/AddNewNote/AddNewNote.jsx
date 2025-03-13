import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateNote } from '../../redux/note';
import { useModal } from '../../context/Modal';
import './AddNewNote.css';


function AddNewNote(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state=>state.session.user)
    const [noteDate, setNoteDate] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [share,setShare] = useState(false)
    const [dogId, setDogId] = useState(0);
    const [errorServer,setErrorServer] = useState({});
    const {closeModal} = useModal();

    const today = new Date().toISOString().split('T')[0];

    const handleAddNoteSubmit=async(e)=>{
        e.preventDefault()
        const data ={
            "note_date":noteDate,
            "title":title,
            'content':content,
            'share':share,
            'dog_id':dogId,
            'user_id':sessionUser.id
        }
      
        const serverResponse = await dispatch(thunkCreateNote(data))
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
        <input type='date' id='input-note-date' name='photo_date' 
        onChange={(e)=>setNoteDate(e.target.value)} required min='1900-01-01' max={today}></input>
        </div>
        <div>
            <input type ='checkbox' checked={share}  name='share-note' onChange={()=>setShare(!share)}></input>
            <label htmlFor='share' className='share-note' >Do you want to share the note ?</label>
        </div>
        <div className='add-input'>
            <label htmlFor ='title' className='add-form-lable'>title *</label>
            <input type='text' id='input-note-title' name='title' 
            onChange={(e)=>setTitle(e.target.value)} required  minLength="0" maxLength="20"></input>
        </div>
        {/* {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null} */}
        <div className='add-input' >
            <label htmlFor ='content' className='add-form-lable'>Content *</label>
            <input type='text' id='input-note-content' name='content'  
            onChange={(e)=>setContent(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='dog_id' className='add-form-lable'>DogId *</label>
            <input type='text' id='input-note-dogId' name='dogId'  
            onChange={(e)=>setDogId(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
     
        </div>
        <button className='add-form-submit' >Submit</button>
        </form>
    </div>
    )
}
export default AddNewNote;