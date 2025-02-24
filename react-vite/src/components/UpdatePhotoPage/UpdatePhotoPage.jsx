import './UpdatePhotoPage.css'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useModal } from '../../context/Modal';
import {thunkUpdatePhotos} from '../../redux/photo';

function UpdatePhotoPage({photo_id}){

        
        const photos = useSelector(state=>state.photo.photo);
        const photo = photos[photo_id];
        const dateObject = new Date(photo.photo_date);
        const [image,setImage]=useState(photo.image_url);
        const [photo_date,setPhoto_date] = useState(dateObject.toISOString().split('T')[0])
        const [title,setTitle] = useState(photo.title)
        const [description,setDescription] = useState(photo.description);
        const [image_url,setImage_url]=useState(photo.image_url);
         const {closeModal} = useModal();
        const dispatch = useDispatch()

        const handleUpdatePhotoSubmit= (e)=>{
                 e.preventDefault()
                 console.log('i am adding a photo', image,title,description,photo_date)
                 const formData = new FormData();
                 formData.append('image_url',image)
                 formData.append('title',title)
                 formData.append('description',description)
                 formData.append('photo_date',photo_date)
                 formData.append('user_id',photo.owner.id)
                 formData.append('dog_id',1)
                 dispatch(thunkUpdatePhotos(formData,photo_id))
                 setImage(null)
                 setPhoto_date('')
                 setTitle('')
                 setDescription('')
                 closeModal()
             }

             const handleFileChange=(e)=>{
                e.preventDefault()
                const file = e.target.files[0];
                if(file){
                   const reader = new FileReader();
                   reader.onloadend=()=>{
                       setImage_url(reader.result)
                   }
                   reader.readAsDataURL(file);
                }
                setImage(e.target.files[0])
           }

    return (
        <div className="update-container">
           
            <form className="update-form-container" onSubmit={handleUpdatePhotoSubmit}>
            <h1>Update a New Photo</h1>
            <div>
            <div className='update-input'>
            <label htmlFor ='photo_date' className='update-form-lable'>select a date</label>
            <input type='date' id='photo-date' value={photo_date} name='photo_date' onChange={(e)=>setPhoto_date(e.target.value)}></input>
            </div>
            <div className='update-input'>
                <label htmlFor ='title' className='update-form-lable'>title</label>
                <input type='text' id='photo-title' value={title} name='title' onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div className='update-input' >
                <label htmlFor ='description' className='update-form-lable'>description</label>
                <input type='text' id='photo-description' value={description} name='description'  onChange={(e)=>setDescription(e.target.value)} ></input>
            </div>
            <div className='update-input'>
                 <label htmlFor ="image_upload" className='update-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload"  name="image_url" accept="image/*"  
                // onChange={(e)=>setImage(e.target.files[0])} 
                onChange={handleFileChange}
                />
            </div>
            </div>
            <img src={image_url} style={{width:150,height:100, borderRadius:10,padding:5}}></img>
            <button className='update-form-submit'>Submit</button>
            </form>
        </div>
    )
}

export default UpdatePhotoPage;