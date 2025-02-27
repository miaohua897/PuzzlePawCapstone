import './LargePhotoPage.css';

function LargePhotoPage({photo}){
    return (
        <div>
            <img src={photo.image_url}  style={{width:700,height:550, borderRadius:20}} />
        </div>
    )
}
export default LargePhotoPage;