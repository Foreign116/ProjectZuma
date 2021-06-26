import React, { useState } from 'react';
import { LandingPage } from './LandingPage';
import { Video } from './Video';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import './index.css';

export const App = () => {


  const [videoUrl, setVideoUrl] = useState("");
  const history = useHistory();

  const handleButtonClick = () => {
    // send video url back to backend to validate it is a correct url
    // and then pass it into video component to render on to screen
    // we want to validate in the backend cause I don't want to handle business logic in the front end
    if(videoUrl.length > 0 && videoUrl !== ""){
      history.push("/video");
    }

}


  return (
        <Switch>
          <Route exact path="/">
            <LandingPage handleButtonClick={handleButtonClick} setVideoUrl={setVideoUrl} />
          </Route>
          <Route path="/video">
            <Video videoUrl={videoUrl} />
          </Route>
        </Switch>
  );
};
