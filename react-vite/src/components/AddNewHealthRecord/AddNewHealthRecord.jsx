import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {thunkCreateHealthRecord} from '../../redux/healthRecord';
import { useModal } from '../../context/Modal';
import './AddNewHealthRecord.css';


function AddNewHealthRecord(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state=>state.session.user)
    const [recordDate, setRecordDate] = useState('');
    const [description, setDescription] = useState('');
    const [treatment, setTreatment] = useState('');
    const [vet_name, setVet_name] = useState('')
    const [dogId, setDogId] = useState(0);
    const [errorServer,setErrorServer] = useState({});
    const {closeModal} = useModal();

    const today = new Date().toISOString().split('T')[0];

    const handleAddHealthRecordSubmit=async(e)=>{
        e.preventDefault()
        const data ={
            "record_date":recordDate,
            "description":description,
            'treatment':treatment,
            'dog_id':dogId,
            'vet_name':vet_name
        }
        const serverResponse = await dispatch(thunkCreateHealthRecord(data))
        if (serverResponse) {
            const errorKey = Object.keys(serverResponse);
            const errorValue = Object.values(serverResponse);
            const errorArr=[]
            for (let i=0;i<errorKey.length;i++){
                errorArr.push(`${errorKey[i]}:${errorValue[i]}`)
            }
            setErrorServer({'server':errorArr});
           
          
          } else {
            closeModal();
       
          }
    }


    return (
        <div className="update-container">
           
        <form className="add-form-container" 
        onSubmit={handleAddHealthRecordSubmit}
        >
        <h1>Add a New Health Record</h1>
        <p id ='photo-required-message'>Required fields are in red and marked with an *</p>
        {errorServer.server? 
        errorServer.server.map((error,index)=>{
            return  <p  key={index}  id='photo-error'>{error}</p>
        })
        :null  
        }
        <div>
        <div className='add-input'>
        <label htmlFor ='health_record_date' className='add-form-lable'>Health record written date *</label>
        <input type='date' id='input-health-record-date' name='health_record_date' 
        onChange={(e)=>setRecordDate(e.target.value)} required min='1900-01-01' max={today}></input>
        </div>
        <div className='add-input'>
            <label htmlFor ='description' className='add-form-lable'>Description *</label>
            <input type='text' id='input-health-record-description' name='description' 
            onChange={(e)=>setDescription(e.target.value)} required  minLength="0" maxLength="20"></input>
        </div>
        {/* {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null} */}
        <div className='add-input' >
            <label htmlFor ='treatment' className='add-form-lable'>Treatment *</label>
            <input type='text' id='input-health-record-treatment' name='treatment'  
            onChange={(e)=>setTreatment(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='vet_name' className='add-form-lable'>Vet Name *</label>
            <input type='text' id='input-health-record-vet_name' name='vet_name'  
            onChange={(e)=>setVet_name(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='dog_id' className='add-form-lable'>DogId *</label>
            <input type='text' id='input-health-record-dogId' name='dogId'  
            onChange={(e)=>setDogId(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
     
        </div>
        <button className='add-form-submit' >Submit</button>
        </form>
    </div>
    )
}
export default AddNewHealthRecord;