import './DeleteDogPage.css';
import { thunkDeleteDogs } from '../../redux/dog';
import { useModal } from '../../context/Modal';
import { useDispatch } from 'react-redux';

function DeleteDogPage({dog_id}){

     const dispatch = useDispatch()
       const {closeModal} = useModal();
       const handleDeleteDog=(e)=>{
           e.preventDefault()
           dispatch(thunkDeleteDogs(dog_id))
           closeModal()
       }
       const handleCancelDeleteDog=(e)=>{
        e.preventDefault()
        closeModal()
       }
    
    return (
        <div className="delete-container">
            <form className="delete-form-container">
                <h1>Delete a Dog</h1>
                <div className='delete-form-buttons-container'>
                    <button className='delete-form-button' onClick={handleCancelDeleteDog}>Cancel</button>
                    <button className='delete-form-button' onClick={handleDeleteDog}> Delete</button>
                </div>
            </form>
        </div>
    )
}
export default DeleteDogPage