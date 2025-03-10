fetch('/api/behavior_records/1',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       'behavior_record_date':'2014-01-23',
       "description":"note updated test",
       "behavior_type":"this is updated test note",
       "dog_id":1 
    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))