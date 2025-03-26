import {useEffect}  from 'react';
import { useDispatch } from 'react-redux';
import { thunkLoadAllNotes } from '../../redux/note';

function FriendsLastNote (){
    const dispatch =useDispatch()
    useEffect(()=>{
         dispatch(thunkLoadAllNotes())
    })
    return (
        <div>hello</div>
    )
}
export default FriendsLastNote