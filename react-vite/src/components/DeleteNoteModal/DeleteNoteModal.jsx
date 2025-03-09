import { useDispatch } from 'react-redux';
import {useModal} from '../../context/Modal';
import { thunkDeleteNote } from '../../redux/note';
import './DeleteNoteModal.css';
function DeleteNoteModal({note_id}){
    const dispatch = useDispatch();
    const {closeModal} = useModal()
    const handleCancelDeleteNote=(e)=>{
        e.preventDefault()
        closeModal()
    }
    const handleDeleteNote=(e)=>{
        e.preventDefault()
        dispatch(thunkDeleteNote(note_id))
        closeModal()
    }
    return(
        <div className='delete-container'>
            <form className='delete-form-container'>
                <h1>Delete a Note</h1>
                <div className='delete-form-buttons-container'>
                    <button className='delete-form-button' onClick={handleCancelDeleteNote}>Cancel</button>
                    <button className='delete-form-button' onClick={handleDeleteNote}>Delete</button>
                </div>

            </form>

        </div>

    )
}
export default DeleteNoteModal