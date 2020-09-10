import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';
function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('Post').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image: imageUrl
        })
        //Some clever db studd
        setInput('');
        setImageUrl('');

    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender_input" placeholder={`Whats on your mind,${user.displayName}`} type="text" />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}

                        type="text" placeholder={'Image url (Optional)'} />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
               </button>
                </form>


            </div>
            <div className="messageSender_botton">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <EmojiEmotionsIcon style={{ color: "orange" }} />
                    <h3>Felling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
