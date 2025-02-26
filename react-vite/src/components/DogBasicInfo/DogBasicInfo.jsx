import './DogBasicInfo.css'

function DogBasicInfo({dog}){
    return (
        <div className="dog-basic-info-container">
            <h1>{dog.dog_name}</h1>
            <p>{dog.description}</p>
            <p>{'medical/allergies:    '+dog.medical_allergies}</p>
            <p>{'owner:                  '+ dog.owner.username}</p>
        </div>
    )
}
export default  DogBasicInfo