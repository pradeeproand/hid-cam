import React, { useRef, useState } from 'react';
import Webcam from 'webcam-react';
import fire from './Fire';
import './App.css'
import image from './photo/blackImage.jpg';

function App() {
    const photoRef = useRef(null);
    var photoScr = useState(null);

    const showPhoto = () => {
        photoScr = photoRef.current.getScreenshot()
        let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        fire.database().ref('messages').push(photoScr)
        return (console.log(photoScr))
    };

    return ( <
        div className = 'Main' >
        <
        Webcam className = 'webcam'
        ref = { photoRef }
        /> <
        img src = { image }
        alt = '' / >
        <
        button onClick = { showPhoto } > ON < /button> < /
        div >
    );
}

export default App;