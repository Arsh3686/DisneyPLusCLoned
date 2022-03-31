import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyBglWx9E47GqgcIKQyZIHT0i6fqGJTLHBE",
  authDomain: "disneyplusclone-643ff.firebaseapp.com",
  projectId: "disneyplusclone-643ff",
  storageBucket: "disneyplusclone-643ff.appspot.com",
  messagingSenderId: "188594076121",
  appId: "1:188594076121:web:31bd8ee430528c8b9901c8",
  measurementId: "G-L1ZTB3YYYB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const provider = new app.a


// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;