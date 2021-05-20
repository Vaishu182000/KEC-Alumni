import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBdbg3xS7UCKr_EcpGHSzVAT1jmsmgn9F8",
  authDomain: "podetails-c7f86.firebaseapp.com",
  projectId: "podetails-c7f86",
  storageBucket: "podetails-c7f86.appspot.com",
  messagingSenderId: "1021475982342",
  appId: "1:1021475982342:web:300746fdd787b04fe40787",
  measurementId: "G-YS8PRG6X2E"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  firebase.analytics();
  export default db;