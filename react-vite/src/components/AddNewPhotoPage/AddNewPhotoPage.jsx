import './AddNewPhotoPage.css';
import { useState } from 'react';
import {thunkCreatePhotos} from '../../redux/photo';
import {useDispatch} from 'react-redux'
import { useModal } from '../../context/Modal';



function AddNewPhotoPage(){

    const [image,setImage]=useState(null);
    const [photo_date,setPhoto_date] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
     const {closeModal} = useModal();
    const dispatch = useDispatch()
    
    const handleAddPhotoSubmit= (e)=>{
        e.preventDefault()
        console.log('i am adding a photo', image,title,description,photo_date)
        const formData = new FormData();
        formData.append('image_url',image)
        formData.append('title',title)
        formData.append('description',description)
        formData.append('photo_date',photo_date)
        formData.append('user_id',1)
        formData.append('dog_id',1)
        dispatch(thunkCreatePhotos(formData))
        setImage(null)
        setPhoto_date('')
        setTitle('')
        setDescription('')
        closeModal()
    }

    return (
        <div className="update-container">
           
            <form className="add-form-container" onSubmit={handleAddPhotoSubmit}>
            <h1>Update a New Photo</h1>
            <div>
            <div className='add-input'>
            <label htmlFor ='photo_date' className='add-form-lable'>select a date</label>
            <input type='date' id='photo-date' name='photo_date' onChange={(e)=>setPhoto_date(e.target.value)}></input>
            </div>
            <div className='add-input'>
                <label htmlFor ='title' className='add-form-lable'>title</label>
                <input type='text' id='photo-title' name='title' onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div className='add-input' >
                <label htmlFor ='description' className='add-form-lable'>description</label>
                <input type='text' id='photo-description' name='description'  onChange={(e)=>setDescription(e.target.value)} ></input>
            </div>
            <div className='add-input'>
                 <label htmlFor ="image_upload" className='add-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*"  onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            </div>
        
            <button className='add-form-submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddNewPhotoPage;