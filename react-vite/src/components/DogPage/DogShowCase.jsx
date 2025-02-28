import {useSetDogId} from '../../context/SetDogId';
import {useSideBarStatus} from '../../context/SideBar';

function DogShowCase({dogsArr,existDog,showDog,dogs}){

    const {selectedDogId} =  useSetDogId();
    const {setIsSideBarOpen}=useSideBarStatus();

    return (
        <div>
        {
            dogsArr.length !== 0?
             existDog?
                <div className="showcase-container" onClick={() => { setIsSideBarOpen(false)}}> 
            <div className="dog-info-container">
                        <div className="showcase-dog-img-container">
                        <img src={dogs[selectedDogId].image_url} className="dog-info-image" />
                        </div>
                <div className="dog-info">
                        <p id='showcase-info-dog-name'>{dogs[selectedDogId].dog_name}</p>
                        <div className="dog-basic-info">
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Age: </p>
                                        <p id='dog-basic-info-text' >{dogs[selectedDogId].age}</p>
                                    </div>
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Weight: </p>
                                        <p id='dog-basic-info-text' > {dogs[selectedDogId].weight}</p>
                                    </div>
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Breed:</p>
                                        <p id='dog-basic-info-text' >
                                            {dogs[selectedDogId].breed_name}
                                        </p>
                                    </div>
                        </div>
            
                                <div className="dog-basic-text">
                                    <p id='dog-basic-label'>Bio:</p>
                                    <p id='dog-basic-info-text' >
                                        {dogs[selectedDogId].description}
                                    </p>
                                </div>
                                <div className="dog-basic-text">
                                    <p id='dog-basic-label'>Medical/Allergies:</p>
                                    <p id='dog-basic-info-text' >
                                        {dogs[selectedDogId].medical_allergies}
                                    </p>
                                </div>
                                <div className="dog-basic-text">
                                    <p id='dog-basic-label'>Owner:</p>
                                    <p id='dog-basic-info-text' >
                                        {dogs[selectedDogId].owner.username}
                                    </p>
                                </div>
                    </div>          
                </div>
             </div>
            :
            <div className="showcase-container" onClick={() => {setIsSideBarOpen(false)}}>
                <h1>My Beloved Dogs</h1>
                <div className="dog-info-container">
                    <div className="showcase-dog-img-container">
                    <img src={showDog.image_url} className="dog-info-image" />
                    </div>
                    <div className="dog-info">
                        <p id='showcase-info-dog-name'>{showDog.dog_name}</p>   
                        <div className="dog-basic-info">
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Age: </p>
                                        <p id='dog-basic-info-text' >{showDog.age}</p>
                                    </div>
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Weight: </p>
                                        <p id='dog-basic-info-text' >{showDog.weight}</p>
                                    </div>
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Breed:</p>
                                        <p id='dog-basic-info-text' >
                                            {showDog.breed_name}
                                        </p>
                                    </div>
                        </div>
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Bio:</p>
                                        <p id='dog-basic-info-text' >{showDog.description}</p>
                                    </div>
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Medical/Allergies:</p>
                                        <p id='dog-basic-info-text' > {showDog.medical_allergies}</p>
                                    </div>
                                    <div className="dog-basic-text">
                                        <p id='dog-basic-label'>Owner:</p>
                                        <p id='dog-basic-info-text' > {showDog.owner.username}</p>
                                    </div>
                    </div>          
                </div>
            </div>
            :<h2>add your first dog</h2>        
        }
     </div>
     )
}
export default DogShowCase;