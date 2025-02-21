import './AddNewDogPage.css';

function AddNewDogPage(){

    return (
        <div className="add-new-dog-container">
           
            <form className="add-dog-form-container" >
        
            <h1>Add a New Dog</h1>
            <div>
            <div className='add-input'>
            <label htmlFor ='dog_name' className='add-dog-form-lable'>dog name</label>
            <input type='text' id='dog-name' name='dog-name' ></input>
            </div> 

            <div className='add-input'>
            <label htmlFor ='age' className='add-dog-form-lable'>dog age</label>
            <input type='text' id='dog-age' name='dog-age' ></input>
            </div> 

            <div className='add-input'>
            <label htmlFor ='color' className='add-dog-form-lable'>dog color</label>
            <input type='text' id='dog-color' name='dog-color' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='weight' className='add-dog-form-lable'>dog weight</label>
            <input type='text' id='dog-weight' name='dog-weight' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='birth_date' className='add-dog-form-lable'>select a date</label>
            <input type='date' id='birth-date' name='birth_date' ></input>
            </div>   

            <img src='https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/pexels-simonakidric-2607544.jpg' style={{width:100,height:100}}></img>

            <div className='add-input'>  
            <input type='checkbox' id='dog-male' name='dog-male' ></input>
            <label htmlFor ='male' className='add-dog-form-lable'>male</label>
            </div>

            <div className='add-input'>  
            <input type='checkbox' id='dog-female' name='dog-female' ></input>
            <label htmlFor ='female' className='add-dog-form-lable'>female</label>
            </div>

            <div className='add-input'>  
            <input type='checkbox' id='dog-neutered' name='dog-neutered' ></input>
            <label htmlFor ='neutered' className='add-dog-form-lable'>neutered</label>
            </div>
            <div className='add-input'>  
            <input type='checkbox' id='dog-spayed' name='dog-spayed' ></input>
            <label htmlFor ='spayed' className='add-dog-form-lable'>spayed</label>
            </div>

            <div className='add-input'>  
            <input type='checkbox' id='dog-microchip' name='dog-microchip' ></input>
            <label htmlFor ='microchip' className='add-dog-form-lable'>dog microchip</label>
            </div>

            <div className='add-input'>
            <label htmlFor ='breed' className='add-dog-form-lable'>dog breed</label>
            <input type='text' id='dog-breed' name='dog-breed' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='description' className='add-dog-form-lable'>dog description</label>
            <input type='text' id='dog-description' name='dog-description' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='medical_allergies' className='add-dog-form-lable'>dog medical/allergies</label>
            <input type='text' id='dog-medical-allergies' name='dog-medical-allergies' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-name' className='add-dog-form-lable'>owner name</label>
            <input type='text' id='owner-name' name='owner-name' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-contact-number' className='add-dog-form-lable'>contact number</label>
            <input type='text' id='owner-contact-number' name='owner-contact-number' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-email' className='add-dog-form-lable'>email</label>
            <input type='text' id='owner-email' name='owner-email' ></input>
            </div>
            <div className='add-input'>
            <label htmlFor ='owner-address' className='add-dog-form-lable'>address</label>
            <input type='text' id='owner-address-line-one' name='owner-address-line-one' ></input>
            <input type='text' id='owner-address-line-two' name='owner-address-line-two' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-state' className='add-dog-form-lable'>state</label>
            <input type='text' id='owner-address-state' name='owner-address-state' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-zip-code' className='add-dog-form-lable'>zip code</label>
            <input type='text' id='owner-zip-code' name='owner-zip-code' ></input>
            </div>

            <div className='add-input'>
            <label htmlFor ='owner-country' className='add-dog-form-lable'>country</label>
            <input type='text' id='owner-country' name='owner-country' ></input>
            </div>

            <div className='add-input'>
                 <label htmlFor ="image_upload" className='add-dog-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload" name="image_url" accept="image/*"  />
            </div>

            </div>
            <button className='add-new-form-submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddNewDogPage;