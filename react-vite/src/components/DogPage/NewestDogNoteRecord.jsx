
function NewestDogNoteRecord({dogsArr}){
    return (
     
            <div className="newest-dog-note-container">
             <p id='news-dog-title'>Newest Data of your dogs</p>
             {
                dogsArr.length !== 0?
                 dogsArr.map((dog,index)=>{
                    return (
                        <div key={index} className="newest-note-container">
                            <p id='news-note-dog-name'>{dog.dog_name}</p>
                           { dog.note.length ===0?
                            <p style={{color:'darkblue'}}>Dont have note yet</p>
                            :
                            <div className="newest-health-record-container">                              
                                <div className="newest-health-record-info">                        
                                    <strong>Title:</strong>
                                    <p>{dog.note[dog.note.length-1].title}</p>
                                </div> 
                                <div className="newest-health-record-info">
                                    <strong>Content</strong>
                                    <p>{dog.note[dog.note.length-1].content}</p>
                                </div>
                            </div>                           
                            }
                            {
                                dog.health_record.length ===0?
                                <p style={{color:'darkblue'}}>Dont have health record yet</p>
                                :
                             
                                <div className="newest-health-record-container">
                                    <h3>Health Record</h3>
                                    <div className="newest-health-record-info">
                                        <strong>Description:</strong>
                                        <p>{dog.health_record[dog.health_record.length-1].description}</p>
                                    </div>
                                    <div className="newest-health-record-info">
                                        <strong>Treatment:</strong>
                                        <p>{dog.health_record[dog.health_record.length-1].treatment}</p>
                                    </div>
                                    <div className="newest-health-record-info">
                                        <strong>Vet Name:</strong>
                                        <p>{dog.health_record[dog.health_record.length-1].vet_name}</p>
                                    </div>
                                </div> 

                            }  
                            {
                                dog.behavior_record.length ===0?
                                <p style={{color:'darkblue'}}>Dont have behavior record yet</p>
                                :
                             
                             <div className="newest-health-record-container">
                                <h3>Behavior Record</h3>
                                <div className="newest-health-record-info">
                                    <strong>Behavior Type</strong>
                                    <p>{dog.behavior_record[dog.behavior_record.length-1].behavior_type}</p>
                                </div>
                                <div className="newest-health-record-info">
                                <strong>Behavior Description</strong>
                                <p>{dog.behavior_record[dog.behavior_record.length-1].description}</p>
                                </div>
                            </div> 
                            } 
                            {
                                dog.training_record.length ===0?
                                <p style={{color:'darkblue'}}>Dont have training record yet</p>
                                :
                             
                             <div className="newest-health-record-container">
                                <h3>Training Record</h3>
                                <div className="newest-health-record-info">
                                    <strong>Training Type</strong>
                                    <p>{dog.training_record[dog.training_record.length-1].training_type}</p>
                                </div>
                                <div className="newest-health-record-info">
                                <strong>Training Notes</strong>
                                <p>{dog.training_record[dog.training_record.length-1].notes}</p>
                                </div>
                                <div className="newest-health-record-info">
                                <strong>Trainer Name</strong>
                                <p>{dog.training_record[dog.training_record.length-1].trainer_name}</p>
                                </div>
                            </div> 

                            }                        
                        </div>
                    )}):null}
             </div>
    )
}
export default NewestDogNoteRecord