import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {thunkLoadPhotos} from '../../redux/photo';
import './PhotoPage.css'
import { useNavigate } from "react-router-dom";

function PhotoPage(){
    
    const dispatch = useDispatch()
    const navigator = useNavigate()
    useEffect(()=>{
          dispatch(thunkLoadPhotos())
    },[dispatch])

    const photos = useSelector(state=>state.photo.photo)
    let photos_arr =[]
    if (photos)  photos_arr = Object.values(photos);
    const navToDogPage=(e)=>{
        e.preventDefault()
        navigator('/dog')
    }
    
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
                  {
                    photos_arr.map((photo,index)=>{
                        return (
                           
                                <div key={index} >
                                <img src={photo.image_url} className='all-photoes'/>
                                </div>                        
                        )
                    })
                  }
                </div>
            </div>
            :<h1>Photoes</h1>
        }
      
    </div>
    )
}
export default PhotoPage