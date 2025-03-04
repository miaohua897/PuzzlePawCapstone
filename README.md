## Welcome to PuzzlePaw

PuzzlePaw is a dog website, users can see newest information in the website, create an account, store their dogs' information, photos. On the landing page, there is dog article, images auto displaying, scrolling displaying. On the dog information page, users can get their dogs lastest information easily at sidebar. On the photo page, user can see all of their photes and checkout larger version at sidbar.

## Live Link
[PuzzlePaw](https://puzzlepawcapstone.onrender.com/)

## Tech Stack
**Frameworks and Libraries:**     
[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://python.org/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white)](https://flask.palletsprojects.com/)
[![React](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/-Redux-black?style=for-the-badge&logo=redux)](https://redux.js.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Html5](https://img.shields.io/badge/-Html5-black?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS3](https://img.shields.io/badge/-CSS3-black?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)

**Database:**     
[![PostgressSql](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Sqlalchemy](https://img.shields.io/badge/sqlalchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white)](https://www.sqlalchemy.org/)
[![SQLite3](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=SQLite&logoColor=white)](https://www.sqlite.org/)

**Hosting:**    
[![Render](https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

**Storage**   
[![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?logo=amazons3&logoColor=fff&style=for-the-badge)](https://aws.amazon.com/s3/)  

## Index
[Database-Scheme](https://github.com/miaohua897/PuzzlePawCapstone/wiki/Database-Schema) |
[Feature List](https://github.com/miaohua897/PuzzlePawCapstone/wiki/MVP's-Feature-List) |
[User Stores](https://github.com/miaohua897/PuzzlePawCapstone/wiki/User-Stories) |
[WireFrame](https://github.com/miaohua897/PuzzlePawCapstone/wiki/wireframes) |

## Landing Page

https://github.com/user-attachments/assets/548dab2c-65d6-4457-99e5-1885ff85d598

## Dogs' Detail Page

https://github.com/user-attachments/assets/bd7f2388-7d1b-4fcc-ad4d-731a1e663029

## Photos' Page

https://github.com/user-attachments/assets/f18fb383-cd54-4631-820f-cbb983f17d3c


**EndPoints**

-----------------------------------------------------------------------------

## Auth Routes 

| **Field**                | **Details**                                                                                                                                                      |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Current User**          |                                                                                             |
| **Method**                | POST                                                                                         |                                                                   |
| **URL**                   | /api/auth/                                                                                   |                                                                   |
| **Successful Response**   | HTTP Status Code 200                                                                         |                                                                    |
| **Response Body**         | ```json
                                 { 'email': STRING, 'id': INT, 'username': STRING }
                              ```
                           |                                                                   |
| **Error Response**        | HTTP Status Code 401                                                                         |                                                                    |
| **Error Response Body**   | `{ 'errors': 'Unauthorized' }`                                                               |                                                                   |




| **Field**                | **Details**                                                                                                                                                      |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Unauthorized**         |                                                                                             |
| **Method**                | POST                                                                                       |                                                                     |
| **URL**                   | /api/auth/unauthorized                                                                     |                                                                                 |
| **Successful Response**   |                                                                                            |                                                 |
| **Response Body**         |                                                                                                            |
| **Error Response**        | HTTP Status Code 401                                                                       |                                                                      |
| **Error Response Body**   | `{ 'errors': 'Unauthorized' }`                                                             |                                                                     |


-----------------------------------------------------------------------------

## Signup


| **Field**                | **Details**                                                                                                                                                      |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Current User**          |                                                                                             |
| **Method**                | POST                                                                                        |                                                                    |
| **URL**                   | /api/auth/signup                                                                            |                                                                         |
| **Successful Response**   | HTTP Status Code 201                                                                        |                                                                     |
| **Response Body**         | `{‘id’:INT,‘username’:’STRING’,‘email’:’STRING’ } `                                         |                                                                   |
| **Error Response**        | HTTP Status Code 401                                                                        |                                                                     |
| **Error Response Body**   | `{‘error’: ARRAY_OF_STRINGS} `                                                              |                                                                    |


-----------------------------------------------------------------------------

## Login


| **Field**                | **Details**                                                                                                                                                      |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Current User**          |                                                                                             |
| **Method**                | POST                                                                                        |                                                                    |
| **URL**                   | /api/auth/login                                                                             |                                                                        |
| **Successful Response**   | HTTP Status Code 201                                                                        |                                                                     |
| **Response Body**         | `{‘id’:INT,‘username’:’STRING’,‘email’:’STRING’ } `                                         |                                                                   |
| **Error Response**        | HTTP Status Code 401                                                                        |                                                                     |
| **Error Response Body**   | `{‘error’: ARRAY_OF_STRINGS} `                                                              |                                                                    |
 


-----------------------------------------------------------------------------

## Logout


| **Field**                | **Details**                                                                                                                                                      |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Current User**          |                                                                                             |
| **Method**                | POST                                                                                        |                                                                    |
| **URL**                   | /api/auth/logout                                                                            |                                                                         |
| **Successful Response**   | HTTP Status Code 201                                                                        |                                                                     |
| **Response Body**         | `{‘message’: ‘User logged out’ } `                                                          |                                                  |
| **Error Response**        | HTTP Status Code 401                                                                        |                                                                     |
| **Error Response Body**   | `{‘error’: ARRAY_OF_STRINGS} `                                                              |                                                                    |
 

-----------------------------------------------------------------------------

## Get All Dogs

| **Field**                | **Details**                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------|
| **Method**                | GET /dogs/                                                                                    |
| **Description**           | Retrieves all dogs owned by the current user.                                                 |
| **Response**              |                                                                                      |
|                          |  {                                                                                            |
|                          |   "1": {                                                                                      |
|                          |     "age": 1,                                                                                  |
|                          |     "behavior_record": [                                                                       |
|                          |       {                                                                                         |
|                          |         "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                           |
|                          |         "behavior_type": "behavior record1",                                                                 |
|                          |         "description": "behavior record1",                                                                   |
|                          |         "id": 1                                                                                                |
|                          |       },                                                                                                      |
|                          |       {                                                                                                      |
|                          |         "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                           |
|                          |         "behavior_type": "behavior record2",                                                                 |
|                          |         "description": "behavior record2",                                                                   |
|                          |         "id": 2                                                                                                |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "birth_date": "Wed, 10 May 2023 00:00:00 GMT",                                                          |
|                          |     "breed_name": "Breed one",                                                                                |
|                          |     "color": "white",                                                                                         |
|                          |     "created_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                           |
|                          |     "description": "A dog photo typically captures the essence,       |
|                          |     "dog_name": "Dog1",                                                                                       |
|                          |     "gender": "male",                                                                                         |
|                          |     "health_record": [                                                                                        |
|                          |       {                                                                                                      |
|                          |         "description": "health record1",                                                                     |
|                          |         "dog_id": 1,                                                                                         |
|                          |         "id": 1,                                                                                             |
|                          |         "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                     |
|                          |         "treatment": "health record1",                                                                       |
|                          |         "vet_name": "hhh"                                                                                     |
|                          |       },                                                                                                      |
|                          |       {                                                                                                      |
|                          |         "description": "health record2",                                                                     |
|                          |         "dog_id": 1,                                                                                         |
|                          |         "id": 2,                                                                                             |
|                          |         "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                     |
|                          |         "treatment": "health record2",                                                                       |
|                          |         "vet_name": "hhh"                                                                                     |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "id": 1,                                                                                                 |
|                          |     "image_url": "https://testbuckemrich-64742-230785.jpg",|
|                          |     "medical_allergies": "NA",                                                                                |
|                          |     "neutered_spayed": "spayed",                                                                             |
|                          |     "note": [                                                                                                 |
|                          |       {                                                                                                      |
|                          |         "content": "this is first note",                                                                     |
|                          |         "id": 1,                                                                                             |
|                          |         "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                       |
|                          |         "title": "note1",                                                                                     |
|                          |         "user": {                                                                                           |
|                          |           "email": "demo@aa.io",                                                                             |
|                          |           "id": 1,                                                                                           |
|                          |           "username": "Demo"                                                                                  |
|                          |         }                                                                                                    |
|                          |       },                                                                                                      |
|                          |       {                                                                                                      |
|                          |         "content": "this is second note",                                                                    |
|                          |         "id": 2,                                                                                             |
|                          |         "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                       |
|                          |         "title": "note2",                                                                                     |
|                          |         "user": {                                                                                           |
|                          |           "email": "demo@aa.io",                                                                             |
|                          |           "id": 1,                                                                                           |
|                          |           "username": "Demo"                                                                                  |
|                          |         }                                                                                                    |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "owner": {                                                                                                |
|                          |       "email": "demo@aa.io",                                                                                 |
|                          |       "id": 1,                                                                                               |
|                          |       "username": "Demo"                                                                                      |
|                          |     },                                                                                                       |
|                          |     "owner_address_city": "SD",                                                                              |
|                          |     "owner_address_line_one": "helloworld ln",                                                               |
|                          |     "owner_address_line_two": "helloworld two ln",                                                           |
|                          |     "owner_address_state": "CA",                                                                             |
|                          |     "owner_address_zip_code": 92130,                                                                         |
|                          |     "owner_country": "UK",                                                                                  |
|                          |     "owner_email": "hello@gmail.com",                                                                       |
|                          |     "owner_phone_number": "1234556435",                                                                     |
|                          |     "training_record": [                                                                                     |
|                          |       {                                                                                                      |
|                          |         "id": 1,                                                                                             |
|                          |         "notes": "helloworld",                                                                               |
|                          |         "trainer_name": "hi",                                                                                 |
|                          |         "training_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                   |
|                          |         "training_type": "helloworld"                                                                         |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "updated_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                           |
|                          |     "weight": "7.00"                                                                                         |
|                          |   },                                                                                                         |
|                          |   "2": ...                                                                                                   |
|                          | }                                                                                                           |
|                          |                                                                                                           |


## Create a new dog

| **Field**                | **Details**                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------|
| **Method**                | POST /dogs                                                                                                   |
| **Description**           | Creates a new dog record in the database.                                                                   |
| **Request Body**          | ```json                                                                                                      |
|                          | {                                                                                                           |
|                          |   "dog_name": "Buddy",                                                                                       |
|                          |   "age": 3,                                                                                                  |
|                          |   "gender": "Male",                                                                                          |
|                          |   "neutered_spayed": "Neutered",                                                                             |
|                          |   "microchip": true,                                                                                         |
|                          |   "color": "Brown",                                                                                          |
|                          |   "weight": 25.5,                                                                                             |
|                          |   "image_url": "http://example.com/dog_image.jpg",                                                           |
|                          |   "birth_date": "2022-03-15",                                                                                |
|                          |   "breed_name": "Labrador Retriever",                                                                        |
|                          |   "description": "Friendly and active dog",                                                                  |
|                          |   "medical_allergies": "None",                                                                                |
|                          |   "owner_name": "John Doe",                                                                                  |
|                          |   "owner_phone_number": 1234567890,                                                                          |
|                          |   "owner_email": "johndoe@example.com",                                                                      |
|                          |   "owner_address_line_one": "123 Main St",                                                                   |
|                          |   "owner_address_line_two": "Apt 101",                                                                       |
|                          |   "owner_adress_city": "Somewhere",                                                                          |
|                          |   "owner_address_state": "CA",                                                                               |
|                          |   "owner_address_zip_code": 12345,                                                                           |
|                          |   "owner_country": "USA",                                                                                    |
|                          |   "user_id": 1                                                                                                |
|                          | }                                                                                                           |
| **Response Status**       | 201                                                                                                         |
| **Response Body**         | ```json                                                                                                      |
|                          | {                                                                                                           |
|                          |   "dog_name": "Buddy",                                                                                       |
|                          |   "age": 3,                                                                                                  |
|                          |   "gender": "Male",                                                                                          |
|                          |   "neutered_spayed": "Neutered",                                                                             |
|                          |   "microchip": true,                                                                                         |
|                          |   "color": "Brown",                                                                                          |
|                          |   "weight": 25.5,                                                                                             |
|                          |   "image_url": "http://example.com/dog_image.jpg",                                                           |
|                          |   "birth_date": "2022-03-15",                                                                                |
|                          |   "breed_name": "Labrador Retriever",                                                                        |
|                          |   "description": "Friendly and active dog",                                                                  |
|                          |   "medical_allergies": "None",                                                                                |
|                          |   "owner_name": "John Doe",                                                                                  |
|                          |   "owner_phone_number": 1234567890,                                                                          |
|                          |   "owner_email": "johndoe@example.com",                                                                      |
|                          |   "owner_address_line_one": "123 Main St",                                                                   |
|                          |   "owner_address_line_two": "Apt 101",                                                                       |
|                          |   "owner_adress_city": "Somewhere",                                                                          |
|                          |   "owner_address_state": "CA",                                                                               |
|                          |   "owner_address_zip_code": 12345,                                                                           |
|                          |   "owner_country": "USA",                                                                                    |
|                          |   "user_id": 1                                                                                                |
|                          | }                                                                                                           |

 

## Update a dog


| **Field**                | **Details**                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------|
| **Method**                | PUT /dogs/dog_id                                                                                                   |
| **Description**           | Updates the details of an existing dog record.                                                                   |
| **Request Body**          | ```json                                                                                                      |
|                           |   {                                                                                                        | 
|                           |     "dog_name": "Buddy",                                                                                   | 
|                           |     "age": 4,                                                                                              |
|                           |     "gender": "Male",                                                                                      |   
|                           |     "neutered_spayed": "Neutered",                                                                         |
|                           |     "microchip": true,                                                                                     | 
|                           |     "color": "Brown",                                                                                      |
|                           |     "weight": 27.0,                                                                                        | 
|                           |     "image_url": "http://example.com/dog_image_updated.jpg",                                               |
|                           |     "birth_date": "2021-03-15",                                                                            | 
|                           |     "breed_name": "Labrador Retriever",                                                                    | 
|                           |     "description": "Friendly and active dog",                                                              | 
|                           |     "medical_allergies": "None",                                                                           |
|                           |     "owner_name": "John Doe",                                                                              |  
|                           |     "owner_phone_number": 1234567890,                                                                      |   
|                           |     "owner_email": "johndoe@example.com",                                                                  |   
|                           |     "owner_address_line_one": "123 Main St",                                                               | 
|                           |     "owner_address_line_two": "Apt 101",                                                                   |
|                           |     "owner_adress_city": "Somewhere",                                                                      |  
|                           |     "owner_address_state": "CA",                                                                             |  
|                           |     "owner_address_zip_code": 12345,                                                                        |  
|                           |     "owner_country": "USA",                                                                                  |   
|                           |     "user_id": 1                                                                                           |  
}                                                                                                                                        |
| **Response Status**       | 201                                                                                                         |
| **Response Body**         | ```json                                                                                                      |
|                           |   {                                                                                                        | 
|                           |     "dog_name": "Buddy",                                                                                   | 
|                           |     "age": 4,                                                                                              |
|                           |     "gender": "Male",                                                                                      |   
|                           |     "neutered_spayed": "Neutered",                                                                         |
|                           |     "microchip": true,                                                                                     | 
|                           |     "color": "Brown",                                                                                      |
|                           |     "weight": 27.0,                                                                                        | 
|                           |     "image_url": "http://example.com/dog_image_updated.jpg",                                               |
|                           |     "birth_date": "2021-03-15",                                                                            | 
|                           |     "breed_name": "Labrador Retriever",                                                                    | 
|                           |     "description": "Friendly and active dog",                                                              | 
|                           |     "medical_allergies": "None",                                                                           |
|                           |     "owner_name": "John Doe",                                                                              |  
|                           |     "owner_phone_number": 1234567890,                                                                      |   
|                           |     "owner_email": "johndoe@example.com",                                                                  |   
|                           |     "owner_address_line_one": "123 Main St",                                                               | 
|                           |     "owner_address_line_two": "Apt 101",                                                                   |
|                           |     "owner_adress_city": "Somewhere",                                                                      |  
|                           |     "owner_address_state": "CA",                                                                             |  
|                           |     "owner_address_zip_code": 12345,                                                                        |  
|                           |     "owner_country": "USA",                                                                                  |   
|                           |     "user_id": 1                                                                                           |  
}                                                                                                                                        |



## Delete a dog information

| **Field**                            | **Details**                                                                                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Delete a Dog information**         |                                                                                             |
| **Method**                           | DELETE                                                                                      |                                                                     |
| **URL**                              | /dogs/dog_id                                                                                |                                                                      |
| **Successful Response**              | HTTP Status Code 200                                                                        |                                                                    |
| **Response Body**                    | `{‘message’:’delete it successfully’} `                                                     |                                                     |
| **Error Response**                   | HTTP Status Code 401                                                                        |                                                                     |
| **Error Response Body**              | `{‘error’: ARRAY_OF_STRINGS} `                                                              |                                                                     |

   

## Get Current User's Dog

| **Field**                | **Details**                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------|
| **Method**                | GET /dogs/current                                                                                           |
| **Description**           | Retrieves all dogs owned by the current user.                                                               |
| **Response**              | ```json                                                                                                      |
|                          | {                                                                                                           |
|                          |   "1": {                                                                                                     |
|                          |     "age": 1,                                                                                                 |
|                          |     "behavior_record": [                                                                                      |
|                          |       {                                                                                                      |
|                          |         "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                           |
|                          |         "behavior_type": "behavior record1",                                                                 |
|                          |         "description": "behavior record1",                                                                   |
|                          |         "id": 1                                                                                                |
|                          |       },                                                                                                      |
|                          |       {                                                                                                      |
|                          |         "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                           |
|                          |         "behavior_type": "behavior record2",                                                                 |
|                          |         "description": "behavior record2",                                                                   |
|                          |         "id": 2                                                                                                |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "birth_date": "Wed, 10 May 2023 00:00:00 GMT",                                                          |
|                          |     "breed_name": "Breed one",                                                                                |
|                          |     "color": "white",                                                                                         |
|                          |     "created_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                           |
|                          |     "description": "A dog photo typically captures the essence of ppearance",       |
|                          |     "dog_name": "Dog1",                                                                                       |
|                          |     "gender": "male",                                                                                         |
|                          |     "health_record": [                                                                                        |
|                          |       {                                                                                                      |
|                          |         "description": "health record1",                                                                     |
|                          |         "dog_id": 1,                                                                                         |
|                          |         "id": 1,                                                                                             |
|                          |         "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                     |
|                          |         "treatment": "health record1",                                                                       |
|                          |         "vet_name": "hhh"                                                                                     |
|                          |       },                                                                                                      |
|                          |       {                                                                                                      |
|                          |         "description": "health record2",                                                                     |
|                          |         "dog_id": 1,                                                                                         |
|                          |         "id": 2,                                                                                             |
|                          |         "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                     |
|                          |         "treatment": "health record2",                                                                       |
|                          |         "vet_name": "hhh"                                                                                     |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "id": 1,                                                                                                 |
|                          |     "image_url": "https://testburich-64742-230785.jpg",|
|                          |     "medical_allergies": "NA",                                                                                |
|                          |     "neutered_spayed": "spayed",                                                                             |
|                          |     "note": [                                                                                                 |
|                          |       {                                                                                                      |
|                          |         "content": "this is first note",                                                                     |
|                          |         "id": 1,                                                                                             |
|                          |         "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                       |
|                          |         "title": "note1",                                                                                     |
|                          |         "user": {                                                                                           |
|                          |           "email": "demo@aa.io",                                                                             |
|                          |           "id": 1,                                                                                           |
|                          |           "username": "Demo"                                                                                  |
|                          |         }                                                                                                    |
|                          |       },                                                                                                      |
|                          |       {                                                                                                      |
|                          |         "content": "this is second note",                                                                    |
|                          |         "id": 2,                                                                                             |
|                          |         "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                       |
|                          |         "title": "note2",                                                                                     |
|                          |         "user": {                                                                                           |
|                          |           "email": "demo@aa.io",                                                                             |
|                          |           "id": 1,                                                                                           |
|                          |           "username": "Demo"                                                                                  |
|                          |         }                                                                                                    |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "owner": {                                                                                                |
|                          |       "email": "demo@aa.io",                                                                                 |
|                          |       "id": 1,                                                                                               |
|                          |       "username": "Demo"                                                                                      |
|                          |     },                                                                                                       |
|                          |     "owner_address_city": "SD",                                                                              |
|                          |     "owner_address_line_one": "helloworld ln",                                                               |
|                          |     "owner_address_line_two": "helloworld two ln",                                                           |
|                          |     "owner_address_state": "CA",                                                                             |
|                          |     "owner_address_zip_code": 92130,                                                                         |
|                          |     "owner_country": "UK",                                                                                  |
|                          |     "owner_email": "hello@gmail.com",                                                                       |
|                          |     "owner_phone_number": "1234556435",                                                                     |
|                          |     "training_record": [                                                                                     |
|                          |       {                                                                                                      |
|                          |         "id": 1,                                                                                             |
|                          |         "notes": "helloworld",                                                                               |
|                          |         "trainer_name": "hi",                                                                                 |
|                          |         "training_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                   |
|                          |         "training_type": "helloworld"                                                                         |
|                          |       }                                                                                                      |
|                          |     ],                                                                                                       |
|                          |     "updated_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                           |
|                          |     "weight": "7.00"                                                                                         |
|                          |   },                                                                                                         |
|                          |   "2": ...                                                                                                   |
|                          | }                                                                                                           |
|                          | ```                                                                                                          |

 
-----------------------------------------------------------------------------  

## Get all photos


| **Field**          | **Details**                                                                                                 |
|--------------------|-------------------------------------------------------------------------------------------------------------|
| **Method**         | GET                                                                                                         |
| **Endpoint**       | /photos                                                                                                     |
| **Description**    | Fetch all photos in the database.                                                                           |
| **Response Status**| 201                                                                                                         |
| **Response Body**  | ```json                                                                                                      |
|                    | {                                                                                                           |
|                    |   "1": {                                                                                                     |
|                    |     "description": "A dog photo typically captures ty and appearance.",  |
|                    |     "dog": {                                                                                                 |
|                    |       "age": 1,                                                                                             |
|                    |       "behavior_record": [                                                                                  |
|                    |         {                                                                                                   |
|                    |           "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                          |
|                    |           "behavior_type": "behavior record1",                                                              |
|                    |           "description": "behavior record1",                                                                 |
|                    |           "id": 1                                                                                           |
|                    |         },                                                                                                  |
|                    |         {                                                                                                   |
|                    |           "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                          |
|                    |           "behavior_type": "behavior record2",                                                              |
|                    |           "description": "behavior record2",                                                                 |
|                    |           "id": 2                                                                                           |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "birth_date": "Wed, 10 May 2023 00:00:00 GMT",                                                        |
|                    |       "breed_name": "Breed one",                                                                             |
|                    |       "color": "white",                                                                                      |
|                    |       "created_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                         |
|                    |       "description": "A dog photo typically captures the appearancefsdfhhhh", |
|                    |       "dog_name": "Dog1",                                                                                    |
|                    |       "gender": "male",                                                                                     |
|                    |       "health_record": [                                                                                     |
|                    |         {                                                                                                   |
|                    |           "description": "health record1",                                                                  |
|                    |           "dog_id": 1,                                                                                        |
|                    |           "id": 1,                                                                                           |
|                    |           "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                   |
|                    |           "treatment": "health record1",                                                                    |
|                    |           "vet_name": "hhh"                                                                                  |
|                    |         },                                                                                                  |
|                    |         {                                                                                                   |
|                    |           "description": "health record2",                                                                  |
|                    |           "dog_id": 1,                                                                                        |
|                    |           "id": 2,                                                                                           |
|                    |           "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                   |
|                    |           "treatment": "health record2",                                                                    |
|                    |           "vet_name": "hhh"                                                                                  |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "id": 1,                                                                                                |
|                    |       "image_url": "https://testrich-64742-230785.jpg", |
|                    |       "medical_allergies": "NA",                                                                            |
|                    |       "neutered_spayed": "spayed",                                                                          |
|                    |       "note": [                                                                                             |
|                    |         {                                                                                                   |
|                    |           "content": "this is first note",                                                                  |
|                    |           "id": 1,                                                                                           |
|                    |           "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                    |
|                    |           "title": "note1",                                                                                 |
|                    |           "user": {                                                                                          |
|                    |             "email": "demo@aa.io",                                                                         |
|                    |             "id": 1,                                                                                        |
|                    |             "username": "Demo"                                                                               |
|                    |           }                                                                                                  |
|                    |         },                                                                                                  |
|                    |         {                                                                                                   |
|                    |           "content": "this is second note",                                                                 |
|                    |           "id": 2,                                                                                           |
|                    |           "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                    |
|                    |           "title": "note2",                                                                                 |
|                    |           "user": {                                                                                          |
|                    |             "email": "demo@aa.io",                                                                         |
|                    |             "id": 1,                                                                                        |
|                    |             "username": "Demo"                                                                               |
|                    |           }                                                                                                  |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "owner": {                                                                                             |
|                    |         "email": "demo@aa.io",                                                                              |
|                    |         "id": 1,                                                                                             |
|                    |         "username": "Demo"                                                                                    |
|                    |       },                                                                                                    |
|                    |       "owner_address_city": "SD",                                                                            |
|                    |       "owner_address_line_one": "helloworld ln",                                                             |
|                    |       "owner_address_line_two": "helloworld two ln",                                                         |
|                    |       "owner_address_state": "CA",                                                                           |
|                    |       "owner_address_zip_code": 92130,                                                                      |
|                    |       "owner_country": "UK",                                                                                |
|                    |       "owner_email": "hello@gmail.com",                                                                     |
|                    |       "owner_phone_number": "1234556435",                                                                   |
|                    |       "training_record": [                                                                                  |
|                    |         {                                                                                                   |
|                    |           "id": 1,                                                                                           |
|                    |           "notes": "helloworld",                                                                             |
|                    |           "trainer_name": "hi",                                                                              |
|                    |           "training_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                |
|                    |           "training_type": "helloworld"                                                                     |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "updated_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                         |
|                    |       "weight": "7.00"                                                                                        |
|                    |     },                                                                                                       |
|                    |     "id": 1,                                                                                                 |
|                    |     "image_url": "https://testbuckesmoubax-1124002.jpg",    |
|                    |     "owner": {                                                                                                |
|                    |       "email": "demo@aa.io",                                                                                 |
|                    |       "id": 1,                                                                                                |
|                    |       "username": "Demo"                                                                                      |
|                    |     },                                                                                                       |
|                    |     "photo_date": "Wed, 10 May 2023 00:00:00 GMT",                                                           |
|                    |     "title": "dog photo one"                                                                                 |
|                    |   },                                                                                                         |
|                    |   "2": ...                                                                                                    |
|                    | }                                                                                                           |
|                    | ```                                                                                                          |



## Get Current User's Photo

| **Field**          | **Details**                                                                                                 |
|--------------------|-------------------------------------------------------------------------------------------------------------|
| **Method**         | GET                                                                                                         |
| **Endpoint**       | /photos/current                                                                                             |
| **Description**    | Fetch current user’s photos.                                                                                |
| **Response Status**| 200                                                                                                         |
| **Response Body**  | ```json                                                                                                      |
|                    | {                                                                                                           |
|                    |   "1": {                                                                                                     |
|                    |     "description": "A dog photo typically captality and appearance.",  |
|                    |     "dog": {                                                                                                 |
|                    |       "age": 1,                                                                                             |
|                    |       "behavior_record": [                                                                                  |
|                    |         {                                                                                                   |
|                    |           "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                          |
|                    |           "behavior_type": "behavior record1",                                                              |
|                    |           "description": "behavior record1",                                                                 |
|                    |           "id": 1                                                                                           |
|                    |         },                                                                                                  |
|                    |         {                                                                                                   |
|                    |           "behavior_record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                          |
|                    |           "behavior_type": "behavior record2",                                                              |
|                    |           "description": "behavior record2",                                                                 |
|                    |           "id": 2                                                                                           |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "birth_date": "Wed, 10 May 2023 00:00:00 GMT",                                                        |
|                    |       "breed_name": "Breed one",                                                                             |
|                    |       "color": "white",                                                                                      |
|                    |       "created_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                         |
|                    |       "description": "A dog photo typically cappearancefsdfhhhh", |
|                    |       "dog_name": "Dog1",                                                                                    |
|                    |       "gender": "male",                                                                                     |
|                    |       "health_record": [                                                                                     |
|                    |         {                                                                                                   |
|                    |           "description": "health record1",                                                                  |
|                    |           "dog_id": 1,                                                                                        |
|                    |           "id": 1,                                                                                           |
|                    |           "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                   |
|                    |           "treatment": "health record1",                                                                    |
|                    |           "vet_name": "hhh"                                                                                  |
|                    |         },                                                                                                  |
|                    |         {                                                                                                   |
|                    |           "description": "health record2",                                                                  |
|                    |           "dog_id": 1,                                                                                        |
|                    |           "id": 2,                                                                                           |
|                    |           "record_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                   |
|                    |           "treatment": "health record2",                                                                    |
|                    |           "vet_name": "hhh"                                                                                  |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "id": 1,                                                                                                |
|                    |       "image_url": "https://testbucketh-64742-230785.jpg", |
|                    |       "medical_allergies": "NA",                                                                            |
|                    |       "neutered_spayed": "spayed",                                                                          |
|                    |       "note": [                                                                                             |
|                    |         {                                                                                                   |
|                    |           "content": "this is first note",                                                                  |
|                    |           "id": 1,                                                                                           |
|                    |           "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                    |
|                    |           "title": "note1",                                                                                 |
|                    |           "user": {                                                                                          |
|                    |             "email": "demo@aa.io",                                                                         |
|                    |             "id": 1,                                                                                        |
|                    |             "username": "Demo"                                                                               |
|                    |           }                                                                                                  |
|                    |         },                                                                                                  |
|                    |         {                                                                                                   |
|                    |           "content": "this is second note",                                                                 |
|                    |           "id": 2,                                                                                           |
|                    |           "note_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                    |
|                    |           "title": "note2",                                                                                 |
|                    |           "user": {                                                                                          |
|                    |             "email": "demo@aa.io",                                                                         |
|                    |             "id": 1,                                                                                        |
|                    |             "username": "Demo"                                                                               |
|                    |           }                                                                                                  |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "owner": {                                                                                             |
|                    |         "email": "demo@aa.io",                                                                              |
|                    |         "id": 1,                                                                                             |
|                    |         "username": "Demo"                                                                                    |
|                    |       },                                                                                                    |
|                    |       "owner_address_city": "SD",                                                                            |
|                    |       "owner_address_line_one": "helloworld ln",                                                             |
|                    |       "owner_address_line_two": "helloworld two ln",                                                         |
|                    |       "owner_address_state": "CA",                                                                           |
|                    |       "owner_address_zip_code": 92130,                                                                      |
|                    |       "owner_country": "UK",                                                                                |
|                    |       "owner_email": "hello@gmail.com",                                                                     |
|                    |       "owner_phone_number": "1234556435",                                                                   |
|                    |       "training_record": [                                                                                  |
|                    |         {                                                                                                   |
|                    |           "id": 1,                                                                                           |
|                    |           "notes": "helloworld",                                                                             |
|                    |           "trainer_name": "hi",                                                                              |
|                    |           "training_date": "Mon, 01 Jan 2024 00:00:00 GMT",                                                |
|                    |           "training_type": "helloworld"                                                                     |
|                    |         }                                                                                                   |
|                    |       ],                                                                                                    |
|                    |       "updated_at": "Sat, 01 Mar 2025 16:37:18 GMT",                                                         |
|                    |       "weight": "7.00"                                                                                        |
|                    |     },                                                                                                       |
|                    |     "id": 1,                                                                                                 |
|                    |     "image_url": "https://testbucketbymiexels-aloismoubax-1124002.jpg",    |
|                    |     "owner": {                                                                                                |
|                    |       "email": "demo@aa.io",                                                                                 |
|                    |       "id": 1,                                                                                                |
|                    |       "username": "Demo"                                                                                      |
|                    |     },                                                                                                       |
|                    |     "photo_date": "Wed, 10 May 2023 00:00:00 GMT",                                                           |
|                    |     "title": "dog photo one"                                                                                 |
|                    |   },                                                                                                         |
|                    |   "2": ...                                                                                                    |
|                    | }                                                                                                           |
|                    | ```                                                                                                          |


## Create a New Photo Record

| **Field**                | **Details**                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------|
| **Method**                | POST                                                                                                        |
| **Endpoint**              | /photos                                                                                                     |
| **Description**           | Create a new photo record.                                                                                 |
| **Request Body**          | ```json                                                                                                      |
|                          | {                                                                                                           |
|                          |   "photo_date": "2025-03-03",                                                                                |
|                          |   "title": "New Dog Photo",                                                                                  |
|                          |   "description": "A new photo of a dog.",                                                                   |
|                          |   "image_url": "http://example.com/dog3.jpg",                                                                |
|                          |   "dog_id": 6,                                                                                                |
|                          |   "user_id": 7                                                                                                |
|                          | }                                                                                                           |
|                          | ```                                                                                                          |
| **Response**              | ```json                                                                                                      |
|                          | {                                                                                                           |
|                          |   "id": 3,                                                                                                   |
|                          |   "photo_date": "2025-03-03",                                                                                |
|                          |   "title": "New Dog Photo",                                                                                  |
|                          |   "description": "A new photo of a dog.",                                                                   |
|                          |   "image_url": "http://example.com/dog3.jpg",                                                                |
|                          |   "dog_id": 6,                                                                                                |
|                          |   "user_id": 7,                                                                                                |
|                          |   "created_at": "2025-03-03T10:00:00",                                                                     |
|                          |   "updated_at": "2025-03-03T10:00:00"                                                                       |
|                          | }                                                                                                           |
|                          | ```                                                                                                          |


## Update a Photo


| **Field**                | **Details**                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------|
| **Method**                | PUT                                                                                                         |
| **Endpoint**              | /photos/photo_id                                                                                             |
| **Description**           | Update an existing photo record.                                                                             |
| **Request Body**          | ```json                                                                                                      |
|                          | {                                                                                                           |
|                          |   "title": "Updated Dog Photo",                                                                              |
|                          |   "description": "An updated description of the dog photo.",                                                 |
|                          |   "image_url": "http://example.com/updated_dog.jpg"                                                          |
|                          | }                                                                                                           |
|                          | ```                                                                                                          |
| **Response**              | ```json                                                                                                      |
|                          | {                                                                                                           |
|                          |   "id": 1,                                                                                                   |
|                          |   "photo_date": "2025-03-01",                                                                                |
|                          |   "title": "Updated Dog Photo",                                                                              |
|                          |   "description": "An updated description of the dog photo.",                                                 |
|                          |   "image_url": "http://example.com/updated_dog.jpg",                                                         |
|                          |   "dog_id": 2,                                                                                                |
|                          |   "user_id": 3,                                                                                                |
|                          |   "created_at": "2025-03-01T12:00:00",                                                                       |
|                          |   "updated_at": "2025-03-03T12:00:00"                                                                         |
|                          | }                                                                                                           |
|                          | ```                                                                                                          |
 


## Delete a Photo Information

| **Field**                            | **Details**                                                                                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Delete a Dog information**         |                                                                                             |
| **Method**                           | DELETE                                                                                      |                                                                     |
| **URL**                              | /photos/photo_id                                                                            |                                                                            |
| **Successful Response**              | HTTP Status Code 200                                                                        |                                                                    |
| **Response Body**                    | `{‘message’:’delete it successfully’} `                                                     |                                                     |
| **Error Response**                   | HTTP Status Code 401                                                                        |                                                                     |
| **Error Response Body**              | `{‘error’: ARRAY_OF_STRINGS} `                                                              |                                                                    |

 

## Feature List  

1. Dog's Detail Page
2. Photo's Detail Page

## Contact
[miaohua](https://github.com/miaohua897)
[LinkedIn](https://www.linkedin.com/in/haijian-hou-b1b32b344/)   

---------------------------------------------------------------------------------   

# Flask React Project

This is the starter for the Flask React project.

## Getting started

1. Clone this repository (only this branch).

2. Install dependencies.

   ```bash
   pipenv install -r requirements.txt
   ```

3. Create a __.env__ file based on the example with proper settings for your
   development environment.

4. Make sure the SQLite3 database connection URL is in the __.env__ file.

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention.**

6. Get into your pipenv, migrate your database, seed your database, and run your
   Flask app:

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. The React frontend has no styling applied. Copy the __.css__ files from your
   Authenticate Me project into the corresponding locations in the
   __react-vite__ folder to give your project a unique look.

8. To run the React frontend in development, `cd` into the __react-vite__
   directory and run `npm i` to install dependencies. Next, run `npm run build`
   to create the `dist` folder. The starter has modified the `npm run build`
   command to include the `--watch` flag. This flag will rebuild the __dist__
   folder whenever you change your code, keeping the production version up to
   date.

## Deployment through Render.com

First, recall that Vite is a development dependency, so it will not be used in
production. This means that you must already have the __dist__ folder located in
the root of your __react-vite__ folder when you push to GitHub. This __dist__
folder contains your React code and all necessary dependencies minified and
bundled into a smaller footprint, ready to be served from your Python API.

Begin deployment by running `npm run build` in your __react-vite__ folder and
pushing any changes to GitHub.

Refer to your Render.com deployment articles for more detailed instructions
about getting started with [Render.com], creating a production database, and
deployment debugging tips.

From the Render [Dashboard], click on the "New +" button in the navigation bar,
and click on "Web Service" to create the application that will be deployed.

Select that you want to "Build and deploy from a Git repository" and click
"Next". On the next page, find the name of the application repo you want to
deploy and click the "Connect" button to the right of the name.

Now you need to fill out the form to configure your app. Most of the setup will
be handled by the __Dockerfile__, but you do need to fill in a few fields.

Start by giving your application a name.

Make sure the Region is set to the location closest to you, the Branch is set to
"main", and Runtime is set to "Docker". You can leave the Root Directory field
blank. (By default, Render will run commands from the root directory.)

Select "Free" as your Instance Type.

### Add environment variables

In the development environment, you have been securing your environment
variables in a __.env__ file, which has been removed from source control (i.e.,
the file is gitignored). In this step, you will need to input the keys and
values for the environment variables you need for production into the Render
GUI.

Add the following keys and values in the Render GUI form:

- SECRET_KEY (click "Generate" to generate a secure secret for production)
- FLASK_ENV production
- FLASK_APP app
- SCHEMA (your unique schema name, in snake_case)

In a new tab, navigate to your dashboard and click on your Postgres database
instance.

Add the following keys and values:

- DATABASE_URL (copy value from the **External Database URL** field)

**Note:** Add any other keys and values that may be present in your local
__.env__ file. As you work to further develop your project, you may need to add
more environment variables to your local __.env__ file. Make sure you add these
environment variables to the Render GUI as well for the next deployment.

### Deploy

Now you are finally ready to deploy! Click "Create Web Service" to deploy your
project. The deployment process will likely take about 10-15 minutes if
everything works as expected. You can monitor the logs to see your Dockerfile
commands being executed and any errors that occur.

When deployment is complete, open your deployed site and check to see that you
have successfully deployed your Flask application to Render! You can find the
URL for your site just below the name of the Web Service at the top of the page.

**Note:** By default, Render will set Auto-Deploy for your project to true. This
setting will cause Render to re-deploy your application every time you push to
main, always keeping it up to date.

[Render.com]: https://render.com/
[Dashboard]: https://dashboard.render.com/
# PuzzlePawCapstone
