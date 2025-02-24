
const LOAD_DOGS ='dog/loadDog';
const DELETE_DOGS ='dog/deleteDog';
const UPDATE_DOGS='dog/updateDog';
const CREATE_DOGS='dog/createDog'

const loadDogs=(data)=>({
    type:LOAD_DOGS,
    payload:data
})
const deleteDog=(dog_id)=>({
    type:DELETE_DOGS,
    payload:dog_id
})
const updateDog=(data)=>({
    type:UPDATE_DOGS,
    payload:data
})
const createDog=(data)=>({
    type:CREATE_DOGS,
    payload:data
})

export const thunkUpdateDogs=(data,dog_id)=>async(dispatch)=>{
    const res = await fetch(`/api/dogs/${dog_id}`,{
        method:"PUT",
        body:data
    });
    if(res.ok){
        const data = await res.json();
        console.log('i am from thunk update')
        if(data.errors){
            return;
        }
        dispatch(updateDog(data))
    }
}

export const  thunkLoadDogs=()=> async(dispatch)=>{
    const res = await fetch('/api/dogs/current');
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadDogs(data))
    }
}

export const thunkCreateDogs=(data)=>async(dispatch)=>{
    const res = await fetch(`/api/dogs/`,{
        method:"POST",
        body:data
    });
    if(res.ok){
        const data = await res.json();
        if(data.errors){
            return;
        }
        dispatch(createDog(data))
    }
}

export const thunkDeleteDogs=(dog_id)=>async(dispatch)=>{
    const res = await fetch(`/api/dogs/${dog_id}`,{
        method:"DELETE",
        headers:{
             'Content-Type': 'application/json'
        }
    });
    if(res.ok){
        const data = await res.json();
        if(data.errors){
            return;
        }
        dispatch(deleteDog(dog_id))
    }
}

const initialState={dog:null}

function dogReducer(state=initialState,action){
    switch(action.type){
        case LOAD_DOGS:
            return {...state,dog:action.payload}
        case CREATE_DOGS:{
                let newObj={...state.dog}
                newObj[action.payload.id]=action.payload
                return {...state, dog:newObj} 
            }
        case DELETE_DOGS:
                {
                    let newObj={}
                    Object.values(state.dog).map((el)=>{
                        if( el.id !== action.payload){
                            newObj[el.id] = el;  
                        }
                    })
                return {...state, dog:newObj} 
                }
        case UPDATE_DOGS:
                    {
                        let newObj={}
                        Object.values(state.dog).map((el)=>{
                            if( el.id !== action.payload.id){
                                newObj[el.id] = el;  
                            }
                            if( el.id === action.payload.id){
                                newObj[el.id] = action.payload;  
                            }
    
                        })
                    return {...state, dog:newObj} 
                    }
        default:
            return state
    }
}

export default dogReducer;