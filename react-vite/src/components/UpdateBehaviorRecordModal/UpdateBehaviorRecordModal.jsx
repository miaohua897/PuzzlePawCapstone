import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {thunkUpdateBehaviorRecord} from '../../redux/behaviorRecord';
import { useModal } from '../../context/Modal';
import './UpdateBehaviorRecordModal.css';


function UpdateBehaviorRecordModal({behaviorRecord, behavior_record_id}){
    const dispatch = useDispatch()
    const recordDateObject = new Date(behaviorRecord.behavior_record_date)
    const formattedDate = recordDateObject.toISOString().split('T')[0];   
    const [recordDate, setRecordDate] = useState(formattedDate);
    const [description, setDescription] = useState(behaviorRecord.description);
    const [behaviorType, setBehaviorType] = useState(behaviorRecord.behavior_type);
    const [dogId, setDogId] = useState(behaviorRecord.dog_id);
    const [errorServer,setErrorServer] = useState({});
    const {closeModal} = useModal();

    const today = new Date().toISOString().split('T')[0];

    const handleAddBehaviorRecordSubmit=async(e)=>{
        e.preventDefault()
        const data ={
            "behavior_record_date":recordDate,
            "description":description,
            'behavior_type':behaviorType,
            'dog_id':dogId
        }
        const serverResponse = await dispatch(thunkUpdateBehaviorRecord(data,behavior_record_id))
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
        onSubmit={handleAddBehaviorRecordSubmit}
        >
        <h1>Add a New Behavior Record</h1>
        <p id ='photo-required-message'>Required fields are in red and marked with an *</p>
        {errorServer.server? 
        errorServer.server.map((error,index)=>{
            return  <p  key={index}  id='photo-error'>{error}</p>
        })
        :null  
        }
        <div>
        <div className='add-input'>
        <label htmlFor ='behavior_record_date' className='add-form-lable'>Behavior record written date *</label>
        <input type='date' id='input-behavior-record-date' name='behavior_record_date' value={recordDate}
        onChange={(e)=>setRecordDate(e.target.value)} required min='1900-01-01' max={today}></input>
        </div>
        <div className='add-input'>
            <label htmlFor ='description' className='add-form-lable'>Description *</label>
            <input type='text' id='input-behavior-record-description' name='description'  value={description}
            onChange={(e)=>setDescription(e.target.value)} required  minLength="0" maxLength="20"></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='behavior-type' className='add-form-lable'>Behavior Type *</label>
            <input type='text' id='input-behavior-record-treatment' name='behavior-type'  value={behaviorType}
            onChange={(e)=>setBehaviorType(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='dog_id' className='add-form-lable'>DogId *</label>
            <input type='text' id='input-behavior-record-dogId' name='dogId'  value={dogId}
            onChange={(e)=>setDogId(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
     
        </div>
        <button className='add-form-submit' >Submit</button>
        </form>
    </div>
    )
}
export default UpdateBehaviorRecordModal;