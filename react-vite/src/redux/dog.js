
const LOAD_DOGS ='dog/loadDog';

const loadDogs=(data)=>({
    type:LOAD_DOGS,
    payload:data
})

export const  thunkLoadDogs=()=> async(dispatch)=>{
    const res = await fetch('/api/dogs/');
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadDogs(data))
    }
}

const initialState={dog:null}
function dogReducer(state=initialState,action){
    switch(action.type){
        case LOAD_DOGS:
            return {...state,dog:action.payload}
        default:
            return state
    }
}

export default dogReducer;