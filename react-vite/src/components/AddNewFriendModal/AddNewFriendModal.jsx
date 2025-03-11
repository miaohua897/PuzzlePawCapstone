import './AddNewFriendModal.css';
import {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useModal} from '../../context/Modal';
import {thunkCreateFriendship} from '../../redux/session';


function AddNewFriendModal(){
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const {closeModal} = useModal()
    const [friendId, setFriendId] = useState(0);
    const [errorServer,setErrorServer] = useState({});

    const handleAddNewFriendSubmit = async (e) =>{
        e.preventDefault();
        const data ={
            'user_id':sessionUser.id,
            'friend_id':friendId
        }
        const serverResponse = await dispatch(thunkCreateFriendship(data))
        if (serverResponse) {
            const errorKey = Object.keys(serverResponse);
            const errorValue = Object.values(serverResponse);
            const errorArr=[]
            for (let i=0;i<errorKey.length;i++){
                errorArr.push(`${errorKey[i]}:${errorValue[i]}`)
            }
            setErrorServer({'server':errorArr});
           
          
          } else {
            closeModal();
       
          }

    }

    return (
        <div>
            <form className="add-form-container"  onSubmit={handleAddNewFriendSubmit}>
                <h1>add a new friend</h1>
                    {errorServer.server? 
                    errorServer.server.map((error,index)=>{
                        return  <p  key={index}  id='photo-error'>{error}</p>
                    })
                    :null  
                    }
                <div className='add-input'>
                <label htmlFor='add-friend' className='add-friend'>Freind ID</label>
                <input type='number' id='add-friend' onChange={(e)=>setFriendId(e.target.value)}  required></input>
                </div>
                <button className='add-form-submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddNewFriendModal