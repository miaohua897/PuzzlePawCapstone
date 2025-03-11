const SEARCH_FRIEND = 'friendship/searchFriendship'

const searchFriend = (data)=>({
    type:SEARCH_FRIEND,
    payload:data
})

export const thunkSearchFriend =(data) => async (dispatch) =>{
    const res = await fetch('/api/friendships/search',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
    })
    if (res.ok){
        const newData = await res.json()
        dispatch(searchFriend(newData))
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

const initialState ={search:null}

function friendReducer(state = initialState, action){
    switch(action.type){
        case SEARCH_FRIEND:
            return {...state,search:action.payload}
        default:
            return state
    }
}
export default friendReducer