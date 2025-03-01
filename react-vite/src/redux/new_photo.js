const LOAD_NEWS_PHOTOS = 'newsPhotos/loadNewsPhotos';

const loadNewsPhotos = (data)=>({
    type:LOAD_NEWS_PHOTOS,
    payload:data
})

export const thunkLoadNewsPhotos =()=>async (dispatch)=>{
    const res = await fetch('/api/news_photos/current');
    if(res.ok){
        const data = await res.json()
        if(data.errors){
            return ;
        }
        dispatch(loadNewsPhotos(data))
    }
}

const initialState={newsPhoto:null}

function newsPhotoReducer(state=initialState,action){
    switch(action.type){
        case LOAD_NEWS_PHOTOS:
            return {...state, newsPhoto:action.payload}
        default:
            return state;
    }
}

export default newsPhotoReducer;