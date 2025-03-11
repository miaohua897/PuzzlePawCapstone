fetch('/api/friendships/',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       "user_id" :2,
       "friend_id":3 
    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))

fetch('/api/friendships/3',{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json'
    }
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))

fetch('/api/friendships/search',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        'search_name' :'Demo'
      
    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))