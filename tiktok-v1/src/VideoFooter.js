import React, {useRef, useState} from 'react';
import './VideoFooter.css';
import SuperTicker from './SuperTicker.js';
// import MusicNote from '@mui/icons-material/MusicNote';
// import Ticker from 'react-ticker';

function VideoFooter() {
    return (
        <div className="video-footer">
            <div className="video-footer-text">
                {/* <div className="video-footer-icon">
                    <MusicNote fontSize="large"/>
                </div> */}
                <h3>@average.cherrisoda.enjoyer</h3>
                <p>when something has done something...</p>
                
                <SuperTicker />
                {/* <div className="video-footer-ticker">
                    <AudiotrackSharpIcon className="video-footer-icon" />

                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                            <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div> */}
            </div>
        </div>
    )
};

export default VideoFooter;