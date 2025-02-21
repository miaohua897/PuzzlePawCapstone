import './DeletePhotoPage.css';

function DeletePhotoPage(){
    return (
        <div className="delete-container">
            <form className="delete-form-container">
                <h1>Delete a Photo</h1>
                <div className='delete-form-buttons-container'>
                    <button className='delete-form-button'>Cancel</button>
                    <button className='delete-form-button'> Delete</button>
                </div>
            </form>
        </div>
    )
}
export default DeletePhotoPage;