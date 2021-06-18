import firebase from firebase

const firebaseConfig = {
    apiKey: "AIzaSyDEL0PCATDax4x0HhiOxA3gpuaw4zTatWE",
    authDomain: "instituto-privado-9-de-julio.firebaseapp.com",
    projectId: "instituto-privado-9-de-julio",
    storageBucket: "instituto-privado-9-de-julio.appspot.com",
    messagingSenderId: "775206423383",
    appId: "1:775206423383:web:ea78f838bc60cc28f20c12",
    measurementId: "G-C8BPYZRMMN"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase