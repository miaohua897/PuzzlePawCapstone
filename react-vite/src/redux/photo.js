
const LOAD_PHOTOS= 'photo/loadPhotos';
const DELETE_PHOTOS= 'photo/deletePhotos';
const UPDATE_PHOTOS= 'photo/updatePhotos';
const CREATE_PHOTOS='photo/createPhotos';
const LOAD_SHARE_PHOTOS ='photo/loadSharePhotos';

const loadPhotos=(data)=>({
    type:LOAD_PHOTOS,
    payload:data
})
const loadSharePhotos =(data)=>({
    type:LOAD_SHARE_PHOTOS,
    payload:data
})
const deletePhoto=(photo_id)=>({
    type:DELETE_PHOTOS,
    payload:photo_id
})
const createPhoto=(data)=>({
    type:CREATE_PHOTOS,
    payload:data
})
const updatePhoto=(data)=>({
    type:UPDATE_PHOTOS,
    payload:data
})

export const thunkUpdatePhotos=(data,photo_id)=>async(dispatch)=>{
    const res = await fetch(`/api/photos/${photo_id}`,{
        method:"PUT",
        body:data
    });
    if(res.ok){
        const data = await res.json();
        dispatch(updatePhoto(data))
    }else if (res.status<500){
        const errorMessages = await res.json();
        return errorMessages 
    }else{
        return { server: "Something went wrong. Close it. Please try again" }
    }
}

export const  thunkLoadPhotos=()=> async(dispatch)=>{
    const res = await fetch('/api/photos/current');
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadPhotos(data))
    }
}
export const thunkLoadSharePhotos=()=>async(dispatch)=>{
    const res = await fetch('/api/photos/share')
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadSharePhotos(data))
    }
}
export const thunkCreatePhotos=(data)=>async(dispatch)=>{
    const res = await fetch(`/api/photos/`,{
        method:"POST",
        body:data
    });
    if(res.ok){
        const data = await res.json();
        dispatch(createPhoto(data))
    }
    else if (res.status<500){
        const errorMessages = await res.json();
        return errorMessages;
    }else{
        return {
            server:'Something went wrong. Close it. Please try again'
        }
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
        dispatch(deletePhoto(photo_id))
    }
}

const initialState={photo:null,sharePhoto:null}

function photoReducer(state=initialState,action){
    switch(action.type){
        case LOAD_PHOTOS:
            return {...state, photo:action.payload}
        case LOAD_SHARE_PHOTOS:
            return {...state,sharePhoto:action.payload}
        case CREATE_PHOTOS:{
            let newObj={...state.photo}
            newObj[action.payload.id]=action.payload
            return {...state, photo:newObj} 
        }
        case DELETE_PHOTOS:
            {
                let newObj={}
                Object.values(state.photo).map((el)=>{
                    if( el.id !== action.payload){
                        newObj[el.id] = el;  
                    }
                })
            return {...state, photo:newObj} 
            }
        case UPDATE_PHOTOS:
                {
                let newObj={}                 
                Object.values(state.photo).map((el)=>{
                    if( el.id !== action.payload.id){
                        newObj[el.id] = el;  
                    }
                    if( el.id === action.payload.id){
                        newObj[el.id] = action.payload;  
                    }

                })
            return {...state, photo:newObj} 
                }
        default:
            return state;
    }
}

export default photoReducer;


