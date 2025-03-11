import { useDispatch } from 'react-redux';
import {useModal} from '../../context/Modal';
import { thunkDeleteFriendship } from '../../redux/session';
import './DeleteFriendshipModal.css';
function DeleteFriendshipModal({user_id,friend_id}){
    const dispatch = useDispatch();
    const {closeModal} = useModal()
    const handleCancelDeleteConnection=(e)=>{
        e.preventDefault()
        closeModal()
    }
    const handleDeleteConnection=(e)=>{
        e.preventDefault()
        dispatch(thunkDeleteFriendship(user_id,friend_id))
        closeModal()
    }
    return(
        <div className='delete-container'>
            <form className='delete-form-container'>
                <h1>Delete a Friendship</h1>
                <div className='delete-form-buttons-container'>
                    <button className='delete-form-button' onClick={handleCancelDeleteConnection}>Cancel</button>
                    <button className='delete-form-button' onClick={handleDeleteConnection}>Delete</button>
                </div>

            </form>

        </div>

    )
}
export default DeleteFriendshipModal