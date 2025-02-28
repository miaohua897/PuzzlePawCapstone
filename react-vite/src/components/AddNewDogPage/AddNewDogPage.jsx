import './AddNewDogPage.css';
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {thunkCreateDogs} from '../../redux/dog';
import { useModal } from '../../context/Modal';

function AddNewDogPage(){
    const {closeModal}=useModal()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const [dogName,setDogName]=useState('');
    const [dogAge,setDogAge]=useState(-1);
    const [color,setColor]=useState('');
    const [weight,setWeight]=useState(-1);
    const [birth_date,setBirth_Date] = useState('')
    const [male,setMale]=useState(false);
    const [female,setFemale]=useState(false);
    const [neutered,setNeutered]=useState(false);
    const [spayed,setSpayed]=useState(false);
    const [microchip,setMicrochip]=useState(false);
    const [breed,setBreed]=useState('')
    const [description,setDescription]=useState('')
    const [medical_allergies,setMedical_allergies]=useState('');
    const [owner_name,setOwner_name] = useState('');
    const [owner_contact,setOwner_contact]=useState('')
    const [owner_email,setOwner_email]=useState('')
    const [owner_address_one,setOwner_address_one]=useState('')
    const [owner_address_two,setOwner_address_two]=useState('')
    const [owner_state,setOwner_state]=useState('')
    const [owner_code,setOwner_code]=useState(0);
    const [owner_country,setOwner_country]=useState('');
    const [owner_city,setOwner_city] = useState('')
    const [image,setImage]=useState('');
    const [image_url,setImage_url]=useState('https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/Screenshot+2025-02-24+at+6.25.29%E2%80%AFAM.png');
    const [error,setError] = useState({ 'ownerNumber':'', 'ownerCode':'',});
    const [errorServer,setErrorServer] = useState({})
    const [disableButton,setDisableButton]=useState(false);
    const today = new Date().toISOString().split('T')[0];

    const handleAddDogSubmit= async (e)=>{
         
      e.preventDefault();
    setDisableButton(true)

      if(owner_contact.length<7||owner_contact.length>15) {
        const errMes ='phone is too long or too short';
        setError({
            'ownerNumber':errMes})
        setDisableButton(false)
        return ;
      }
      if(owner_code.length<4||owner_code.length>20) {
        const errMes ='zip code is too long or too short, it is set between 5 to 20';
        setError({
            'ownerCode':errMes
        })
        setDisableButton(false)
        return ;
      }
    
    let gender;
    let neutered_spayed;
  
          if(male)  gender='male';
          if(female) gender ='female';
          if (!male&&!female) {
            const errMes ="dog gender can't be empty";
            setError({
                'dogGender':errMes
            })
            setDisableButton(false)
            return ;} 
          if(neutered) neutered_spayed='neutered';
          if(spayed) neutered_spayed='spayed';
          if(!neutered&&!spayed) neutered_spayed='None';
          
       
    const formData = new FormData();
    formData.append('image_url',image);
    formData.append('dog_name',dogName)
    formData.append('age',dogAge)
    formData.append('gender',gender)
    formData.append('microchip',microchip)
    formData.append('neutered_spayed',neutered_spayed)
    formData.append('color',color)
    formData.append('weight',weight)
    formData.append('image_url',image)
    formData.append('birth_date',birth_date)
    formData.append('breed_name',breed)
    formData.append('description',description)
    formData.append('medical_allergies',medical_allergies)
    formData.append('owner_phone_number',owner_contact)
    formData.append('owner_email',owner_email)
    formData.append('owner_address_line_one',owner_address_one)
    formData.append('owner_address_line_two',owner_address_two)
    formData.append('owner_address_city',owner_city)
    formData.append('owner_address_state',owner_state)
    formData.append('owner_address_zip_code',owner_code)
    formData.append('owner_country',owner_country)
    formData.append('user_id',sessionUser.id)

    const serverResponse = await dispatch(thunkCreateDogs(formData))
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
        setDisableButton(false)
        closeModal();
      }
      setDisableButton(false)
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
        <div className="add-new-dog-container">
           
            <form className="add-dog-form-container" onSubmit={handleAddDogSubmit}>
        
            <h1>Add a New Dog</h1>
            <p id ='dog-required-message'>Required fields are in red and marked with an *</p>
            {errorServer.server? 
            errorServer.server.map((error,index)=>{
                return  <p  key={index}  id='photo-error'>{error}</p>
            })
            :null  
            }
            <div>
            <div className='add-input'>
            <label htmlFor ='dog_name' className='add-dog-form-lable'>Dog Name *</label>
            <input type='text' value={dogName} id='dog-name' name='dog-name' 
            onChange={(e)=>setDogName(e.target.value)} required  minLength="0" maxLength="20" ></input>       
            </div> 
            <div className='add-input'>
            <label htmlFor ='age' className='add-dog-form-lable'>Dog Age *</label>
            <input type='number' value={dogAge===-1?null:dogAge} id='dog-age' name='dog-age'  
            min='0' max='30'
            onChange={(e)=>setDogAge(e.target.value)} required ></input>
            </div> 
            <div className='add-input'>
            <label htmlFor ='color' className='add-dog-form-lable'>Dog Color *</label>
            <input type='text' pattern="[A-Za-z]*" value={color} id='dog-color' name='dog-color' 
            onChange={(e)=>setColor(e.target.value)} required minLength="0" maxLength="20" ></input> 
            </div>

            <div className='add-input'>
            <label htmlFor ='weight' className='add-dog-form-lable'>Dog Weight *</label>
            <input type='number' value={weight===-1?null:weight} id='dog-weight' name='dog-weight' 
            min='0' max='50'
            onChange={(e)=>setWeight(e.target.value)} required></input>
            </div>
            <div className='add-input'>
            <label htmlFor ='birth_date' className='add-dog-form-lable'>Birth Date *:</label>
            <input type='date' value ={birth_date} id='birth-date' name='birth_date'  
            onChange={(e)=>setBirth_Date(e.target.value)} required
            min='1900-01-01' max={today}
            ></input>
            </div>   
             
            <div className='add-input-gender-img-container'>
            <img src={image_url} style={{width:150,height:100, borderRadius:10}}></img>
            <div>
            <div className='add-input'>  
            <input type='checkbox' checked= {male} id='dog-male' name='dog-male' onChange={()=>setMale(!male)} disabled={female||spayed} ></input>
            <label htmlFor ='male' className='add-dog-form-lable-not-required'>male </label>
            </div>

            <div className='add-input'>  
            <input type='checkbox' checked={female} id='dog-female' name='dog-female' onChange={()=>setFemale(!female)} disabled={male||neutered} ></input>
            <label htmlFor ='female' className='add-dog-form-lable-not-required'>female </label>
            </div>
            <div className='add-input'>  
            <input type='checkbox' checked={neutered} id='dog-neutered' name='dog-neutered' onChange={()=>setNeutered(!neutered)} disabled={spayed||female} ></input>
            <label htmlFor ='neutered' className='add-dog-form-lable-not-required'>neutered </label>
            </div>
            <div className='add-input'>  
            <input type='checkbox' checked={spayed} id='dog-spayed' name='dog-spayed'  onChange={()=>setSpayed(!spayed)} disabled={neutered||male} ></input>
            <label htmlFor ='spayed' className='add-dog-form-lable-not-required'>spayed </label>
            </div>
            </div>
            </div>
            <div className='add-input'>  
            <input type='checkbox' checked={microchip} id='dog-microchip' name='dog-microchip'  onChange={()=>setMicrochip(!microchip)}></input>
            <label htmlFor ='microchip' className='add-dog-form-lable-not-required'>dog microchip</label>
            </div>

            <div className='add-input'>
            <label htmlFor ='breed_name' className='add-dog-form-lable'  >Dog Breed *</label>
            <input type='text' pattern="^[A-Za-z\s]*$" value={breed}  id='dog-breed' name='dog-breed' 
              placeholder='input breed name, please. English alphabet and space only' 
            onChange={(e)=>setBreed(e.target.value)} required  minLength="0" maxLength="20" ></input>   
            </div>
            <div className='add-input'>
            <label htmlFor ='description' className='add-dog-form-lable'>Dog Description *</label>
            <input type='text' value={description} id='dog-description' name='dog-description' onChange={e=>setDescription(e.target.value)} required  minLength="0" maxLength="500" ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='medical_allergies' className='add-dog-form-lable'>Dog Medical/Allergies *</label>
            <input type='text' value={medical_allergies} id='dog-medical-allergies' name='dog-medical-allergies' onChange={e=>setMedical_allergies(e.target.value)} required   minLength="0" maxLength="200" ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-name' className='add-dog-form-lable'>Owner Name *</label>
            <input type='text' value={owner_name}  id='owner-name' name='owner-name'  
            onChange={e=>setOwner_name(e.target.value)} required  minLength="0" maxLength="20" ></input>
            </div>
            <div className='add-input'>
            <label htmlFor ='owner-contact-number' className='add-dog-form-lable'>Contact Number *</label>
            <input type='number' value={owner_contact} id='owner-contact-number' name='owner-contact-number'  
             placeholder='Globally phone number applicable'      
            onChange={e=>setOwner_contact(e.target.value)}  required ></input>       
            </div>
            {error.ownerNumber?<p id='error-dog' >{error.ownerNumber}</p>:null}

            <div className='add-input'>
            <label htmlFor ='owner-email' className='add-dog-form-lable'>Email *</label>
            <input type='email' value={owner_email}  id='owner-email' name='owner-email' onChange={e=>setOwner_email(e.target.value)} required></input>
            </div>
            <div className='add-input'>
            <label htmlFor ='owner-address' className='add-dog-form-lable'>Address *</label>
            <div className='ownder-address-lines'>
                
            <input type='text' value={owner_address_one} id='owner-address-line-one' name='owner-address-line-one' onChange={(e)=>setOwner_address_one(e.target.value)} required  minLength="0" maxLength="50"></input>
            <input type='text' value={owner_address_two} id='owner-address-line-two' name='owner-address-line-two' 
            placeholder='this input is optional'
            onChange={(e)=>setOwner_address_two(e.target.value)}  minLength="0" maxLength="50" ></input>
           
            </div>

            </div>

            <div className='add-input'>
            <label htmlFor ='owner-city' className='add-dog-form-lable'>City *</label>
            <input type='text'   pattern="^[A-Za-z\s]*$"  value={owner_city}  id='owner-address-city' name='owner-address-city'  
              placeholder='input city name, please. English alphabet and space only'  
            onChange={e=>setOwner_city(e.target.value)} required  minLength="0" maxLength="20"></input>        
            </div>
            <div className='add-input'>
            <label htmlFor ='owner-state' className='add-dog-form-lable'>State *</label>
            <input type='text' pattern="^[A-Za-z\s]*$" value={owner_state}  id='owner-address-state' name='owner-address-state'   
               placeholder='input state name, please. English alphabet and space only' 
            onChange={e=>setOwner_state(e.target.value)} required  minLength="0" maxLength="20"></input>         
            </div>
            <div className='add-input'>
            <label htmlFor ='owner-zip-code' className='add-dog-form-lable'>Zip Code *</label>
            <input type='number' value={owner_code===0?'':owner_code}  id='owner-zip-code' name='owner-zip-code'  
            placeholder='Globally zip code applicable' 
            onChange={e=>setOwner_code(e.target.value)} required ></input>
            </div>
            {error.ownerCode?<p style={{color:'red'}}>{error.ownerCode}</p>:null}

            <div className='add-input'>
            <label htmlFor ='owner-country' className='add-dog-form-lable'>Country *</label>
            <input type='text' pattern="^[A-Za-z\s]*$" value={owner_country}  id='owner-country' name='owner-country' 
            placeholder='input country name, please. English alphabet and space only' 
            onChange={e=>setOwner_country(e.target.value)} required  minLength="0" maxLength="20"></input>           
            </div>
            <div className='add-input'>
                 <label htmlFor ="image_upload" className='add-dog-form-lable'>Upload an image *:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*"            
                onChange={handleFileChange}
                 required/>
            </div>

            </div>
            <button className='add-new-form-submit' disabled={disableButton}>Submit</button>
            </form>
        </div>
    )
}
export default AddNewDogPage;