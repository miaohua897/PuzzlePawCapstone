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

const createBehaviorRecord=(data)=>({
    type:CREATE_BEHAVIOR_RECORD,
    payload:data
})

const updateBehaviorRecord=(data)=>({
    type:UPDATE_BEHAVIOR_RECORD,
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

export const thunkCreateBehaviorRecord=(data)=> async(dispatch)=>{
    const res = await fetch('/api/behavior_records/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    if(res.ok){
        const data = await res.json();
        dispatch(createBehaviorRecord(data))
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


export const thunkUpdateBehaviorRecord=(data,behavior_record_id)=> async(dispatch)=>{
    const res = await fetch(`/api/behavior_records/${behavior_record_id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    if(res.ok){
        const data = await res.json()
        dispatch(updateBehaviorRecord(data))
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
        case CREATE_BEHAVIOR_RECORD:{
            let newObj ={...state.behaviorRecords}
            newObj[action.payload.id] = action.payload
            return {...state,behaviorRecords:newObj}
        }
        case UPDATE_BEHAVIOR_RECORD:{
            let newObj={}
            Object.values(state.behaviorRecords).map(el=>{
                if(el.id !== action.payload.id){
                    newObj[el.id]=el
                }
                if(el.id === action.payload.id){
                    newObj[el.id] = action.payload
                }
            })
            return {...state, behaviorRecords:newObj}
        }
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