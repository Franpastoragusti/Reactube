/**
 * Created by fran on 9/7/17.
 */

import React, { Component } from 'react';


const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item">

                </iframe>
            </div>
            <div className="detail">
                <h2>
                    {video.snippet.title}
                </h2>
                <p>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    )
};

export default VideoDetail;