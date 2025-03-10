import { useDispatch, useSelector } from 'react-redux';
import './RecordModal.css';
import { useEffect } from 'react';
import { thunkLoadHealthRecords } from '../../redux/healthRecord';
import { useSetDogId } from '../../context/SetDogId';
import { thunkLoadTrainingRecords } from '../../redux/trainingRecord';
import { thunkLoadBehaviorRecords } from '../../redux/behaviorRecord';
import {thunkLoadDogs} from '../../redux/dog';
import {FaArrowLeft} from 'react-icons/fa';
import SideBarRecords from './SideBarRecords';
import { useSideBarStatus } from "../../context/SideBar";

function RecordModal(){
    const dispatch = useDispatch();
    const healthRecords = useSelector(state=>state.healthRecord.healthRecords);
    const trainingRecords = useSelector(state=>state.trainingRecord.trainingRecords);
    const behaviorRecords = useSelector(state=> state.behaviorRecord.behaviorRecords);
    const dogs = useSelector(state=>state.dog.dog);

    const {selectedDogId} = useSetDogId();
    const {setIsSideBarOpen} = useSideBarStatus();

    useEffect(()=>{
        dispatch(thunkLoadHealthRecords())
        dispatch(thunkLoadTrainingRecords())
        dispatch(thunkLoadBehaviorRecords())
        dispatch(thunkLoadDogs()) 
    },[dispatch])

    let healthRecordArr =[];
    if(healthRecords) healthRecordArr = Object.values(healthRecords).reverse();
    let dogHealthRecord =[];
    if(healthRecordArr.length !==0) dogHealthRecord= healthRecordArr.filter(el=>el.dog_id===selectedDogId)
    
    let trainingRecordArr=[];
    if(trainingRecords) trainingRecordArr=Object.values(trainingRecords).reverse();
    let dogTrainingRecord=[];
    if(trainingRecordArr.length !==0) dogTrainingRecord = trainingRecordArr.filter(el=>el.dog_id===selectedDogId);

    let behaviorRecordArr =[];
    if (behaviorRecords) behaviorRecordArr = Object.values(behaviorRecords).reverse();
    let dogbehaviorRecords =[];
    if(behaviorRecordArr.length !==0) dogbehaviorRecords = behaviorRecordArr.filter(el=>el.dog_id===selectedDogId);
    let dogsArr =[];
    if(dogs) dogsArr = Object.values(dogs);

    return (
        <div>
            {
                dogsArr.length !==0?
                <h1 id='beloved-dog-title'>My Beloved {dogsArr[selectedDogId-1].dog_name}&apos;s Records</h1>
                : <h1>Post your first dog</h1>

            }
            
            <div className="sidebar-button-container">
                <button className='sidebar-button' onClick={()=>{
                    setIsSideBarOpen(true)
                    }} >
                <FaArrowLeft color='darkblue'/>
                </button>
            </div>  
            <SideBarRecords  dogsArr={dogsArr} />
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
            <h1>Training Records</h1>
          {
            dogTrainingRecord.length !==0 ?
            dogTrainingRecord.map((trainingRecord,index)=>{
                return (
                    <div key={index} className="dog-note-container" >
                        <p>{trainingRecord.training_type}</p>
                        <p>{trainingRecord.notes}</p>
                        <p>{trainingRecord.trainer_name}</p>
                        <p>{trainingRecord.training_date.slice(0,14)}</p>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }
          <h1>Behavior Records</h1>
          {
            dogbehaviorRecords.length !==0 ?
            dogbehaviorRecords.map((behaviorRecord,index)=>{
                return (
                    <div key={index} className="dog-note-container" >
                        <p>{behaviorRecord.behavior_type}</p>
                        <p>{behaviorRecord.description}</p>
                        <p>{behaviorRecord.behavior_record_date.slice(0,14)}</p>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }

        </div>
    )
}
export default RecordModal