
import firebase from "firebase/app";
import "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyBGhrxc-77eJxFmPrjfHCfBiXPHHBGlycc",
    authDomain: "otp-validation-6c845.firebaseapp.com",
    projectId: "otp-validation-6c845",
    storageBucket: "otp-validation-6c845.appspot.com",
    messagingSenderId: "567145562400",
    appId: "1:567145562400:web:787c0921efdaa031a2d745"
  };


  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
