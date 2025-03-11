import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import {useState} from 'react';
import {thunkSearchFriend} from '../../redux/friendship';
// import { useModal } from '../../context/Modal';
import { FaSearch ,FaTimes} from 'react-icons/fa';
import AddNewFriendModal from '../AddNewFriendModal';
import OpenModalButton from '../OpenModalButton';

function SearchBar(){
    const dispatch= useDispatch()
    // const {closeModal} = useModal();
    const searchFriend = useSelector(state=>state.friend.search);

    const [searchUser, setSearchUser] = useState('')
    const [errorServer,setErrorServer] = useState({});
    const [showSearch,setShowSearch] = useState(false)

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
            // closeModal();
            setShowSearch(true)
          }
    }

    return (
        <div>
            <form onSubmit={handleSearchNameSubmit}>
            <input type='text' value={searchUser} onChange={(e)=>setSearchUser(e.target.value)}></input>
            <button id='close-search-button'><FaSearch/></button>
            {errorServer.server? 
                    errorServer.server.map((error,index)=>{
                        return  <p  key={index}  id='photo-error'>{error}</p>
                    })
                    :null  
                    }
            </form>
            {
                showSearch&&searchFriend?
                <div className='search-name-icon-container'>
                     
                    <p>{searchFriend.username}</p>
                    <OpenModalButton 
                        buttonText="+"
                        // onButtonClick={closeMenu}
                        className='dog-add-new-dog'
                        modalComponent={<AddNewFriendModal />}/>
                    <button onClick={()=>setShowSearch(false)} id='close-search-button'><FaTimes /></button>
                </div>
                :null
            }
        </div>
    )

}
export default SearchBar;