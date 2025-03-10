const LOAD_HEALTH_RECORD = 'healthRecords/loadHealthRecords';
const DELETE_HEALTH_RECORD= 'healthRecords/deleteHealthRecords';
const UPDATE_HEALTH_RECORD = 'healthRecords/updateHealthRecords';
const CREATE_HEALTH_RECORD= 'healthRecords/createHealthRecords';

const loadHealthRecords =(data)=>({
    type:LOAD_HEALTH_RECORD,
    payload:data
})

export const thunkLoadHealthRecords=()=>async(dispatch)=>{
    const res = await fetch('/api/health_records/')
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadHealthRecords(data))
    }
}

const initialState={healthRecords:null}

function healthRecordReducer(state=initialState,action){
    switch (action.type){
        case LOAD_HEALTH_RECORD:
            return {...state, healthRecords:action.payload}
        default:
            return state
    }
}
export default healthRecordReducer;