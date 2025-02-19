fetch('/api/dogs/2', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        dog_name:'helloworld',
        age :1,
        gender:'female',
        neutered_spayed:'spayed',
        color:'white',
        weight:7.20,
        image_url:'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/Untitled+design+(20).png',
        birth_date:'2012-01-12',
        breed_name :'Siberian Husky',
        description:'info brief',
        medical_allergies:'NA',
        owner_phone_number:'1234556435',
        owner_email:'hello@gmail.com',
        owner_address_line_one:'helloworld ln',
        owner_address_line_two:'helloworld two ln',
        owner_address_city :'SD',
        owner_address_state:'CA',
        owner_address_zip_code : 92130,
        owner_country : "UK",
        user_id :1
    }) 
  }).then(response => response.json())  
  .then(data => console.log(data))   
  .catch(error => console.error('Error:', error)); 



fetch('/api/dogs/2', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())  
  .then(data => console.log(data))   
  .catch(error => console.error('Error:', error)); 

  fetch('/api/dogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())  
  .then(data => console.log(data))   
  .catch(error => console.error('Error:', error)); 

  fetch('/api/dogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        dog_name:'pawpao',
        age :1,
        gender:'female',
        neutered_spayed:'spayed',
        color:'white',
        weight:7.20,
        image_url:'https://testbucketbymiaohua.s3.us-west-1.amazonaws.com/Untitled+design+(20).png',
        birth_date:'2012-01-12',
        breed_name :'Siberian Husky',
        description:'info brief',
        medical_allergies:'NA',
        owner_phone_number:'1234556435',
        owner_email:'hello@gmail.com',
        owner_address_line_one:'helloworld ln',
        owner_address_line_two:'helloworld two ln',
        owner_address_city :'SD',
        owner_address_state:'CA',
        owner_address_zip_code : 92130,
        owner_country : "UK",
        user_id :1
    }) 
  }).then(response => response.json())  
  .then(data => console.log(data))   
  .catch(error => console.error('Error:', error)); 