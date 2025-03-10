fetch('/api/health_records/2',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       'record_date':'2014-01-23',
       "description":"note updated test",
       "treatment":"this is updated test note",
       "vet_name" :'test',
       "dog_id":1 
    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))