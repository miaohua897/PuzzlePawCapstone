import './AddNewPhotoPage.css';
import { useState } from 'react';
import {thunkCreatePhotos} from '../../redux/photo';
import {useDispatch,useSelector} from 'react-redux'
import { useModal } from '../../context/Modal';



function AddNewPhotoPage(){
     const dispatch = useDispatch()
     const sessionUser = useSelector((state) => state.session.user);
    const [image,setImage]=useState(null);
    const [photo_date,setPhoto_date] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
     const {closeModal} = useModal();
    const [image_url,setImage_url]=useState('https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/Screenshot+2025-02-24+at+6.25.29%E2%80%AFAM.png');
    const [errorServer,setErrorServer] = useState({});
    const [errorTitle,setErrorTitle]=useState('')
    
    const handleAddPhotoSubmit= async (e)=>{
        e.preventDefault()
        // console.log('i am adding a photo', image,title,description,photo_date)
        if(title.length>20){
            const errMes ='title is too long';
            setErrorTitle(errMes)
            return ;
        }
        const formData = new FormData();
        formData.append('image_url',image)
        formData.append('title',title)
        formData.append('description',description)
        formData.append('photo_date',photo_date)
        formData.append('user_id',sessionUser.id)
        formData.append('dog_id',1)
        const serverResponse = await dispatch(thunkCreatePhotos(formData))
        if (serverResponse) {
            const errorKey = Object.keys(serverResponse)[0];
            const errorValue = Object.values(serverResponse)[0];
            setErrorServer({'server':`${errorKey}:${errorValue}`});
            // console.log('serverResponse',serverResponse,errorValue,errorKey)
          } else {
            closeModal();
          }
        setImage(null)
        setPhoto_date('')
        setTitle('')
        setDescription('')
        // closeModal()
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
           
            <form className="add-form-container" onSubmit={handleAddPhotoSubmit}>
            <h1>Update a New Photo</h1>
            {errorServer.server && <p id='photo-error'>{errorServer.server}</p>}
            <div>
            <div className='add-input'>
            <label htmlFor ='photo_date' className='add-form-lable'>select a date</label>
            <input type='date' id='photo-date' name='photo_date' onChange={(e)=>setPhoto_date(e.target.value)} required></input>
            </div>
            <div className='add-input'>
                <label htmlFor ='title' className='add-form-lable'>title</label>
                <input type='text' id='photo-title' name='title' 
                onChange={(e)=>setTitle(e.target.value)} required  minLength="0" maxLength="20"></input>
            </div>
            {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null}
            <div className='add-input' >
                <label htmlFor ='description' className='add-form-lable'>description</label>
                <input type='text' id='photo-description' name='description'  
                onChange={(e)=>setDescription(e.target.value)} required  minLength="0" maxLength="500" ></input>
            </div>
            <div className='add-input'>
                 <label htmlFor ="image_upload" className='add-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*"  
                 onChange={handleFileChange}
                // onChange={(e)=>setImage(e.target.files[0])} 
                />
            </div>
            </div>
            <img src={image_url} style={{width:150,height:100, borderRadius:10,padding:5}}></img>
            <button className='add-form-submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddNewPhotoPage;