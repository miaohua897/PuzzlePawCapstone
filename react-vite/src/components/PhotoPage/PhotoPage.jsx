import { useEffect,useState, useRef } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {thunkLoadPhotos} from '../../redux/photo';
import {thunkLoadDogs} from '../../redux/dog';
import { useNavigate } from "react-router-dom";
import OpenModalButton from '../OpenModalButton';
import AddNewPhotoPage from '../AddNewPhotoPage';
import {FaPhotoVideo} from 'react-icons/fa';
import SideBarPhoto from './SideBarPhoto';
import PhotoWall from './PhotoWall';
import SearchBar from "../SearchBar/SearchBar";
import './PhotoPage.css'
import './PhotoPageMedia.css'

function PhotoPage(){

  const dispatch = useDispatch()
  const navigator = useNavigate()
  const ulRef = useRef();
  const photos = useSelector(state=>state.photo.photo);
  const dogs = useSelector(state=>state.dog.dog);
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

    useEffect(()=>{
          dispatch(thunkLoadPhotos())
          dispatch(thunkLoadDogs())
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
    let dogs_arr =[]
    if (dogs) dogs_arr = Object.values(dogs);

    const closeMenu = () => setShowMenu(false);

    return (
        <div className='pictures-container' >
            <div className="photo-cards-title-icon">
            <h1>Photoes</h1>
                  <OpenModalButton 
                  buttonText={<FaPhotoVideo  color="darkblue" />}
                  onButtonClick={closeMenu}
                  className='photo-cards-add'
                  modalComponent={<AddNewPhotoPage />}
                  />
            </div>
             <SearchBar />  
            <SideBarPhoto dogs_arr={dogs_arr} photos_arr={photos_arr}  closeMenu={closeMenu} />             
            <PhotoWall photos_arr={photos_arr} />
      
    </div>
    )
}
export default PhotoPage