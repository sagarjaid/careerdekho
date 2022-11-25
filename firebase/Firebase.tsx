// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9ntpcXZWGASWRYFHkzxt8ONVkniWqu3g",
    authDomain: "careerdekho.firebaseapp.com",
    projectId: "careerdekho",
    storageBucket: "careerdekho.appspot.com",
    messagingSenderId: "964609297339",
    appId: "1:964609297339:web:fb83cff2d71cbcb1fed29e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const intiFirebase = () => {
    return app;
}