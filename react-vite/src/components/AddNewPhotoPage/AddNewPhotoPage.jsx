import './AddNewPhotoPage.css';

function AddNewPhotoPage(){
    return (
        <div className="update-container">
           
            <form className="update-form-container">
            <h1>Update a New Photo</h1>
            <div>
            <div className='update-input'>
            <label htmlFor ='photo_date' className='update-form-lable'>select a date</label>
            <input type='date' id='photo-date' name='photo_name'></input>
            </div>
            <div className='update-input'>
                <label htmlFor ='title' className='update-form-lable'>title</label>
                <input type='text' id='photo-title' name='title'></input>
            </div>
            <div className='update-input' >
                <label htmlFor ='description' className='update-form-lable'>description</label>
                <input type='text' id='photo-description' name='description'></input>
            </div>
            <div className='update-input'>
                 <label htmlFor ="image_upload" className='update-form-lable'>Upload an image:</label>
                <input type="file" id="image-upload" name="image_upload" accept="image/*" />
            </div>
            </div>
        
            <button className='update-form-submit'>Submit</button>
            </form>
        </div>
    )
}
export default AddNewPhotoPage;