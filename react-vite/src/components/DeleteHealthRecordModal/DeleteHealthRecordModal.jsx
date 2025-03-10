import { useDispatch } from 'react-redux';
import { thunkDeleteHealthRecord } from '../../redux/healthRecord';
import { useModal } from '../../context/Modal';

function DeleteHealthRecordModal({health_record_id}){
       const dispatch = useDispatch()
       const {closeModal} = useModal();
       const handleDeletePhoto=(e)=>{
           e.preventDefault()
           dispatch(thunkDeleteHealthRecord(health_record_id))
           closeModal()
       }
       const handleCancelDeletePhoto=(e)=>{
        e.preventDefault()
        closeModal()
       }

    return (
        <div className="delete-container">
        <form className="delete-form-container">
            <h1>Delete a health record</h1>
            <div className='delete-form-buttons-container'>
                <button className='delete-form-button' onClick={handleCancelDeletePhoto}>Cancel</button>
                <button className='delete-form-button' onClick={handleDeletePhoto}> Delete</button>
            </div>
        </form>
    </div>
    )
}
export default DeleteHealthRecordModal;