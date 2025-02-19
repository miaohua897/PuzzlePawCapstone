
const LOAD_PHOTOS= 'photo/loadUser';

const loadPhotos=(data)=>({
    type:LOAD_PHOTOS,
    payload:data
})

export const  thunkLoadPhotos=()=> async(dispatch)=>{
    const res = await fetch('/api/photos/');
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadPhotos(data))
    }
}

const initialState={photo:null}

function photoReducer(state=initialState,action){
    switch(action.type){
        case LOAD_PHOTOS:
            return {...state, photo:action.payload}
        default:
            return state;
    }
}

export default photoReducer;


