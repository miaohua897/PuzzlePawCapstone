const LOAD_HEALTH_RECORD = 'healthRecords/loadHealthRecords';
const DELETE_HEALTH_RECORD= 'healthRecords/deleteHealthRecords';
const UPDATE_HEALTH_RECORD = 'healthRecords/updateHealthRecords';
const CREATE_HEALTH_RECORD= 'healthRecords/createHealthRecords';

const loadHealthRecords =(data)=>({
    type:LOAD_HEALTH_RECORD,
    payload:data
})

const deleteHealthRecord =(health_record_id)=>({
    type:DELETE_HEALTH_RECORD,
    payload:health_record_id
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
export const thunkDeleteHealthRecord =(health_record_id)=>async (dispatch)=>{
    const res = await fetch(`/api/health_records/${health_record_id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(deleteHealthRecord(health_record_id))
    }
}

const initialState={healthRecords:null}

function healthRecordReducer(state=initialState,action){
    switch (action.type){
        case LOAD_HEALTH_RECORD:
            return {...state, healthRecords:action.payload}
        case DELETE_HEALTH_RECORD:{
            let newObj={}
            Object.values(state.healthRecords).map(el=>{
                if(el.id !== action.payload){
                    newObj[el.id]=el
                }
            })
            return {...state, healthRecords:newObj}
        }
        default:
            return state
    }
}
export default healthRecordReducer;