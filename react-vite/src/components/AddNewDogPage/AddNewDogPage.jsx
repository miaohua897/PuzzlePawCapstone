import './AddNewDogPage.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {thunkCreateDogs} from '../../redux/dog';
import { useModal } from '../../context/Modal';

function AddNewDogPage(){
    const {closeModal}=useModal()
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
    const [error,setError] = useState({
        'dogName':'',
        'dogAge':'',
        'dogWeight':'',
        'dogBreed':'',
        'ownerName':"",
        'ownerNumber':'',
        'ownerCity':'',
        'ownerState':'',
        'ownerCode':'',
        'ownerCountry':''
    });
    const dispatch = useDispatch()

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
          if (!male&&!female) return ;
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
    formData.append('user_id',1)

    dispatch(thunkCreateDogs(formData))
    closeModal()
  
    }

    return (
        <div className="add-new-dog-container">
           
            <form className="add-dog-form-container" onSubmit={handleAddDogSubmit}>
        
            <h1>Add a New Dog</h1>
            <div>
            <div className='add-input'>
            <label htmlFor ='dog_name' className='add-dog-form-lable'>dog name</label>
            <input type='text' value={dogName} id='dog-name' name='dog-name' onChange={(e)=>setDogName(e.target.value)} required></input>
            {error.dogName?<p>{error.dogName}</p>:null}
            </div> 

            <div className='add-input'>
            <label htmlFor ='age' className='add-dog-form-lable'>dog age</label>
            <input type='number' value={dogAge===-1?null:dogAge} id='dog-age' name='dog-age'  onChange={(e)=>setDogAge(e.target.value)} required ></input>
            {error.dogAge?<p>{error.dogAge}</p>:null}
            </div> 

            <div className='add-input'>
            <label htmlFor ='color' className='add-dog-form-lable'>dog color</label>
            <input type='text' pattern="[A-Za-z]*" value={color} id='dog-color' name='dog-color' onChange={(e)=>setColor(e.target.value)} required></input> 
            </div>

            <div className='add-input'>
            <label htmlFor ='weight' className='add-dog-form-lable'>dog weight</label>
            <input type='number' value={weight===-1?null:weight} id='dog-weight' name='dog-weight'  onChange={(e)=>setWeight(e.target.value)} required></input>
            {error.weight?<p>{error.weight}</p>:null}
            </div>

            <div className='add-input'>
            <label htmlFor ='birth_date' className='add-dog-form-lable'>select a date</label>
            <input type='date' value ={birth_date} id='birth-date' name='birth_date'  onChange={(e)=>setBirth_Date(e.target.value)} required></input>
            </div>   

            <img src='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-simonakidric-2607544.jpg' style={{width:100,height:100}}></img>

            <div className='add-input'>  
            <input type='checkbox' checked= {male} id='dog-male' name='dog-male' onChange={()=>setMale(!male)} disabled={female} ></input>
            <label htmlFor ='male' className='add-dog-form-lable'>male</label>
            </div>

            <div className='add-input'>  
            <input type='checkbox' checked={female} id='dog-female' name='dog-female' onChange={()=>setFemale(!female)} disabled={male} ></input>
            <label htmlFor ='female' className='add-dog-form-lable'>female</label>
            </div>

            <div className='add-input'>  
            <input type='checkbox' checked={neutered} id='dog-neutered' name='dog-neutered' onChange={()=>setNeutered(!neutered)} disabled={spayed||female} ></input>
            <label htmlFor ='neutered' className='add-dog-form-lable'>neutered</label>
            </div>
            <div className='add-input'>  
            <input type='checkbox' checked={spayed} id='dog-spayed' name='dog-spayed'  onChange={()=>setSpayed(!spayed)} disabled={neutered||male} ></input>
            <label htmlFor ='spayed' className='add-dog-form-lable'>spayed</label>
            </div>

            <div className='add-input'>  
            <input type='checkbox' checked={microchip} id='dog-microchip' name='dog-microchip'  onChange={()=>setMicrochip(!microchip)}></input>
            <label htmlFor ='microchip' className='add-dog-form-lable'>dog microchip</label>
            </div>

            <div className='add-input'>
            <label htmlFor ='breed_name' className='add-dog-form-lable'  >dog breed</label>
            <input type='text' pattern="[A-Za-z]*" value={breed}  id='dog-breed' name='dog-breed' onChange={(e)=>setBreed(e.target.value)} required></input>
            {error.dogBreed?<p>{error.dogBreed}</p>:null}
            </div>

            <div className='add-input'>
            <label htmlFor ='description' className='add-dog-form-lable'>dog description</label>
            <input type='text' value={description} id='dog-description' name='dog-description' onChange={e=>setDescription(e.target.value)} required></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='medical_allergies' className='add-dog-form-lable'>dog medical/allergies</label>
            <input type='text' value={medical_allergies} id='dog-medical-allergies' name='dog-medical-allergies' onChange={e=>setMedical_allergies(e.target.value)} required></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-name' className='add-dog-form-lable'>owner name</label>
            <input type='text' value={owner_name}  id='owner-name' name='owner-name'  onChange={e=>setOwner_name(e.target.value)} required></input>
            {error.ownerName?<p>{error.ownerName}</p>:null}
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-contact-number' className='add-dog-form-lable'>contact number</label>
            <input type='number' value={owner_contact} id='owner-contact-number' name='owner-contact-number'  onChange={e=>setOwner_contact(e.target.value)} required></input>
            {error.ownerNumber?<p>{error.ownerNumber}</p>:null}
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-email' className='add-dog-form-lable'>email</label>
            <input type='email' value={owner_email}  id='owner-email' name='owner-email' onChange={e=>setOwner_email(e.target.value)} required></input>
            </div>
            <div className='add-input'>
            <label htmlFor ='owner-address' className='add-dog-form-lable'>address</label>
            <input type='text' value={owner_address_one} id='owner-address-line-one' name='owner-address-line-one' onChange={(e)=>setOwner_address_one(e.target.value)} required></input>
            <input type='text' value={owner_address_two} id='owner-address-line-two' name='owner-address-line-two' onChange={(e)=>setOwner_address_two(e.target.value)} ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-city' className='add-dog-form-lable'>city</label>
            <input type='text' value={owner_city}  id='owner-address-city' name='owner-address-city'   onChange={e=>setOwner_city(e.target.value)} required></input>
            {error.ownerCity?<p>{error.ownerCity}</p>:null}
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-state' className='add-dog-form-lable'>state</label>
            <input type='text' value={owner_state}  id='owner-address-state' name='owner-address-state'   onChange={e=>setOwner_state(e.target.value)} required></input>
            {error.ownerState?<p>{error.ownerState}</p>:null}
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-zip-code' className='add-dog-form-lable'>zip code</label>
            <input type='number' value={owner_code}  id='owner-zip-code' name='owner-zip-code'  onChange={e=>setOwner_code(e.target.value)} required></input>
            {error.ownerCode?<p>{error.ownerCode}</p>:null}
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-country' className='add-dog-form-lable'>country</label>
            <input type='text' value={owner_country}  id='owner-country' name='owner-country' onChange={e=>setOwner_country(e.target.value)} required></input>
            {error.ownerCountry?<p>{error.ownerCountry}</p>:null}
            </div>

            <div className='add-input'>
                 <label htmlFor ="image_upload" className='add-dog-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*"  onChange={(e)=>setImage(e.target.files[0])} required/>
            </div>

            </div>
            <button className='add-new-form-submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddNewDogPage;