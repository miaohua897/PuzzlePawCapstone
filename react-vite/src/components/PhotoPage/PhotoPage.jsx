import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {thunkLoadPhotos} from '../../redux/photo';
import './PhotoPage.css'

function PhotoPage(){
    
    const dispatch = useDispatch()
    useEffect(()=>{
          dispatch(thunkLoadPhotos())
    },[dispatch])

    const photos = useSelector(state=>state.photo.photo)
    let photos_arr =[]
    if (photos)  photos_arr = Object.values(photos);
    // console.log('photos',photos,photos_arr)
    return (
        <div className='pictures-container'>
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