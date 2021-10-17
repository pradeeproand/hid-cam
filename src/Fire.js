import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyCO5AuHtKtybnWhN8dmOKKedQRcOjezyt4",
    authDomain: "hid-cam.firebaseapp.com",
    databaseURL: "https://hid-cam-default-rtdb.firebaseio.com",
    projectId: "hid-cam",
    storageBucket: "hid-cam.appspot.com",
    messagingSenderId: "364777228951",
    appId: "1:364777228951:web:4175e3459795c41d5337d2",
    measurementId: "G-5DV2K5109R"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;