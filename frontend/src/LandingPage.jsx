import React from 'react';
import { SearchBar } from './SearchBar';

export const LandingPage = (props) => {

    const { handleButtonClick, setVideoUrl } = props;

    return (
    <div className="container-fluid">
        <h1 className="siteHeader">Project Zuma</h1>
        <SearchBar handleButtonClick={handleButtonClick} setVideoUrl={setVideoUrl} />
    </div>
    );
};
