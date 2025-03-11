import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {FaTrash} from 'react-icons/fa';
import DeleteFriendshipModal from '../DeleteFriendshipModal';
import OpenModalButton from '../OpenModalButton';
import './FriendList.css'

function FriendList(){
    const navigator = useNavigate();
     const sessionUser = useSelector((state) => state.session.user);

     if(!sessionUser) return navigator('/');
    return (
        <div className="friend-list-container">
            <h3>My friends:</h3>
         {
            sessionUser.friends.length !==0?
            sessionUser.friends.map((friend,index)=>{
                return (
                    <div key={index} className="friendship-delete-container" >
                        <p id='friend-name'>●  {friend.username}</p>
                        <OpenModalButton 
                                buttonText={<FaTrash />}
                                // onButtonClick={closeMenu}
                                className='friendship-delete-icon'
                                modalComponent={<DeleteFriendshipModal  user_id={sessionUser.id}  friend_id={friend.id}/>} />
                    </div>
                )
            })
            :<p>add you first friend</p>
         }
        </div>
    )
}
export default FriendList;