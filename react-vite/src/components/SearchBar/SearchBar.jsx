import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import {thunkSearchFriend} from '../../redux/friendship';
import {thunkCreateFriendship} from '../../redux/session';
import { FaSearch ,FaTimes} from 'react-icons/fa';
import './SearchBar.css';

function SearchBar(){
    const dispatch= useDispatch()
    const  searchFriend= useSelector(state=>state.friend.search);
    const sessionUser = useSelector((state) => state.session.user);
    const [searchUser, setSearchUser] = useState('')
    const [errorServer,setErrorServer] = useState({});
    const [showSearch,setShowSearch] = useState(false);

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
            setShowSearch(true)
          }
    }

    const handleCloseSearch= async(e)=>{
        e.preventDefault()
        setShowSearch(false)
    }

    const handleAddFriend= async(e)=>{
        e.preventDefault()
       const data ={
                   'user_id':sessionUser.id,
                   'friend_id':searchFriend.id
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
                setShowSearch(false)
                setSearchUser('')
                 }
       
    }

    return (
        <div>
            <form onSubmit={handleSearchNameSubmit} className='search-form'>
            <input type='text' value={searchUser} onChange={(e)=>setSearchUser(e.target.value)} 
            placeholder='search and add your friends by their ID'
            className='search-input'></input>
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
                     
                    <p>{searchFriend.username} </p>
                    <button id='add-friend-button-searchbar' onClick={handleAddFriend}>+</button>
                    <button onClick={handleCloseSearch} id='close-search-button'><FaTimes /></button>
                </div>
                :null
            }
        </div>
    )

}
export default SearchBar;