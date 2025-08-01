import { useDispatch, useSelector } from 'react-redux';
import './RecordModal.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { thunkLoadHealthRecords } from '../../redux/healthRecord';
import { useSetDogId } from '../../context/SetDogId';
import { thunkLoadTrainingRecords } from '../../redux/trainingRecord';
import { thunkLoadBehaviorRecords } from '../../redux/behaviorRecord';
import {thunkLoadDogs} from '../../redux/dog';
import { FaTrash, FaEdit} from 'react-icons/fa';
import SideBarRecords from './SideBarRecords';
import OpenModalButton  from '../OpenModalButton';
import DeleteTrainingRecordModal from '../DeleteTrainingRecordModal';
import DeleteHealthRecordModal from '../DeleteHealthRecordModal';
import DeleteBehaviorRecordModal from '../DeleteBehaviorRecordModal';
import AddNewHealthRecord from '../AddNewHealthRecord/AddNewHealthRecord';
import AddNewBehaviorRecord from '../AddNewBehaviorRecord';
import AddNewTrainingRecord from '../AddNewTrainingRecord';
import UpdateHealthRecordModal from '../UpdateHealthRecordModal';
import UpdateBehaviorRecordModal from '../UpdateBehaviorRecordModal';
import UpdateTrainingRecordModal from '../UpdateTrainingRecordModal';
import SearchBar from "../SearchBar/SearchBar"; 

function RecordModal(){
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const sessionUser = useSelector((state) => state.session.user);
    const healthRecords = useSelector(state=>state.healthRecord.healthRecords);
    const trainingRecords = useSelector(state=>state.trainingRecord.trainingRecords);
    const behaviorRecords = useSelector(state=> state.behaviorRecord.behaviorRecords);
    const dogs = useSelector(state=>state.dog.dog);
    const {selectedDogId} = useSetDogId();

    useEffect(()=>{
        dispatch(thunkLoadHealthRecords())
        dispatch(thunkLoadTrainingRecords())
        dispatch(thunkLoadBehaviorRecords())
        dispatch(thunkLoadDogs()) 
    },[dispatch])

    if(!sessionUser) return navigator('/');

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
        <div className='records-container'>
            <div>
            {
                dogsArr.length !==0?
                <h1 id='beloved-dog-title'>My Beloved {dogsArr[selectedDogId-1].dog_name}&apos;s Records</h1>
                : <h1>Post your first dog</h1>

            }
            </div>   
             <SearchBar />   
            <SideBarRecords  dogsArr={dogsArr} />
            <div className='create-record-container'>
                <h1>Health Records</h1>
                <OpenModalButton 
                buttonText="+"
                className='dog-add-new-dog'
                modalComponent={<AddNewHealthRecord />}/>
            </div>
           
          {
            dogHealthRecord.length !==0 ?
            dogHealthRecord.map((healthRecord,index)=>{
                return (
                    <div key={index} className="dog-records-container" >
                        <div className='records-sub-container'>
                        <strong>Description:  </strong><span>{healthRecord.description}</span> 
                        </div>
                        <div className='records-sub-container'>
                        <strong>Treatment:  </strong><span>{healthRecord.treatment}</span>
                        </div>
                        <div className='records-sub-container'>
                            <strong>Vet Name:  </strong> <span>{healthRecord.vet_name}</span>
                        </div>
                        <div className='records-sub-container'>
                            <strong>Record Date</strong>  <span>{healthRecord.record_date.slice(0,14)}</span>
                        </div>
                       
                            <div className="note-update-delete-container">
                            <OpenModalButton 
                                    buttonText= {< FaEdit/>}
                                    className='note-update-icon'
                                    modalComponent={<UpdateHealthRecordModal healthRecord={healthRecord} health_record_id={healthRecord.id} />}/>
                            <OpenModalButton 
                                    buttonText={<FaTrash />}
                                    className='note-delete-icon'
                                    modalComponent={<DeleteHealthRecordModal health_record_id={healthRecord.id}  />} />
                
                            </div>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }
           <div className='create-record-container'>
                <h1>Training Records</h1>
                <OpenModalButton 
                buttonText="+"
                className='dog-add-new-dog'
                modalComponent={<AddNewTrainingRecord />}/>
           </div>
          
          {
            dogTrainingRecord.length !==0 ?
            dogTrainingRecord.map((trainingRecord,index)=>{
                return (
                    <div key={index} className="dog-records-container" >
                        <div className='records-sub-container'>
                            <strong>Training Type:  </strong> <span>{trainingRecord.training_type}</span>
                        </div>
                        <div className='records-sub-container'>
                            <strong>Notes:  </strong> <span>{trainingRecord.notes}</span>
                        </div>
                        <div className='records-sub-container'>
                            <strong>Trainer Name:  </strong> <span>{trainingRecord.trainer_name}</span>
                        </div>
                        <div className='records-sub-container'>
                            <strong>Training Date</strong> <span>{trainingRecord.training_date.slice(0,14)}</span>
                        </div>
                        
                        <div className="note-update-delete-container">
                            <OpenModalButton 
                                    buttonText= {< FaEdit/>}
                                    className='note-update-icon'
                                    modalComponent={<UpdateTrainingRecordModal trainingRecord ={trainingRecord} training_record_id={trainingRecord.id} />}/>
                            <OpenModalButton 
                                    buttonText={<FaTrash />}
                                    className='note-delete-icon'
                                    modalComponent={<DeleteTrainingRecordModal training_record_id={trainingRecord.id}  />} />
                
                            </div>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }
          <div className='create-record-container'>
            <h1>Behavior Records</h1>
            <OpenModalButton 
                buttonText="+"
                className='dog-add-new-dog'
                modalComponent={<AddNewBehaviorRecord />}/>
          </div>
        
          {
            dogbehaviorRecords.length !==0 ?
            dogbehaviorRecords.map((behaviorRecord,index)=>{
                return (
                    <div key={index} className="dog-records-container" >
                        <div className='records-sub-container'>
                            <strong>Behavior Type:  </strong><span>{behaviorRecord.behavior_type}</span>
                        </div>
                        <div className='records-sub-container'>
                            <strong>Description:  </strong><span>{behaviorRecord.description}</span>
                        </div>
                        <div className='records-sub-container'>
                            <strong>Behavior Record:  </strong>  <span>{behaviorRecord.behavior_record_date.slice(0,14)}</span>
                        </div>
                       
                          <div className="note-update-delete-container">
                            <OpenModalButton 
                                    buttonText= {< FaEdit/>}
                                    className='note-update-icon'
                                    modalComponent={<UpdateBehaviorRecordModal behaviorRecord ={behaviorRecord} behavior_record_id={behaviorRecord.id} />}/>
                            <OpenModalButton 
                                    buttonText={<FaTrash />}
                                    className='note-delete-icon'
                                    modalComponent={<DeleteBehaviorRecordModal behavior_record_id={behaviorRecord.id}  />} />
                
                            </div>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }
        </div>
    )
}
export default RecordModal