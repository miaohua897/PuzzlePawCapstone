import DogCards from './DogCards';
import {useNavigate} from 'react-router-dom';
import {useSideBarStatus} from '../../context/SideBar';
import NewestDogNoteRecord from './NewestDogNoteRecord';
import FriendList from '../FriendList';
import { useEffect } from 'react';
 
function SideBarDogPage({dogsArr}){
    
    const navigator = useNavigate()
    const {isSideBarOpen,setIsSideBarOpen}=useSideBarStatus();

    useEffect(()=>{
        const handleMouseMove =(e)=>{
            if(e.clientX > window.innerWidth - 200){
                setIsSideBarOpen(true)
            }else{
                setIsSideBarOpen(false)
            }
        }
        window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
    },[])

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

    return (
        <div className="sidebar"
         style={isSideBarOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }} >
            
                <div className="fixed-top">
                    <div className="sidebar-header">
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