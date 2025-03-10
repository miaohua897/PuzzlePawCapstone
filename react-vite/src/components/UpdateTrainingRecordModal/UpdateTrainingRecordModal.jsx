import {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {thunkUpdateTrainingRecord} from '../../redux/trainingRecord';
import { useModal } from '../../context/Modal';
import './UpdateTrainingRecordModal.css';


function UpdateTrainingRecordModal({trainingRecord, training_record_id}){
    const dispatch = useDispatch()
    const navigator = useNavigate();
    const sessionUser = useSelector(state=>state.session.user)

    const recordDateObject = new Date(trainingRecord.training_date)
    const formattedDate = recordDateObject.toISOString().split('T')[0];

    const [recordDate, setRecordDate] = useState(formattedDate);
    const [trainingType , setTrainingType] = useState(trainingRecord.training_type);
    const [notes, setNotes] = useState(trainingRecord.notes);
    const [trainerName, setTrainerName] = useState(trainingRecord.trainer_name)
    const [dogId, setDogId] = useState(trainingRecord.dog_id);
    const [errorServer,setErrorServer] = useState({});
    const {closeModal} = useModal();

    const today = new Date().toISOString().split('T')[0];

    const handleAddTrainingRecordSubmit=async(e)=>{
        e.preventDefault()
        const data ={
            "training_date":recordDate,
            "training_type":trainingType,
            'notes':notes,
            'dog_id':dogId,
            'trainer_name':trainerName
        }
        const serverResponse = await dispatch(thunkUpdateTrainingRecord(data,training_record_id))
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
    
    if(!sessionUser) return navigator('/');

    return (
        <div className="update-container">
           
        <form className="add-form-container" 
        onSubmit={handleAddTrainingRecordSubmit}
        >
        <h1>Add a New Training Record</h1>
        <p id ='photo-required-message'>Required fields are in red and marked with an *</p>
        {errorServer.server? 
        errorServer.server.map((error,index)=>{
            return  <p  key={index}  id='photo-error'>{error}</p>
        })
        :null  
        }
        <div>
        <div className='add-input'>
        <label htmlFor ='training_record_date' className='add-form-lable'>Training record written date *</label>
        <input type='date' id='input-training-record-date' name='training_record_date'  value={recordDate}
        onChange={(e)=>setRecordDate(e.target.value)} required min='1900-01-01' max={today}></input>
        </div>
        <div className='add-input'>
            <label htmlFor ='training-type' className='add-form-lable'>Training Type *</label>
            <input type='text' id='input-health-record-training-type' name='training-type'  value={trainingType}
            onChange={(e)=>setTrainingType(e.target.value)} required  minLength="0" maxLength="20"></input>
        </div>
        {/* {errorTitle.length !==0 ? <p id='photo-error' >{errorTitle}</p> : null} */}
        <div className='add-input' >
            <label htmlFor ='notes' className='add-form-lable'>Notes *</label>
            <input type='text' id='input-training-record-notes' name='notes'   value={notes}
            onChange={(e)=>setNotes(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='trainer_name' className='add-form-lable'>Trainer Name *</label>
            <input type='text' id='input-trainiing-record-trainer-name' name='trainer-name'  value={trainerName}
            onChange={(e)=>setTrainerName(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
        <div className='add-input' >
            <label htmlFor ='dog_id' className='add-form-lable'>DogId *</label>
            <input type='text' id='input-training-record-dogId' name='dogId'  value={dogId}
            onChange={(e)=>setDogId(e.target.value)} required  minLength="0" maxLength="500" ></input>
        </div>
     
        </div>
        <button className='add-form-submit' >Submit</button>
        </form>
    </div>
    )
}
export default UpdateTrainingRecordModal;