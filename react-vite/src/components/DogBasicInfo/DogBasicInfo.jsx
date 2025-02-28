import './DogBasicInfo.css'

function DogBasicInfo({dog}){
    return (
        <div className="dog-basic-info-container">
            <div className='dog-title-container'>
                <strong>Dog Name:</strong>
                <p>{dog.dog_name}</p>
            </div>         
            <div className='dog-description-container'>
                <strong>Description:</strong>
                <p>{dog.description}</p>
            </div>
            <div className='dog-ma-container'>
                <strong>Medical/Allergies:</strong>
                <p>{dog.medical_allergies}</p>
            </div>
            <div className='dog-owner-container'>
                <strong>Owner:</strong>
                <p>{dog.owner.username}</p>
            </div>
        </div>
    )
}
export default  DogBasicInfo