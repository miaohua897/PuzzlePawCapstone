const LOAD_NOTES ='note/loadNotes';
const DELETE_NOTES='note/deleteNotes';
const UPDATE_NOTES ='note/updateNotes';
const CREATE_NOTES='note/createNotes';

const loadNotes = (data)=>({
    type:LOAD_NOTES,
    payload:data
})

const deleteNote=(note_id)=>({
    type:DELETE_NOTES,
    payload:note_id
})

const createNote=(data)=>({
    type:CREATE_NOTES,
    payload:data
})

const updateNote=(data)=>({
    type:UPDATE_NOTES,
    payload:data
})

export const thunkLoadNotes=()=>async(dispatch)=>{
     const res = await fetch('/api/notes/current')
     if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadNotes(data))
     }
}

export const thunkCreateNote=(data)=> async(dispatch)=>{
    const res = await fetch('/api/notes/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    if(res.ok){
        const data = await res.json();
        dispatch(createNote(data))
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

export const thunkUpdateNote = (data, note_id)=> async(dispatch)=>{
    const res = await fetch(`/api/notes/${note_id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    if(res.ok){
        const data = await res.json()
        dispatch(updateNote(data))
    }else if( res.status<500){
        const errorMessages = await res.json()
        return errorMessages
    }else{
        return {
            server:'Something went wrong. Close it. Please try agian'
        }
    }
}

export const thunkDeleteNote=(note_id)=>async(dispatch)=>{
    const res = await fetch(`/api/notes/${note_id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    if (res.ok){
        const data = await res.json()
        if (data.errors){
            return ;
        }
        dispatch(deleteNote(note_id))
    }
}

const initialState={note:null}

function noteReducer(state=initialState,action){
    switch(action.type){
        case LOAD_NOTES:
            return {...state, note:action.payload}
        case CREATE_NOTES:{
            let newObj={...state.note}
            newObj[action.payload.id]=action.payload
            return {...state, note:newObj}
        }
        case UPDATE_NOTES:{
            let newObj={}
            Object.values(state.note).map(el=>{
                if(el.id !== action.payload.id){
                    newObj[el.id]=el;
                }
                if(el.id === action.payload.id){
                    newObj[el.id]=action.payload;
                }
            })
            return {...state, note:newObj}
        }
        case DELETE_NOTES:{
            let newObj={}
            Object.values(state.note).map(el=>{
                if(el.id !== action.payload){
                    newObj[el.id]=el;
                }
            })
            return {...state, note:newObj}
        }
        default:
            return state
    }
}
export default noteReducer