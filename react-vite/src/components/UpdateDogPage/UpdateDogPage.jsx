import './UpdateDogPage.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {thunkUpdateDogs} from '../../redux/dog';
import { useModal } from '../../context/Modal';

function UpdateDogPage({updateDog}){
    
    const {closeModal} = useModal()
    const [dogName,setDogName]=useState(updateDog.dog_name);
    const [dogAge,setDogAge]=useState(updateDog.age);
    const [color,setColor]=useState(updateDog.color);
    const [weight,setWeight]=useState(updateDog.weight);
    const [birth_date,setBirth_Date] = useState('')
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
    const [error,setError] = useState({
        'dogName':'',
        'dogAge':'',
        'dogWeight':'',
        'dogBreed':'',
        'dogGender':'',
        'ownerName':"",
        'ownerNumber':'',
        'ownerCity':'',
        'ownerState':'',
        'ownerCode':'',
        'ownerCountry':''
    });
    const dispatch = useDispatch();


    const handleAddDogSubmit=(e)=>{
         
          e.preventDefault();
          console.log('i am from add new dog',dogName,dogAge,color,weight,birth_date,
            male,female,neutered,spayed,microchip,breed,description,medical_allergies,
        owner_name,owner_contact,owner_address_one,owner_address_two,owner_state,
    owner_country,image);
    if(dogName.length===0||dogName.length>20) {
        const errMes ='name is too long or empty';
        setError({
            'dogName':errMes
        })
        return ;
      }
    if(dogAge<0||dogAge>30){
        const errMes ="age can't lower than 0 and max age set is 30 "
        setError({
            'dogAge':errMes
        })
        return ;
    }
    if(weight<0||weight>50){
        const errMes ="weight can't lower than 0 and max weight set is 50 "
        setError({
            'weight':errMes
        })
        return ;
    }
    if(breed.length===0||breed.length>20) {
        const errMes ='breed name is too long or empty';
        setError({
            'dogBreed':errMes
        })
        return ;
      }
    if(owner_name.length===0||owner_name.length>20) {
        const errMes ='name is too long or empty';
        setError({
            'ownerName':errMes
        })
        return ;
      }
      if(owner_contact.length<7||owner_contact.length>15) {
        const errMes ='phone is too long or too short';
        setError({
            'ownerNumber':errMes
        })
        return ;
      }
      if(owner_city.length===0||owner_city.length>20) {
        const errMes ='city name is too long';
        setError({
            'ownerCity':errMes
        })
        return ;
      }
      if(owner_state.length===0||owner_state.length>20) {
        const errMes ='state name is too long';
        setError({
            'ownerState':errMes
        })
        return ;
      }
      if(owner_code.length<4||owner_code.length>20) {
        const errMes ='zip code is too long or too short, it is set between 5 to 20';
        setError({
            'ownerCode':errMes
        })
        return ;
      }
      if(owner_country.length===0||owner_country.length>20) {
        const errMes ='country name is too long or empty';
        setError({
            'ownerCountry':errMes
        })
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

    dispatch(thunkUpdateDogs(formData,updateDog.id))
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
        <div className="update-dog-container">
           
            <form className="update-dog-form-container" onSubmit={handleAddDogSubmit}>
        
            <h1>Update a Dog</h1>
            <div>
            <div className='update-input'>
            <label htmlFor ='dog_name' className='update-dog-form-lable'>Dog Name</label>
            <input type='text' value={dogName} id='dog-name' name='dog-name' onChange={(e)=>setDogName(e.target.value)} required></input>
            {error.dogName?<p>{error.dogName}</p>:null}
            </div> 

            <div className='update-input'>
            <label htmlFor ='age' className='update-dog-form-lable'>Dog Age</label>
            <input type='number' value={dogAge===-1?null:dogAge} id='dog-update-age' name='dog-age'  onChange={(e)=>setDogAge(e.target.value)} required ></input>
            {error.dogAge?<p>{error.dogAge}</p>:null}
            </div> 

            <div className='update-input'>
            <label htmlFor ='color' className='update-dog-form-lable'>Dog Color</label>
            <input type='text' pattern="[A-Za-z]*" value={color} id='dog-update-color' name='dog-color' onChange={(e)=>setColor(e.target.value)} required></input> 
            </div>

            <div className='update-input'>
            <label htmlFor ='weight' className='update-dog-form-lable'>Dog Weight</label>
            <input type='number' value={weight===-1?null:weight} id='dog-update-weight' name='dog-weight'  onChange={(e)=>setWeight(e.target.value)} required></input>
            {error.weight?<p>{error.weight}</p>:null}
            </div>

            <div className='update-input'>
            <label htmlFor ='birth_date' className='update-dog-form-lable'>Select a Date</label>
            <input type='date' value ={birth_date} id='birth-date' name='birth_date'  onChange={(e)=>setBirth_Date(e.target.value)} required></input>
            </div>   
            <div  className='update-input-gender-img-container' >
            <img src={image_url} style={{width:150,height:100, borderRadius:10}}></img>
            <div>
            <div className='update-input'>  
            <input type='checkbox' checked= {male} id='dog-male' name='dog-male' onChange={()=>setMale(!male)} disabled={female} ></input>
            <label htmlFor ='male' className='update-dog-form-lable'>male</label>
            </div>

            <div className='update-input'>  
            <input type='checkbox' checked={female} id='dog-female' name='dog-female' onChange={()=>setFemale(!female)} disabled={male} ></input>
            <label htmlFor ='female' className='update-dog-form-lable'>female</label>
            </div>
            {error.dogGender?<p>{error.dogGender}</p>:null}
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
            <input type='text' pattern="^[A-Za-z\s]*$" value={breed}  id='dog-breed' name='dog-breed' onChange={(e)=>setBreed(e.target.value)} required></input>
            {error.dogBreed?<p>{error.dogBreed}</p>:null}
            </div>

            <div className='update-input'>
            <label htmlFor ='description' className='update-dog-form-lable'>Dog Description</label>
            <input type='text' value={description} id='dog-update-description' name='dog-description' onChange={e=>setDescription(e.target.value)} required></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='medical_allergies' className='update-dog-form-lable'>Dog Medical/Allergies</label>
            <input type='text' value={medical_allergies} id='dog-update-medical-allergies' name='dog-medical-allergies' onChange={e=>setMedical_allergies(e.target.value)} required></input>
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-name' className='update-dog-form-lable'>Owner Name</label>
            <input type='text' value={owner_name}  id='owner-update-name' name='owner-name'  onChange={e=>setOwner_name(e.target.value)} required></input>
            {error.ownerName?<p>{error.ownerName}</p>:null}
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-contact-number' className='update-dog-form-lable'>Contact Number</label>
            <input type='number' value={owner_contact} id='owner-update-contact-number' name='owner-contact-number'  onChange={e=>setOwner_contact(e.target.value)} required></input>
            {error.ownerNumber?<p>{error.ownerNumber}</p>:null}
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-email' className='update-dog-form-lable'>Email</label>
            <input type='email' value={owner_email}  id='owner-update-email' name='owner-email' onChange={e=>setOwner_email(e.target.value)} required></input>
            </div>
            <div className='update-input'>
            <label htmlFor ='owner-address' className='update-dog-form-lable'>Address</label>
            <div>
            <input type='text' value={owner_address_one} id='owner-address-line-one' name='owner-address-line-one' onChange={(e)=>setOwner_address_one(e.target.value)} required></input>
            <input type='text' value={owner_address_two} id='owner-address-line-one' name='owner-address-line-two' onChange={(e)=>setOwner_address_two(e.target.value)} ></input>
            </div>    
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-city' className='update-dog-form-lable'>City</label>
            <input type='text' value={owner_city}  id='owner-update-address-city' name='owner-address-city'   onChange={e=>setOwner_city(e.target.value)} required></input>
            {error.ownerCity?<p>{error.ownerCity}</p>:null}
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-state' className='update-dog-form-lable'>State</label>
            <input type='text' value={owner_state}  id='owner-update-address-state' name='owner-address-state'   onChange={e=>setOwner_state(e.target.value)} required></input>
            {error.ownerState?<p>{error.ownerState}</p>:null}
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-zip-code' className='update-dog-form-lable'>Zip Code</label>
            <input type='number' value={owner_code}  id='owner-update-zip-code' name='owner-zip-code'  onChange={e=>setOwner_code(e.target.value)} required></input>
            {error.ownerCode?<p>{error.ownerCode}</p>:null}
            </div>

            <div className='update-input'>
            <label htmlFor ='owner-country' className='update-dog-form-lable'>Country</label>
            <input type='text' value={owner_country}  id='owner-update-country' name='owner-country' onChange={e=>setOwner_country(e.target.value)} required></input>
            {error.ownerCountry?<p>{error.ownerCountry}</p>:null}
            </div>

            <div className='update-input'>
                 <label htmlFor ="image_upload" className='update-dog-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*" 
                onChange={handleFileChange}
                //  onChange={(e)=>setImage(e.target.files[0])}
                 />
            </div>

            </div>
            <button className='add-new-form-submit'>Submit</button>
            </form>
        </div>
    )
}
export default UpdateDogPage;