// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyAwAxP-MWwNnKP59PA6joil4Ceq10eozlc",
  authDomain: "wafula-s-educational-posts.firebaseapp.com",
  projectId: "wafula-s-educational-posts",
  storageBucket: "wafula-s-educational-posts.appspot.com",
  messagingSenderId: "1040710248503",
  appId: "1:1040710248503:web:87fbd02de2b919511577b2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();