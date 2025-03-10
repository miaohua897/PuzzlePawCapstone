import { useDispatch, useSelector } from 'react-redux';
import './RecordModal.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { thunkLoadHealthRecords } from '../../redux/healthRecord';
import { useSetDogId } from '../../context/SetDogId';
import { thunkLoadTrainingRecords } from '../../redux/trainingRecord';
import { thunkLoadBehaviorRecords } from '../../redux/behaviorRecord';
import {thunkLoadDogs} from '../../redux/dog';
import {FaArrowLeft, FaTrash, FaEdit} from 'react-icons/fa';
import SideBarRecords from './SideBarRecords';
import { useSideBarStatus } from "../../context/SideBar";
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

function RecordModal(){
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const sessionUser = useSelector((state) => state.session.user);
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
            <div className="sidebar-button-container">
                <button className='sidebar-button' onClick={()=>{
                    setIsSideBarOpen(true)
                    }} >
                <FaArrowLeft color='darkblue'/>
                </button>
            </div>  
            <SideBarRecords  dogsArr={dogsArr} />
            <h1>Health Records</h1>
            <OpenModalButton 
            buttonText="+"
            // onButtonClick={closeModal}
            className='dog-add-new-dog'
            modalComponent={<AddNewHealthRecord />}/>
          {
            dogHealthRecord.length !==0 ?
            dogHealthRecord.map((healthRecord,index)=>{
                return (
                    <div key={index} className="dog-note-container" >
                        <p>{healthRecord.description}</p>
                        <p>{healthRecord.treatment}</p>
                        <p>{healthRecord.vet_name}</p>
                        <p>{healthRecord.record_date.slice(0,14)}</p>
                            <div className="note-update-delete-container">
                            <OpenModalButton 
                                    buttonText= {< FaEdit/>}
                                    // onButtonClick={closeMenu}
                                    className='note-update-icon'
                                    modalComponent={<UpdateHealthRecordModal healthRecord={healthRecord} health_record_id={healthRecord.id} />}/>
                            <OpenModalButton 
                                    buttonText={<FaTrash />}
                                    // onButtonClick={closeMenu}
                                    className='note-delete-icon'
                                    modalComponent={<DeleteHealthRecordModal health_record_id={healthRecord.id}  />} />
                
                            </div>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }
            <h1>Training Records</h1>
            <OpenModalButton 
            buttonText="+"
            // onButtonClick={closeModal}
            className='dog-add-new-dog'
            modalComponent={<AddNewTrainingRecord />}/>
          
          {
            dogTrainingRecord.length !==0 ?
            dogTrainingRecord.map((trainingRecord,index)=>{
                return (
                    <div key={index} className="dog-note-container" >
                        <p>{trainingRecord.training_type}</p>
                        <p>{trainingRecord.notes}</p>
                        <p>{trainingRecord.trainer_name}</p>
                        <p>{trainingRecord.training_date.slice(0,14)}</p>

                        <div className="note-update-delete-container">
                            <OpenModalButton 
                                    buttonText= {< FaEdit/>}
                                    // onButtonClick={closeMenu}
                                    className='note-update-icon'
                                    modalComponent={<UpdateTrainingRecordModal trainingRecord ={trainingRecord} training_record_id={trainingRecord.id} />}/>
                            <OpenModalButton 
                                    buttonText={<FaTrash />}
                                    // onButtonClick={closeMenu}
                                    className='note-delete-icon'
                                    modalComponent={<DeleteTrainingRecordModal training_record_id={trainingRecord.id}  />} />
                
                            </div>
                    </div>
                )
            })
            :<p>your dog have no record yet</p>
          }
          <h1>Behavior Records</h1>
          <OpenModalButton 
            buttonText="+"
            // onButtonClick={closeModal}
            className='dog-add-new-dog'
            modalComponent={<AddNewBehaviorRecord />}/>
          {
            dogbehaviorRecords.length !==0 ?
            dogbehaviorRecords.map((behaviorRecord,index)=>{
                return (
                    <div key={index} className="dog-note-container" >
                        <p>{behaviorRecord.behavior_type}</p>
                        <p>{behaviorRecord.description}</p>
                        <p>{behaviorRecord.behavior_record_date.slice(0,14)}</p>
                          <div className="note-update-delete-container">
                            <OpenModalButton 
                                    buttonText= {< FaEdit/>}
                                    // onButtonClick={closeMenu}
                                    className='note-update-icon'
                                    modalComponent={<UpdateBehaviorRecordModal behaviorRecord ={behaviorRecord} behavior_record_id={behaviorRecord.id} />}/>
                            <OpenModalButton 
                                    buttonText={<FaTrash />}
                                    // onButtonClick={closeMenu}
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