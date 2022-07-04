import React, {useState} from 'react';
import './VideoSidebar.css';
// import Favorite from "@mui/icons-material/Favorite";
// import Message from "@mui/icons-material/Message";
// import Share from "@mui/icons-material/Share";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function VideoSidebar() {
    const [liked, setLiked] = useState(false);

    return (
        <div className='video-sidebar'>
            {/* <div className="video-sidebar-button">
                <liked ? (
                    <Favorite 
                        fontSize="large" 
                        onClick={(e) => setLiked(false)}
                    />
                ) : (
                    <FavoriteBorderIcon
                        fontSize="large"
                        onClick={(e) => setLiked(true)}
                    />
                )
                <p>{liked ? 93 : 92}</p>
            </div>

            <div className="video-sidebar-button">
                <Message fontSize="large" />
                <p>45</p>
            </div>

            <div className="video-sidebar-button">
                <Share fontSize="large" />
                <p>30</p>
            </div> */}
        </div>
    )
};

export default VideoSidebar;