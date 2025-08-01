import './UpdatePhotoPage.css'
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useModal } from '../../context/Modal';
import {thunkUpdatePhotos} from '../../redux/photo';

function UpdatePhotoPage({photo_id}){

        const {closeModal} = useModal();
        const dispatch = useDispatch()
        const photos = useSelector(state=>state.photo.photo);
        const photo = photos[photo_id];
        const dateObject = new Date(photo.photo_date);
        const [image,setImage]=useState(photo.image_url);
        const [photo_date,setPhoto_date] = useState(dateObject.toISOString().split('T')[0])
        const [title,setTitle] = useState(photo.title)
        const [description,setDescription] = useState(photo.description);
        const [image_url,setImage_url]=useState(photo.image_url);
        const [errorServer,setErrorServer] = useState({});
        const [errorTitle,setErrorTitle]=useState('')
        const [disableButton,setDisableButton]=useState(false);
        const [share,setShare] = useState(false)
        const today = new Date().toISOString().split('T')[0];

        const handleUpdatePhotoSubmit= async (e)=>{
                e.preventDefault()
                setDisableButton(true)
                 if(title.length>20){
                    const errMes ='title is too long';
                    setErrorTitle(errMes)
                    setDisableButton(false)
                    return ;
                }
                 const formData = new FormData();
                 formData.append('image_url',image)
                 formData.append('title',title)
                 formData.append('description',description)
                 formData.append('photo_date',photo_date)
                 formData.append('share',share)
                 formData.append('user_id',photo.owner.id)
                 formData.append('dog_id',1)
                 const serverResponse = await  dispatch(thunkUpdatePhotos(formData,photo_id))
                 if (serverResponse) {
                    const errorKey = Object.keys(serverResponse);
                    const errorValue = Object.values(serverResponse);
                    const errorArr=[]
                    for (let i=0;i<errorKey.length;i++){
                        errorArr.push(`${errorKey[i]}:${errorValue[i]}`)
                    }
                    setErrorServer({'server':errorArr});
                    setDisableButton(false)
                  } else {
                    closeModal();
                    setDisableButton(false)
                  }
                 setImage(null)
                 setPhoto_date('')
                 setTitle('')
                 setDescription('')
                 setDisableButton(false)
                 setShare(false)
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
            {errorServer.server? 
            errorServer.server.map((error,index)=>{
                return  <p  key={index}  id='photo-error'>{error}</p>
            })
            :null  
            }
            <div>
            <div className='update-input'>
            <label htmlFor ='photo_date' className='update-form-lable'>photo token date</label>
            <input type='date' id='photo-date' value={photo_date} name='photo_date' 
            onChange={(e)=>setPhoto_date(e.target.value)} min='1900-01-01' max={today} ></input>
            </div>
            <div className='update-input'>
                <label htmlFor ='title' className='update-form-lable'>title</label>
                <input type='text' id='photo-title' value={title} name='title' 
                onChange={(e)=>setTitle(e.target.value)}  minLength="0" maxLength="20"></input>
            </div>
            {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null}
            <div className='update-input' >
                <label htmlFor ='description' className='update-form-lable'>description</label>
                <input type='text' id='photo-description' value={description} name='description'  
                onChange={(e)=>setDescription(e.target.value)}  minLength="0" maxLength="500" ></input>
            </div>
            <div>
            <input type ='checkbox' checked={share}  name='share-photo' onChange={()=>setShare(!share)}></input>
            <label htmlFor='share' className='share-photo' >Do you want to share the photo ?</label>
            <p id='share-checkbox-warning'> ** Check to share, Default value is private</p>
             </div>
            <div className='update-input'>
                 <label htmlFor ="image_upload" className='update-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload"  name="image_url" accept="image/*"  
                onChange={handleFileChange}
                />
            </div>
            </div>
            <img src={image_url} style={{width:150,height:100, borderRadius:10,padding:5}}></img>
            <button className='update-form-submit' disabled={disableButton}>Submit</button>
            </form>
        </div>
    )
}

export default UpdatePhotoPage;