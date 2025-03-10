fetch('/api/training_records/1',{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       'training_date':'2014-01-23',
       "training_type":"note updated test",
       "trainer_name":"this is updated test note",
       "notes" :'test',
       "dog_id":1 
    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error('Error',error))