import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {thunkLoadSharePhotos} from '../../redux/photo';
import { useNavigate } from "react-router-dom";
import './FriendSharePhoto.css';

function FriendSharePhoto (){
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const allPhotos = useSelector(state=>state.photo.sharePhoto)
    const sessionUser = useSelector(state=>state.session.user);
    useEffect(()=>{
          dispatch(thunkLoadSharePhotos())
    },[dispatch])
    if (! sessionUser)  return navigator('/');

    const userFriends = sessionUser.friends;
    const userFriendsId = userFriends.map(el=>el.id);

    let friendsPhotos = []
    if (allPhotos){
        Object.values(allPhotos).map(photo=>{
            if (userFriendsId.indexOf(photo.owner.id)>=0){
              friendsPhotos.push(photo)
            }
        })
    }
    return(
        <div>
            {
                friendsPhotos.length !==0?
                friendsPhotos.map((photo,index)=>{
                    return (
                        <div key={index} className="share-photo-container">
                                <img src={photo.image_url} className='share-photoes'/>
                            <div className="friend-photo-container">
                                <p id='photo-title'>{'Photo Title: '+photo.title}</p>
                                <p id='photo-description'>{'Photo Description: '+photo.description}</p>
                                <p id='photo-author'>{"by "+ photo.owner.username}</p>
                            </div>
                        </div>)
                })
                : <p>your friends dont have any shared photo</p>

            }
        </div>
    )
}
export default FriendSharePhoto;