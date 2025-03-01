
function NewestDogNote({dogsArr}){
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
                            <div className="newest-note-title-content">
                                 <strong>{dog.note[dog.note.length-1].title}</strong>
                                 <p>{dog.note[dog.note.length-1].content}</p>
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
export default NewestDogNote