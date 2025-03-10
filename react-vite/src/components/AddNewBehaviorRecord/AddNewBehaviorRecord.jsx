import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {thunkCreateBehaviorRecord} from '../../redux/behaviorRecord';
import { useModal } from '../../context/Modal';
import './AddNewBehaviorRecord.css';


function AddNewBehaviorRecord(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state=>state.session.user)
    const [recordDate, setRecordDate] = useState('');
    const [description, setDescription] = useState('');
    const [behaviorType, setBehaviorType] = useState('');
    const [dogId, setDogId] = useState(0);
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
        const serverResponse = await dispatch(thunkCreateBehaviorRecord(data))
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
        <input type='date' id='input-behavior-record-date' name='behavior_record_date' 
        onChange={(e)=>setRecordDate(e.target.value)} required min='1900-01-01' max={today}></input>
        </div>
        <div className='add-input'>
            <label htmlFor ='description' className='add-form-lable'>Description *</label>
            <input type='text' id='input-behavior-record-description' name='description' 
            onChange={(e)=>setDescription(e.target.value)} required  minLength="0" maxLength="20"></input>
        </div>
        {/* {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null} */}
        <div className='add-input' >
            <label htmlFor ='behavior-type' className='add-form-lable'>Behavior Type *</label>
            <input type='text' id='input-behavior-record-treatment' name='behavior-type'  
            onChange={(e)=>setBehaviorType(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='dog_id' className='add-form-lable'>DogId *</label>
            <input type='text' id='input-behavior-record-dogId' name='dogId'  
            onChange={(e)=>setDogId(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
     
        </div>
        <button className='add-form-submit' >Submit</button>
        </form>
    </div>
    )
}
export default AddNewBehaviorRecord;