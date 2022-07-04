import React, {useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter.js';
import VideoSidebar from './VideoSidebar.js';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // If video is playing...
        // Stop!
        if (playing) {
            videoRef.current.pause();           
            setPlaying(false);
        }

        else {
            videoRef.current.play();
            setPlaying(true);
        }
        // If video is not playing...
        // Let's goooo
    };

    // Code in case an override is needed for chromium browsers, since it is against some policies to autoplay videos unmuted, and some chromium browsers fail to read the muted boolean value in the DOM.
    // var tiktokPlayer = document.getElementsByClassName("tiktok-player");
    // tiktokPlayer.oncanplaythrough = function() {
    //     // tiktokPlayer.muted = true;
    //     tiktokPlayer.play();
    // }

    // Autoplay is enabled but is muted upon the page loading, and the video size is relatively small for data saving purposes with controls available for pausing and disabling loop.
    return (
        <div className="video">
            <video className="tiktok-player" autoPlay muted loop type="video/mp4" ref={videoRef} onClick={handleVideoPress}>
                <source src="https://cdn.discordapp.com/attachments/752595912202649601/972707372650856448/video_2022-05-05_19-02-48.mp4"></source>
            </video>

            {/* Video Footer */}
            <VideoFooter />

            {/* Video Sidebar */}
            <VideoSidebar />
        </div>
    )
};

export default Video;