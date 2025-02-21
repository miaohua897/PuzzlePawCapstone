import { useDispatch } from 'react-redux';
import './DeletePhotoPage.css';
import { thunkDeletePhotos } from '../../redux/photo';
import { useModal } from '../../context/Modal';

function DeletePhotoPage({photo_id}){

   const dispatch = useDispatch()
   const {closeModal} = useModal();
   const handleDeletePhoto=(e)=>{
       e.preventDefault()
       dispatch(thunkDeletePhotos(photo_id))
       closeModal()
   }

    return (
        <div className="delete-container">
            <form className="delete-form-container">
                <h1>Delete a Photo</h1>
                <div className='delete-form-buttons-container'>
                    <button className='delete-form-button'>Cancel</button>
                    <button className='delete-form-button' onClick={handleDeletePhoto}> Delete</button>
                </div>
            </form>
        </div>
    )
}
export default DeletePhotoPage;