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
    const [disableButton,setDisableButton]=useState(false);
    const [share,setShare] = useState(false)
    const today = new Date().toISOString().split('T')[0];
    
    const handleAddPhotoSubmit= async (e)=>{
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
        formData.append('user_id',sessionUser.id)
        formData.append('dog_id',1)
        const serverResponse = await dispatch(thunkCreatePhotos(formData))
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
           
            <form className="add-form-container" onSubmit={handleAddPhotoSubmit}>
            <h1>Add a New Photo</h1>
            <p id ='photo-required-message'>Required fields are in red and marked with an *</p>
            {errorServer.server? 
            errorServer.server.map((error,index)=>{
                return  <p  key={index}  id='photo-error'>{error}</p>
            })
            :null  
            }
            <div>
            <div className='add-input'>
            <label htmlFor ='photo_date' className='add-form-lable'>photo token date *</label>
            <input type='date' id='photo-date' name='photo_date' 
            onChange={(e)=>setPhoto_date(e.target.value)} required min='1900-01-01' max={today}></input>
            </div>
            <div className='add-input'>
                <label htmlFor ='title' className='add-form-lable'>title *</label>
                <input type='text' id='photo-title' name='title' 
                onChange={(e)=>setTitle(e.target.value)} required  minLength="0" maxLength="20"></input>
            </div>
            {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null}
            <div className='add-input' >
                <label htmlFor ='description' className='add-form-lable'>description *</label>
                <input type='text' id='photo-description' name='description'  
                onChange={(e)=>setDescription(e.target.value)} required  minLength="0" maxLength="500" ></input>
            </div>
            <div>
            <input type ='checkbox' checked={share}  name='share-photo' onChange={()=>setShare(!share)}></input>
            <label htmlFor='share' className='share-photo' >Do you want to share the photo ?</label>
            </div>
            <div className='add-input'>
                 <label htmlFor ="image_upload" className='add-form-lable'>Upload an image *:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*"  
                 onChange={handleFileChange}
                required
                />
            </div>
            </div>
            <img src={image_url} style={{width:150,height:100, borderRadius:10,padding:5}}></img>
            <button className='add-form-submit' disabled={disableButton}>Submit</button>
            </form>
        </div>
    )
}
export default AddNewPhotoPage;