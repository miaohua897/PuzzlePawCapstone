import DogCards from './DogCards';
import {useNavigate} from 'react-router-dom';
import {useSideBarStatus} from '../../context/SideBar';
import { FaArrowRight} from 'react-icons/fa';
import NewestDogNoteRecord from './NewestDogNoteRecord';
import FriendList from '../FriendList';
 
function SideBarDogPage({dogsArr}){
    
     const navigator = useNavigate()
    const {isSideBarOpen,setIsSideBarOpen}=useSideBarStatus();

    const navToPhotoPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/photo') 
    }
    const navToNotePage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/note')
    }

    const navToRecordPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/record')
    }

    // const handleUnfinishedFeatures=()=>{
    //     window.alert('The feature coming soon ^.^')
    // }

    return (
        <div className="sidebar"
         style={isSideBarOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }} >
            
                <div className="fixed-top">
                    <div className="sidebar-header">
                        <button className="arrow-button" onClick={() => {
                        setIsSideBarOpen(false)
                        }}>
                        <FaArrowRight />
                        </button>
                    </div>
                    <h1 id='beloved-dog-sidebar'>Beloved Dogs</h1>
                    <div className="dog-page-nav-button">
                        <div>
                            <button id='dog-page-dog-button'>dogs</button>
                            <button onClick={navToNotePage}>notes</button>
                        </div>
                        <div>
                            <button onClick ={navToPhotoPage}>photos</button>
                            <button onClick={navToRecordPage} >records</button>
                        </div> 
                    </div>                    
                </div>
                <div className="scrollable">
                <  FriendList /> 
                <DogCards  dogsArr={dogsArr} />
                <NewestDogNoteRecord dogsArr={dogsArr} />
                </div>      
        </div>
    )
}
export default SideBarDogPage;