
const LOAD_PHOTOS= 'photo/loadPhotos';
const DELETE_PHOTOS= 'photo/deletePhotos';
const UPDATE_PHOTOS= 'photo/updatePhotos';
const CREATE_PHOTOS='photo/createPhotos';

const loadPhotos=(data)=>({
    type:LOAD_PHOTOS,
    payload:data
})
const deletePhotos=(photo_id)=>({
    type:DELETE_PHOTOS,
    payload:photo_id
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
export const thunkDeletePhotos=(photo_id)=>async(dispatch)=>{
    const res = await fetch(`/api/photos/${photo_id}`,{
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
        dispatch(deletePhotos(photo_id))
    }
}
const initialState={photo:null}

function photoReducer(state=initialState,action){
    switch(action.type){
        case LOAD_PHOTOS:
            return {...state, photo:action.payload}
        case DELETE_PHOTOS:
            {
                let newObj={}
                console.log('state.photo',state.photo)
                Object.values(state.photo).map((el)=>{
                    if( el.id !== action.payload){
                        newObj[el.id] = el;  
                    }
                })
            return {...state, photo:newObj} 
            }
        default:
            return state;
    }
}

export default photoReducer;


