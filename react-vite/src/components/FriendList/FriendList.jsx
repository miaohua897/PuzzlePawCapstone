import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {FaTrash} from 'react-icons/fa';
import DeleteFriendshipModal from '../DeleteFriendshipModal';
import OpenModalButton from '../OpenModalButton';
import AddNewFriendModal from '../AddNewFriendModal';
import {useSideBarStatus} from '../../context/SideBar';
import './FriendList.css'

function FriendList(){
    const navigator = useNavigate();
    const {setIsSideBarOpen}=useSideBarStatus();
     const sessionUser = useSelector((state) => state.session.user);

     if(!sessionUser) return navigator('/');
    return (
        <div className="friend-list-container">
             <div>
                <button id ='friend-note-button' onClick={()=>{navigator('/friendsnote'); setIsSideBarOpen(false)}}>friends notes</button>
            </div>
            <div className="add-friends-icon-container">
           
            <h3>My friends:</h3>
            <OpenModalButton 
                        buttonText="+"
                        // onButtonClick={closeMenu}
                        className='dog-add-new-dog'
                        modalComponent={<AddNewFriendModal />}/>
            </div>

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