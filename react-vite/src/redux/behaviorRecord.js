const LOAD_BEHAVIOR_RECORD = 'behaviorRecords/loadBehaviorRecords';
const DELETE_BEHAVIOR_RECORD = 'behaviorRecords/deleteBehaviorRecords';
const UPDATE_BEHAVIOR_RECORD= 'behaviorRecords/updateBehaviorRecords';
const CREATE_BEHAVIOR_RECORD= 'behaviorRecords/createBehaviorRecords';

const loadBehaviorRecords=(data)=>({
    type:LOAD_BEHAVIOR_RECORD,
    payload:data
})

const deleteBehaviorRecord =(behavior_record_id)=>({
    type:DELETE_BEHAVIOR_RECORD,
    payload:behavior_record_id
})

export const thunkLoadBehaviorRecords=()=> async(dispatch)=>{
    const res = await fetch('/api/behavior_records/')
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadBehaviorRecords(data))
    }
}

export const thunkDeleteBehaviorRecord =(behavior_record_id)=>async (dispatch)=>{
    const res = await fetch(`/api/behavior_records/${behavior_record_id}`,{
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
        dispatch(deleteBehaviorRecord(behavior_record_id))
    }
}

const initialState = {behaviorRecords:null}

function behaviorRecordReducer(state=initialState,action){
    switch(action.type){
        case LOAD_BEHAVIOR_RECORD:
            return {...state, behaviorRecords:action.payload}
        case DELETE_BEHAVIOR_RECORD:{
            let newObj={}
            Object.values(state.behaviorRecords).map(el=>{
                if(el.id !== action.payload){
                    newObj[el.id]=el
                }
            })
            return {...state, behaviorRecords:newObj}
        }
        default:
            return state
    }

}
export default behaviorRecordReducer;