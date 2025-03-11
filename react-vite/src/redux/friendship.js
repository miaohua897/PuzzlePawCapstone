const DELETE_FRIENDSHIP = 'friendship/deleteFriendship';

const deleteFriendship =(friend_id)=>(
    {
        type:DELETE_FRIENDSHIP,
        payload:friend_id
    }
)

export const thunkDeleteFriendship=(friend_id)=>async(dispatch)=>{
    const res = await fetch(`/api/friendships/${friend_id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(res.ok){
        const data = await res.json()
        if(res.errors){
            return ;
        }
    }
    dispatch(deleteFriendship(friend_id))
}