import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAjClp7i1UhFqFhcGUpN0IZFBs8VFewPOo",
    authDomain: "disneyphus-clone.firebaseapp.com",
    databaseURL: "https://disneyphus-clone-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "disneyphus-clone",
    storageBucket: "disneyphus-clone.appspot.com",
    messagingSenderId: "272881610317",
    appId: "1:272881610317:web:1c6aa19623be857612b604",
    measurementId: "G-7LZW4VXB1J"
  };

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
const storage = getFirestore(firebaseApp)

const database = getDatabase(firebaseApp);

export { auth, provider, storage, database }
export default storage

