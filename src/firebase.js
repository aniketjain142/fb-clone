import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD8z9OLjqogia9YiT3eHI3Q4X2Dq-q50ao",
    authDomain: "facebook-clone-1df84.firebaseapp.com",
    databaseURL: "https://facebook-clone-1df84.firebaseio.com",
    projectId: "facebook-clone-1df84",
    storageBucket: "facebook-clone-1df84.appspot.com",
    messagingSenderId: "179853281774",
    appId: "1:179853281774:web:837bea9fd93111f6da66ff",
    measurementId: "G-T89TKN5N1W"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;