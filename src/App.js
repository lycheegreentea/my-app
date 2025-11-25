import logo from './logo.svg';
import './App.css';
import React from "react";
import Webcam from "react-webcam";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
const counnter = document.getElementById('countdown')

function App() {
  return (
    <div className="App">
        <h1>Photobooth</h1>
        <p>take your own photos!</p>
      <div>
        <button>b&w</button>
        <button>blue</button>
        <button>color</button>
        <button>counter</button>
        <WebcamCapture />
        
      </div>
    </div>
  );
}

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />

      
      <button onClick={capture}>Start!</button>
      {imgSrc && (
        <img src = {imgSrc} />
    )}
    </>
  );

}
//321 go 
//

const countDown = () => {
  for (let i = 0; i<3; i++){
    for(let z = 0; z<3; z++){
      setInterval(count(count), 1000);
    }  
    {imgSrc && (
        <img src = {imgSrc} />
    )}
  }
  return("Geese");
}





export default App;
