import React from 'react';
import Story from './Story';
import './StoryReel.css';


function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://www.w3schools.com/howto/img_avatar2.png"
            profileSrc="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            title="aniket"/>
             <Story 
            image="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            profileSrc="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            title="aniket"/>
             <Story 
            image="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            profileSrc="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            title="aniket"/>
             <Story 
            image="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            profileSrc="https://www.w3schools.com/bootstrap4/img_avatar3.png"
            title="aniket"/>
            
        </div>
    )
}

export default StoryReel
