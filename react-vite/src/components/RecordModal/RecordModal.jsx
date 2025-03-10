import { useDispatch, useSelector } from 'react-redux';
import './RecordModal.css';
import { useEffect } from 'react';
import { thunkLoadHealthRecords } from '../../redux/healthRecord';
import { useSetDogId } from '../../context/SetDogId';

function RecordModal(){
    const dispatch = useDispatch();
    const healthRecords = useSelector(state=>state.healthRecord.healthRecords);
    const {selectedDogId} = useSetDogId();
    useEffect(()=>{
        dispatch(thunkLoadHealthRecords())
    },[dispatch])

    let healthRecordArr =[];
    if(healthRecords) healthRecordArr = Object.values(healthRecords).reverse();
    let dogHealthRecord =[];
    if(healthRecordArr.length !==0) dogHealthRecord= healthRecordArr.filter(el=>el.dog_id===selectedDogId)

    return (
        <div>
            <h1>Health Records</h1>
          {
            dogHealthRecord.length !==0 ?
            dogHealthRecord.map((healthRecord,index)=>{
                return (
                    <div key={index} className="dog-note-container" >
                        <p>{healthRecord.description}</p>
                        <p>{healthRecord.treatment}</p>
                        <p>{healthRecord.vet_name}</p>
                        <p>{healthRecord.record_date.slice(0,14)}</p>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }
        </div>
    )
}
export default RecordModal