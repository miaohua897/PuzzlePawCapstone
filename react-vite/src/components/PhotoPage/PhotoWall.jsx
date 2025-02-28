import {useState,useRef} from 'react';
import DeletePhotoPage from '../DeletePhotoPage';
import UpdatePhotoPage from '../UpdatePhotoPage';
import OpenModalButton from '../OpenModalButton';
import {useSideBarStatus} from '../../context/SideBar';
import {MdArrowDropDown} from 'react-icons/md';

function PhotoWall({photos_arr}){
    const ulRef = useRef();
    const [showMenu, setShowMenu] = useState(false); 
    const [moreInfo, setMoreInfo]=useState(12);
    const [selectedPhoto,setSelectedPhoto] = useState(-1);
    const {setIsSideBarOpen} = useSideBarStatus();
    const closeMenu = () => setShowMenu(false);
    return (
            photos_arr !==0?
            <div onClick={() => {setIsSideBarOpen(false)}}>
                  <div className='photoes-container' >
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
                                <button  onClick={(e)=>{
                                                  e.stopPropagation(); 
                                                  setShowMenu(!showMenu);
                                                  setSelectedPhoto(photo.id)}} id='photo-cards-options' >
                                         <MdArrowDropDown />
                                </button>
                                {showMenu && selectedPhoto === photo.id?
                                <div className="Photo-cards-menu" ref={ulRef} >
                                    <OpenModalButton 
                                              buttonText="Update A Photo"
                                              onButtonClick={closeMenu}
                                              className='photo-cards-update'
                                              modalComponent={<UpdatePhotoPage photo_id={photo.id} />}/>
                                    <OpenModalButton 
                                              buttonText="Delete A Photo"
                                              onButtonClick={closeMenu}
                                              className='photo-cards-delete'
                                              modalComponent={<DeletePhotoPage photo_id={photo.id}  />} />
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
      
    )
}
export default PhotoWall;