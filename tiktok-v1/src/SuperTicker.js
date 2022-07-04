import React, {useRef, useState} from 'react';
// import AudiotrackSharpIcon from '@mui/icons-material/AudiotrackSharp';
import Ticker from 'react-ticker';
import './VideoFooter.css';

function MusicHandler () {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
    // If video is playing music...
    // Stop!
    if (playing) {
        videoRef.current.mute();           
        setPlaying(false);
    }

    else {
        videoRef.current.unmute();
        setPlaying(true);
    }
    // If video is not playing music...
    // Let's goooo
};
}

const SuperTicker = () => (
    <div className="video-footer-ticker">
        <Ticker mode="smooth" move>
            {({ index, song }) => (
                <>
                    <p>Waltz No. 2- Dimitri Shostakovich- Click the record for sound...          Waltz No. 2- Dimitri Shostakovich- Click the record for sound...          Waltz No. 2- Dimitri Shostakovich- Click the record for sound...          Waltz No. 2- Dimitri Shostakovich- Click the record for sound...          Waltz No. 2- Dimitri Shostakovich- Click the record for sound...          Waltz No. 2- Dimitri Shostakovich- Click the record for sound...          Waltz No. 2- Dimitri Shostakovich- Click the record for sound...          Waltz No. 2- Dimitri Shostakovich- Click the record for sound...</p>
                </>
            )}
        </Ticker>
        <img src="https://cdn.pixabay.com/photo/2012/04/01/13/01/dvd-23365_1280.png" className="video-footer-record" alt="spinning disc icon" onClick={MusicHandler}/>
    </div>
);

export default SuperTicker;