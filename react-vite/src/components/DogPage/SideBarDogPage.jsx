import DogCards from './DogCards';
import {useNavigate} from 'react-router-dom';
import {useSideBarStatus} from '../../context/SideBar';
import { FaArrowRight} from 'react-icons/fa';
 
function SideBarDogPage({dogsArr}){
    
     const navigator = useNavigate()
    const {isSideBarOpen,setIsSideBarOpen}=useSideBarStatus();

    const navToPhotoPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/photo') 
    }

    const handleUnfinishedFeatures=()=>{
        window.alert('The feature coming soon ^.^')
    }

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
                            <button onClick={handleUnfinishedFeatures}>notes</button>
                        </div>
                        <div>
                            <button onClick ={navToPhotoPage}>photos</button>
                            <button onClick={handleUnfinishedFeatures} >records</button>
                        </div> 
                    </div>                    
                </div>
                <div className="scrollable">
                <DogCards  dogsArr={dogsArr} />
                </div>      
        </div>
    )
}
export default SideBarDogPage;