import { useNavigate } from "react-router-dom";
import { useSideBarStatus } from "../../context/SideBar";
import {FaArrowRight} from 'react-icons/fa';
import { useSetDogId } from "../../context/SetDogId";
function SideBarNote({dogsArr}){
    const navigator = useNavigate()
    const {isSideBarOpen, setIsSideBarOpen} = useSideBarStatus();
    const {setSelectedDogId} = useSetDogId();
    const navToDogPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/dog')
    }
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
        style={isSideBarOpen?{transform:'translateX(0)'}:{transform:'translateX(100%)'}}
        >
            <div className="fixed-top">
                <div className="sidebar-header">
                    <button className="arrow-button" onClick={()=>setIsSideBarOpen(false)}>
                        <FaArrowRight />
                    </button>
                </div>
                <h1 id='beloved-dog-sidebar'>Beloved Dogs</h1>
                <div className="dog-page-nav-button">
                    <div>
                        <button onClick={navToDogPage}>dogs</button>
                        <button id ='photo-page-photo-button'>notes</button>
                    </div>
                    <div>
                        <button onClick={navToPhotoPage}>photos</button>
                        <button onClick={handleUnfinishedFeatures}>records</button>
                    </div>                
                </div>
            </div>
            <div className="scrollable">
                {
                    dogsArr.length !== 0?
                    dogsArr.map((dog,index)=>
                         (
                            <div key={index} onClick={()=>setSelectedDogId(dog.id)} className='sidebar-dog-info'>
                                <img src={dog.image_url} style={{width:50,height:50}}></img>
                                <p className='sidebar-photo-name-button'>{dog.dog_name}</p>
                            </div>
                        )
                    )
                    :<p>you dont have note yet</p>
                }

            </div>


        </div>
    )
}
export default SideBarNote;