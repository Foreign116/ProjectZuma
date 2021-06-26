import React from 'react';
import ReactPlayer from 'react-player/youtube' // Documentation https://www.npmjs.com/package/react-player


export const Video = (props) => {

    const { videoUrl } = props;



    return (
        <>
            <ReactPlayer 
            url={videoUrl}
            controls={true}
            />
        </>
    );
};
