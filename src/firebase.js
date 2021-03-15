import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3VTmSD0yvpUgGk2Nh1tQF9BtOtUO_eKA",
    authDomain: "fir-diaryapp.firebaseapp.com",
    projectId: "fir-diaryapp",
    storageBucket: "fir-diaryapp.appspot.com",
    messagingSenderId: "574238445980",
    appId: "1:574238445980:web:c7dda40d4d85f6c975b859",
    measurementId: "G-S2JJY1CPNN"
  };

firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 