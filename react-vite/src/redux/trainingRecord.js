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