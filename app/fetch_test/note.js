fetch('/api/notes/',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       'note_date':'2014-01-23',
       "title":"note test",
       "content":"this is test note",
       "user_id" :1,
       "dog_id":1 
    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))

fetch('/api/notes/3',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       'note_date':'2014-01-23',
       "title":"note updated test",
       "content":"this is updated test note",
       "user_id" :1,
       "dog_id":1 
    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))

fetch('/api/notes/3', {
    method:'DELETE',
    headers:{
        'COntent-Type':'application/json'
    }
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('error',error));