
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
                            <p style={{color:'darkblue'}}>no note yet</p>
                            :
                            <div>                              
                            <div className="newest-note-title-content">
                                 <strong>{dog.note[dog.note.length-1].title}</strong>
                                 <p>{dog.note[dog.note.length-1].content}</p>
                            </div> 
                            <div className="newest-health-record-container">
                                <div className="newest-health-record-info">
                                 <strong>description:</strong>
                                 <p>{dog.health_record[dog.health_record.length-1].description}</p>
                                </div>
                                <div className="newest-health-record-info">
                                 <strong>treatment:</strong>
                                 <p>{dog.health_record[dog.health_record.length-1].treatment}</p>
                                </div>
                                <div className="newest-health-record-info">
                                 <strong>Vet Name:</strong>
                                 <p>{dog.health_record[dog.health_record.length-1].vet_name}</p>
                                 </div>
                            </div> 
                            </div>                           
                            }
                         
                        </div>
                    )
                 })
                :null
                }
             </div>
    )
}
export default NewestDogNoteRecord