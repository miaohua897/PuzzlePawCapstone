const LOAD_BEHAVIOR_RECORD = 'behaviorRecords/loadBehaviorRecords';
const DELETE_BEHAVIOR_RECORD = 'behaviorRecords/deleteBehaviorRecords';
const UPDATE_BEHAVIOR_RECORD= 'behaviorRecords/updateBehaviorRecords';
const CREATE_BEHAVIOR_RECORD= 'behaviorRecords/createBehaviorRecords';

const loadBehaviorRecords=(data)=>({
    type:LOAD_BEHAVIOR_RECORD,
    payload:data
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

const initialState = {behaviorRecords:null}

function behaviorRecordReducer(state=initialState,action){
    switch(action.type){
        case LOAD_BEHAVIOR_RECORD:
            return {...state, behaviorRecords:action.payload}
        default:
            return state
    }

}
export default behaviorRecordReducer;