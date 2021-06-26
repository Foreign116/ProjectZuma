import React from 'react';

export const SearchBar = (props) => {

    const { setVideoUrl, handleButtonClick } = props;



    return (
        <div className="container big-push-down">
        <div className="row">
            <div className="col-10"> 
                <input id="url" className="form-control form-control-lg" 
                type="text" placeholder="Insert youtube video url" onChange={(e) => setVideoUrl(e.target.value)} />
            </div>
            <div className="col-2">
                <button id="searchButton"type="button" className="btn btn-dark" onClick={handleButtonClick}>Search</button>
            </div>
        </div>
        </div>
    );
};
