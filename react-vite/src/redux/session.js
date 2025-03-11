const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const DELETE_FRIENDSHIP = 'friendship/deleteFriendship';
const CREATE_FRIENDSHIP = 'friendship/addFriendship';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER
});

const deleteFriendship =(data)=>(
  {
      type:DELETE_FRIENDSHIP,
      payload:data
  }
)

const createFriendship = (data)=>({
  type:CREATE_FRIENDSHIP,
  payload:data
})


export const thunkAuthenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/");
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const thunkLogin = (credentials) => async dispatch => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages
  } else {
    return { server: "Something went wrong. Please try again" }
  }
};

export const thunkSignup = (user) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  if(response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
  } else if (response.status < 500) {
    const errorMessages = await response.json();
    return errorMessages
  } else {
    return { server: "Something went wrong. Please try again" }
  }
};

export const thunkLogout = () => async (dispatch) => {
  await fetch("/api/auth/logout");
  dispatch(removeUser());
};

export const thunkDeleteFriendship=(user_id,friend_id)=>async(dispatch)=>{
    const res = await fetch(`/api/friendships/${friend_id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(res.ok){
        await res.json()
        if(res.errors){
            return ;
        }
    }
    dispatch(deleteFriendship({
      'user_id': user_id,
       'friend_id':friend_id}))
}

export const thunkCreateFriendship = (data)=> async(dispatch)=>{
  const res = await fetch('api/friendships/',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  })
  if(res.ok){
    const newData= await res.json()
    dispatch(createFriendship(newData))
  }
  else if(res.status<500){
    const errorMessages = await res.json()
    return errorMessages;
  }else{
    return {
      server:'Something went wrong, Close it. Please try again'
  }
  }
}

const initialState = { user: null };

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    case CREATE_FRIENDSHIP:{
      let newObj ={...state.user}
      newObj.friends.push(action.payload)
      return {...state,user:newObj}
    }
    case DELETE_FRIENDSHIP:{
      let newObj={...state.
        user
        }

      let newFriend =[];
      newObj.friends.map(friend=>{
            if (friend.id !== action.payload.friend_id)
              newFriend.push(friend)
      })
      newObj.friends = newFriend;
      return {...state, user:newObj}
    }
    default:
      return state;
  }
}

export default sessionReducer;
