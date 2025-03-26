import {useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLoadAllNotes } from '../../redux/note';
import { useNavigate } from 'react-router-dom';

function FriendsLastNote (){
    const dispatch =useDispatch()
    const navigator = useNavigate();
    const sessionUser = useSelector(state=>state.session.user);
    const allNotes = useSelector(state=>state.note.allUserNote);

    useEffect(()=>{
        dispatch(thunkLoadAllNotes())
   },[dispatch])

    if (! sessionUser)  return navigator('/');

    const userFriends = sessionUser.friends;
    const userFriendsId = userFriends.map(el=>el.id);
    
    let friendsnote=[]

    if(allNotes) {
        Object.values(allNotes).map(note=>{
            if (userFriendsId.indexOf(note.user_id)>=0){
                   friendsnote.push(note)
            }
        })
    }
   console.log(friendsnote)
    return (
        <div>
            {
              friendsnote.length !==0?
              friendsnote.map((note,index)=>{
                return (
                    <div key={index}>
                        <p>{note.title}</p>
                        <p>{note.content}</p>
                        <p>{"by "+ note.user.username}</p>
                    </div>    
                )
              })
              :<p>your friends have no new notes</p>  
            }
        </div>
    )
}
export default FriendsLastNote