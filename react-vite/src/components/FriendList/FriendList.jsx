import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
                    <div key={index}>
                        <p id='friend-name'>●  {friend}</p>
                    </div>
                )
            })
            :<p>add you first friend</p>
         }
        </div>
    )
}
export default FriendList;