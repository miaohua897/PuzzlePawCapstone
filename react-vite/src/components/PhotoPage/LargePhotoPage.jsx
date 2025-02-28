
function LargePhotoPage({photo}){
    return (
        <div className='large-photo-container'>
            <img src={photo.image_url}  style={{width:700,height:550}} />
        </div>
    )
}
export default LargePhotoPage;