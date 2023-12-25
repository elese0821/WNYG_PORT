import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmX3cwdroMeV61WUvZpNJMVYIoUb7-9ZE",
    authDomain: "wnyg-port.firebaseapp.com",
    projectId: "wnyg-port",
    storageBucket: "wnyg-port.appspot.com",
    messagingSenderId: "240276576499",
    appId: "1:240276576499:web:8e3bed935364ba3d70ff86",
    measurementId: "G-M6HWFPPT3V"
};

firebase.initializeApp(firebaseConfig);

export default firebase;