import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {thunkUpdateDogs} from '../../redux/dog';
import { useModal } from '../../context/Modal';
import './UpdateDogPage.css';

function UpdateDogPage({updateDog}){

    const {closeModal} = useModal()
    const dispatch = useDispatch();
    const birthDataObj = new Date(updateDog.birth_date);
    const [dogName,setDogName]=useState(updateDog.dog_name);
    const [dogAge,setDogAge]=useState(updateDog.age);
    const [color,setColor]=useState(updateDog.color);
    const [weight,setWeight]=useState(updateDog.weight);
    const [birth_date,setBirth_Date] = useState(birthDataObj.toISOString().split('T')[0])
    const [male,setMale]=useState(false);
    const [female,setFemale]=useState(false);
    const [neutered,setNeutered]=useState(false);
    const [spayed,setSpayed]=useState(false);
    const [microchip,setMicrochip]=useState(false);
    const [breed,setBreed]=useState(updateDog.breed_name)
    const [description,setDescription]=useState(updateDog.description)
    const [medical_allergies,setMedical_allergies]=useState(updateDog.medical_allergies);
    const [owner_name,setOwner_name] = useState(updateDog.owner.username);
    const [owner_contact,setOwner_contact]=useState(updateDog.owner_phone_number)
    const [owner_email,setOwner_email]=useState(updateDog.owner_email)
    const [owner_address_one,setOwner_address_one]=useState(updateDog.owner_address_line_one)
    const [owner_address_two,setOwner_address_two]=useState(updateDog.owner_address_line_two)
    const [owner_state,setOwner_state]=useState(updateDog.owner_address_state)
    const [owner_code,setOwner_code]=useState(updateDog.owner_address_zip_code);
    const [owner_country,setOwner_country]=useState(updateDog.owner_country);
    const [owner_city,setOwner_city] = useState(updateDog.owner_address_city)
    const [image,setImage]=useState('');
    const [image_url,setImage_url]=useState(updateDog.image_url);
    const [error,setError] = useState({ 'ownerNumber':'', 'ownerCode':'',});
    const [errorServer,setErrorServer] = useState({})
    const [disableButton,setDisableButton]=useState(false);
    const today = new Date().toISOString().split('T')[0];
    const handleAddDogSubmit= async(e)=>{
         
      e.preventDefault();
      setDisableButton(true)

      if(owner_contact.length<7||owner_contact.length>15) {
        const errMes ='phone is too long or too short';
        setError({
            'ownerNumber':errMes
        })
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
    formData.append('microchip',updateDog.microchip)
    formData.append('neutered_spayed',neutered_spayed)
    formData.append('color',color)
    formData.append('weight',weight)
    if(image.length !==0)
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
    formData.append('user_id',updateDog.owner.id)

    const serverResponse = await dispatch(thunkUpdateDogs(formData,updateDog.id));
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
        <div className="update-dog-container">
           
            <form className="update-dog-form-container" onSubmit={handleAddDogSubmit}>
        
            <h1>Update a Dog</h1>
            {errorServer.server? 
            errorServer.server.map((error,index)=>{
                return  <p  key={index}  id='photo-error'>{error}</p>
            })
            :null  
            }
            <div>
            <div className='update-input'>
            <label htmlFor ='dog_name' className='update-dog-form-lable'>Dog Name</label>
            <input type='text' value={dogName} id='dog-name' name='dog-name' 
            onChange={(e)=>setDogName(e.target.value)} required
            minLength="0" maxLength="20"
            ></input>          
            </div> 

            <div className='update-input'>
            <label htmlFor ='age' className='update-dog-form-lable'>Dog Age</label>
            <input type='number' value={dogAge===-1?null:dogAge} id='dog-update-age' name='dog-age'  
             min='0' max='30'
            onChange={(e)=>setDogAge(e.target.value)} required ></input>          
            </div> 

            <div className='update-input'>
            <label htmlFor ='color' className='update-dog-form-lable'>Dog Color</label>
            <input type='text' pattern="[A-Za-z]*" value={color} id='dog-update-color' name='dog-color' 
            onChange={(e)=>setColor(e.target.value)} required  minLength="0" maxLength="20" ></input> 
            </div>

            <div className='update-input'>
            <label htmlFor ='weight' className='update-dog-form-lable'>Dog Weight</label>
            <input type='number' value={weight===-1?null:weight} id='dog-update-weight' name='dog-weight'  
            
            onChange={(e)=>setWeight(e.target.value)} required   min='0' max='50'></input>           
            </div>

            <div className='update-input'>
            <label htmlFor ='birth_date' className='update-dog-form-lable'>Brith Date:</label>
            <input type='date' value ={birth_date} id='update-birth-date' name='birth_date'  
            onChange={(e)=>setBirth_Date(e.target.value)} required min='1900-01-01' max={today} ></input>
            </div>   
            <div  className='update-input-gender-img-container' >
            <img src={image_url} style={{width:150,height:100, borderRadius:10}}></img>
            <div>
            <div className='update-input'>  
            <input type='checkbox' checked= {male} id='dog-male' name='dog-male' onChange={()=>setMale(!male)} disabled={female||spayed} ></input>
            <label htmlFor ='male' className='update-dog-form-lable'>male</label>
            </div>

            <div className='update-input'>  
            <input type='checkbox' checked={female} id='dog-female' name='dog-female' onChange={()=>setFemale(!female)} disabled={male||neutered} ></input>
            <label htmlFor ='female' className='update-dog-form-lable'>female</label>
            </div>
            {error.dogGender?<p id='error-dog' >{error.dogGender}</p>:null}
            <div className='update-input'>  
            <input type='checkbox' checked={neutered} id='dog-neutered' name='dog-neutered' onChange={()=>setNeutered(!neutered)} disabled={spayed||female} ></input>
            <label htmlFor ='neutered' className='update-dog-form-lable'>neutered</label>
            </div>
            <div className='update-input'>  
            <input type='checkbox' checked={spayed} id='dog-spayed' name='dog-spayed'  onChange={()=>setSpayed(!spayed)} disabled={neutered||male} ></input>
            <label htmlFor ='spayed' className='update-dog-form-lable'>spayed</label>
            </div>

            </div>

            </div>

            <div className='update-input'>  
            <input type='checkbox' checked={microchip} id='dog-microchip' name='dog-microchip'  onChange={()=>setMicrochip(!microchip)}></input>
            <label htmlFor ='microchip' className='update-dog-form-lable'>dog microchip</label>
            </div>

            <div className='update-input'>
            <label htmlFor ='breed_name' className='update-dog-form-lable'  >Dog Breed</label>
            <input type='text' pattern="^[A-Za-z\s]*$" value={breed}  id='dog-breed' name='dog-breed' 
            placeholder='input a breed name, please. English alphabet and space only'
            onChange={(e)=>setBreed(e.target.value)} required  minLength="0" maxLength="20"></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='description' className='update-dog-form-lable'>Dog Description</label>
            <input type='text' value={description} id='dog-update-description' name='dog-description' 
            onChange={e=>setDescription(e.target.value)} required  minLength="0" maxLength="500"></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='medical_allergies' className='update-dog-form-lable'>Dog Medical/Allergies</label>
            <input type='text' value={medical_allergies} id='dog-update-medical-allergies' name='dog-medical-allergies' 
            onChange={e=>setMedical_allergies(e.target.value)} required
             minLength="0" maxLength="200"
            ></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-name' className='update-dog-form-lable'>Owner Name</label>
            <input type='text' value={owner_name}  id='owner-update-name' name='owner-name'  
            onChange={e=>setOwner_name(e.target.value)} required  minLength="0" maxLength="20"></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-contact-number' className='update-dog-form-lable'>Contact Number</label>
            <input type='number' value={owner_contact} id='owner-update-contact-number' name='owner-contact-number'  
             placeholder='Globally phone number applicable' 
            onChange={e=>setOwner_contact(e.target.value)} required></input>
            </div>
            {error.ownerNumber?<p>{error.ownerNumber}</p>:null}

            <div className='update-input'>
            <label htmlFor ='owner-email' className='update-dog-form-lable'>Email</label>
            <input type='email' value={owner_email}  id='owner-update-email' name='owner-email' onChange={e=>setOwner_email(e.target.value)} required></input>
            </div>
            <div className='update-input'>
            <label htmlFor ='owner-address' className='update-dog-form-lable'>Address</label>
            <div>
            <input type='text' value={owner_address_one} id='owner-address-line-one' name='owner-address-line-one' 
            onChange={(e)=>setOwner_address_one(e.target.value)} required  minLength="0" maxLength="50"></input>
            <input type='text' value={owner_address_two} id='owner-address-line-one' name='owner-address-line-two' 
            onChange={(e)=>setOwner_address_two(e.target.value)}  minLength="0" maxLength="50" ></input>
            </div>    
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-city' className='update-dog-form-lable'>City</label>
            <input type='text'   pattern="^[A-Za-z\s]*$"  value={owner_city}  id='owner-update-address-city' name='owner-address-city' 
              placeholder='input city name, please. English alphabet and space only'  
            onChange={e=>setOwner_city(e.target.value)} required  minLength="0" maxLength="20"></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-state' className='update-dog-form-lable'>State</label>
            <input type='text'  pattern="^[A-Za-z\s]*$"  value={owner_state}  id='owner-update-address-state' name='owner-address-state'  
            placeholder='input state name, please. English alphabet and space only' 
            onChange={e=>setOwner_state(e.target.value)} required  minLength="0" maxLength="20" ></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-zip-code' className='update-dog-form-lable'>Zip Code</label>
            <input type='number' value={owner_code}  id='owner-update-zip-code' name='owner-zip-code'  
              placeholder='Globally zip code applicable' 
            onChange={e=>setOwner_code(e.target.value)} required></input>
            </div>
            {error.ownerCode?<p>{error.ownerCode}</p>:null}

            <div className='update-input'>
            <label htmlFor ='owner-country' className='update-dog-form-lable'>Country</label>
            <input type='text' pattern="^[A-Za-z\s]*$" value={owner_country}  id='owner-update-country' name='owner-country' 
             placeholder='input country name, please. English alphabet and space only' 
            onChange={e=>setOwner_country(e.target.value)} required  minLength="0" maxLength="20" ></input>
            </div>

            <div className='update-input'>
                 <label htmlFor ="image_upload" className='update-dog-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*" 
                onChange={handleFileChange}/>
            </div>

            </div>
            <button className='add-new-form-submit' disabled={disableButton}>Submit</button>
            </form>
        </div>
    )
}
export default UpdateDogPage;