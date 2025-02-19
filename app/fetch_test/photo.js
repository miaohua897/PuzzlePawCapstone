
fetch('/api/photos/2', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'photo_date':'2014-01-23',
        "title":"Eye of the Tiger",   
        "description":"hello",
        "image_url":"https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/3b41e0933d2b41d8b313bf92d0917c4c.jpg",
        "dog_id":1,
      "user_id":1
    }) 
  }).then(response => response.json())  
  .then(data => console.log(data))   
  .catch(error => console.error('Error:', error)); 


fetch('/api/photos/2', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())  
  .then(data => console.log(data))   
  .catch(error => console.error('Error:', error)); 

fetch('/api/photos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())  
  .then(data => console.log(data))   
  .catch(error => console.error('Error:', error)); 