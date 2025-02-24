import { useEffect,useState, useRef } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {thunkLoadPhotos} from '../../redux/photo';
import './PhotoPage.css'
import { useNavigate } from "react-router-dom";
import OpenModalButton from '../OpenModalButton';
import AddNewPhotoPage from '../AddNewPhotoPage';
import DeletePhotoPage from '../DeletePhotoPage';
import {MdArrowDropDown} from 'react-icons/md'
import UpdatePhotoPage from '../UpdatePhotoPage';

function PhotoPage(){

  const dispatch = useDispatch()
  const navigator = useNavigate()
  const ulRef = useRef();

  const sessionUser = useSelector((state) => state.session.user);
  const [moreInfo, setMoreInfo]=useState(12);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedPhoto,setSelectedPhoto] = useState(-1);
  const photos = useSelector(state=>state.photo.photo);
   
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

  
    if(!sessionUser) return navigator('/');
    let photos_arr =[]
    if (photos)  photos_arr = Object.values(photos).reverse();

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
                <button id='photo-page-photo-button' >photos</button>
                <button>records</button>

            </div>
            <h1>Photoes</h1>
                  <OpenModalButton 
                  buttonText="Add A Photo"
                  onButtonClick={closeMenu}
                  className='photo-cards-add'
                  modalComponent={<AddNewPhotoPage />}
                  />
        {
            photos_arr !==0?
            <div>
               
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
                                              modalComponent={<UpdatePhotoPage photo_id={photo.id} />}
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