import { useEffect,useState, useRef } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {thunkLoadPhotos} from '../../redux/photo';
import './PhotoPage.css'
import { useNavigate } from "react-router-dom";
import OpenModalButton from '../OpenModalButton';
import AddNewPhotoPage from '../AddNewPhotoPage';
import DeletePhotoPage from '../DeletePhotoPage';
import {MdArrowDropDown} from 'react-icons/md'

function PhotoPage(){
    
    const [moreInfo, setMoreInfo]=useState(12);
    const [showMenu, setShowMenu] = useState(false);
    const [selectedPhoto,setSelectedPhoto] = useState(-1);
    const ulRef = useRef();
    const dispatch = useDispatch()
    const navigator = useNavigate()
    useEffect(()=>{
          dispatch(thunkLoadPhotos())
    },[dispatch])

    useEffect(() => {
      if (!showMenu) return;
  
      const closeMenu = (e) => {
        if (ulRef.current && !ulRef.current.contains(e.target)) {
          setShowMenu(false);
        }
      };
  
      document.addEventListener("click", closeMenu);
  
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const photos = useSelector(state=>state.photo.photo)
    let photos_arr =[]
    if (photos)  photos_arr = Object.values(photos);

    // console.log('photos_arr',photos_arr)

    const navToDogPage=(e)=>{
        e.preventDefault()
        navigator('/dog')
    }

    const closeMenu = () => setShowMenu(false);

    return (
        <div className='pictures-container'>
             <div className="dog-page-nav-button">
                <button onClick ={navToDogPage} >dogs</button>
                <button>notes</button>
                <button>photos</button>
                <button>records</button>

            </div>
        {
            photos_arr !==0?
            <div>
                  <h1>Photoes</h1>
                  <div className='photoes-container'>
                    <div className="dog-photos-container">

                  {
                    photos_arr.slice(0,moreInfo).map((photo,index)=>{
                        return (
                           
                                <div key={index} >
                                <div className="photo-card">
                                <img src={photo.image_url} className='all-photoes'/>
                                {
                                  showMenu && selectedPhoto === photo.id?
                                  null:
                                  <div className="photo-info">
                                  <h3>{photo.title}</h3>
                                  <p id='photo-info-description'>{photo.description}</p>
                                  </div>

                                }
                              
                        
                                <button  onClick={
                            (e)=>{
                            e.stopPropagation(); 
                            setShowMenu(!showMenu);
                            setSelectedPhoto(photo.id)
                             }
                            } id='photo-cards-options' >
                               <MdArrowDropDown />
                                </button>
                                {showMenu && selectedPhoto === photo.id?
                                <div
                                className="Photo-cards-menu"
                                  ref={ulRef}
                                >
                                  
                                    <OpenModalButton 
                                              buttonText="Update A Photo"
                                              onButtonClick={closeMenu}
                                              className='photo-cards-update'
                                              modalComponent={<AddNewPhotoPage />}
                                    />
                                    <OpenModalButton 
                                              buttonText="Delete A Photo"
                                              onButtonClick={closeMenu}
                                              className='photo-cards-delete'
                                              modalComponent={<DeletePhotoPage photo_id={photo.id}  />}
                                    />
                             
                                </div>
                                :null
                                }
                            </div>
                            </div>                        
                        )
                    })
                  }
                   {
                    photos_arr.length !==0?                    
                      moreInfo===12?
                      <button className='showmore' onClick={()=>setMoreInfo(photos_arr.length)}> ... show more</button>
                      :
                      <button className='showmore' onClick={()=>setMoreInfo(12)}>show less</button>                   
                    :null
                   }
                  </div>
            
                </div>
     
         
            </div>
            :<h1>Photoes</h1>
        }
      
    </div>
    )
}
export default PhotoPage