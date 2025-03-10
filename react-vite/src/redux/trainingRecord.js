const LOAD_TRAINING_RECORD= 'trainingRecords/loadTrainingRecords';
const DELETE_TRAINING_RECORD= 'trainingRecords/deleteTrainingRecords';
const UPDATE_TRAINING_RECORD= 'trainingRecords/updateTrainingRecords';
const CREATE_TRAINING_RECORD= 'trainingRecords/createTrainingRecords';

const loadTrainingRecords=(data)=>({
    type:LOAD_TRAINING_RECORD,
    payload:data
})

const deleteTrainingRecord =(training_record_id)=>({
    type:DELETE_TRAINING_RECORD,
    payload:training_record_id
})

const createTrainingRecord=(data)=>({
    type:CREATE_TRAINING_RECORD,
    payload:data
})

const updateTrainingRecord=(data)=>({
    type:UPDATE_TRAINING_RECORD,
    payload:data
})

export const thunkLoadTrainingRecords=()=>async (dispatch)=>{
    const res = await fetch('/api/training_records/')
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadTrainingRecords(data))
    }
}

export const thunkCreateTrainingRecord=(data)=> async(dispatch)=>{
    const res = await fetch('/api/training_records/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    if(res.ok){
        const data = await res.json();
        dispatch(createTrainingRecord(data))
    }
    else if (res.status<500){
        const errorMessages = await res.json()
        return errorMessages;
    }else{
        return {
            server:'Something went wrong, Close it. Please try again'
        }
    }
}

export const thunkUpdateTrainingRecord=(data,training_record_id)=> async(dispatch)=>{
    const res = await fetch(`/api/training_records/${training_record_id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    if(res.ok){
        const data = await res.json()
        dispatch(updateTrainingRecord(data))
    }else if (res.status<500){
        const errorMessages = await res.json()
        return errorMessages
    }
    else{
        return {
            server:'Something went wrong. Close it. Please try agian'
        } 
    }
}

export const thunkDeleteTrainingRecord=(training_record_id)=>async(dispatch)=>{
    const res = await fetch(`/api/training_records/${training_record_id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(res.ok){
        const data = await res.json()
        if (data.errors){
            return ;
        }
        dispatch(deleteTrainingRecord(training_record_id))
    }
}

const initialState ={trainingRecords:null}

function trainingRecordReducer(state=initialState,action){
    switch(action.type){
        case LOAD_TRAINING_RECORD:
            return {...state,trainingRecords:action.payload}
        case CREATE_TRAINING_RECORD:{
            let newObj ={...state.trainingRecords}
            newObj[action.payload.id]= action.payload
            return {...state,trainingRecords:newObj}
        }
        case UPDATE_TRAINING_RECORD:{
            let newObj={}
            Object.values(state.trainingRecords).map(el=>{
                if(el.id !== action.payload.id){
                    newObj[el.id]=el
                }
                if (el.id === action.payload.id){
                    newObj[el.id]= action.payload
                }
            })
            return {...state,trainingRecords:newObj}
        }
        case DELETE_TRAINING_RECORD:{
            let newObj={}
            Object.values(state.trainingRecords).map(el=>{
                if(el.id !== action.payload){
                    newObj[el.id]=el
                }
            })
            return {...state, trainingRecords:newObj}
        }
        default:
            return state
    }

}
export default trainingRecordReducer