const LOAD_TRAINING_RECORD= 'trainingRecords/loadTrainingRecords';
const DELETE_TRAINING_RECORD= 'trainingRecords/deleteTrainingRecords';
const UPDATE_TRAINING_RECORD= 'trainingRecords/updateTrainingRecords';
const CREATE_TRAINING_RECORD= 'trainingRecords/createTrainingRecords';

const loadTrainingRecords=(data)=>({
    type:LOAD_TRAINING_RECORD,
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

const initialState ={trainingRecords:null}

function trainingRecordReducer(state=initialState,action){
    switch(action.type){
        case LOAD_TRAINING_RECORD:
            return {...state,trainingRecords:action.payload}
        default:
            return state
    }

}
export default trainingRecordReducer