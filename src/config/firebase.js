import firebase from firebase

var firebaseConfig = {
    apiKey: "AIzaSyCnaHfWDTRTzNqaQFVC9XQG3NOsVs55zno",
    authDomain: "de-julio-a3b67.firebaseapp.com",
    projectId: "de-julio-a3b67",
    storageBucket: "de-julio-a3b67.appspot.com",
    messagingSenderId: "875740913716",
    appId: "1:875740913716:web:9799eab30c2a17b3afea61",
    measurementId: "G-TZCKE4NFZK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase