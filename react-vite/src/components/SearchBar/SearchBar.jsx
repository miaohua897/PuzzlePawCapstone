import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import {useState} from 'react';
import {thunkSearchFriend} from '../../redux/friendship';
import { useModal } from '../../context/Modal';
import { FaSearch } from 'react-icons/fa';

function SearchBar(){
    const dispatch= useDispatch()
    const {closeModal} = useModal();
    const searchFriend = useSelector(state=>state.friend.search);

    const [searchUser, setSearchUser] = useState('')
    const [errorServer,setErrorServer] = useState({});

    const handleSearchNameSubmit = async(e)=>{
        e.preventDefault()
        setErrorServer({})
        const serverResponse  = await dispatch(thunkSearchFriend({
            'search_name':searchUser
        }))
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
            <form onSubmit={handleSearchNameSubmit}>
            <input type='text' value={searchUser} onChange={(e)=>setSearchUser(e.target.value)}></input>
            <button><FaSearch/></button>
            </form>
            {errorServer.server? 
            errorServer.server.map((error,index)=>{
                return  <p  key={index}  id='photo-error'>{error}</p>
            })
            :null  
            }
            {
                searchFriend?
                <div>
                    <p>{searchFriend.username}</p>
                  
                </div>
                :null
            }
        </div>
    )

}
export default SearchBar;