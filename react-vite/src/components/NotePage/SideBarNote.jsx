import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSideBarStatus } from "../../context/SideBar";
import { useSetDogId } from "../../context/SetDogId";
import './NotePage.css';

function SideBarNote({dogsArr}){
    const navigator = useNavigate()
    const {isSideBarOpen, setIsSideBarOpen} = useSideBarStatus();
    const {setSelectedDogId} = useSetDogId();

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
    const navToRecordPage=(e)=>{
        e.preventDefault()
        setIsSideBarOpen(false)
        navigator('/record')
    }
    
    return (
        <div className="sidebar"
        style={isSideBarOpen?{transform:'translateX(0)'}:{transform:'translateX(100%)'}}
        >
            <div className="fixed-top">
                <h1 id='beloved-dog-sidebar'>Beloved Dogs</h1>
                <div className="dog-page-nav-button">
                    <div>
                        <button onClick={navToDogPage}>dogs</button>
                        <button id ='photo-page-photo-button'>notes</button>
                    </div>
                    <div>
                        <button onClick={navToPhotoPage}>photos</button>
                        <button onClick={navToRecordPage}>records</button>
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
                    :<p>you dont have dog yet</p>
                }
            </div>
        </div>
    )
}
export default SideBarNote;