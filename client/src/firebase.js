
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA306NRZjcvrRhVnehiVlKP-AsqtbLLYCk",
  authDomain: "netflix-clone-b860e.firebaseapp.com",
  projectId: "netflix-clone-b860e",
  storageBucket: "netflix-clone-b860e.appspot.com",
  messagingSenderId: "929231201519",
  appId: "1:929231201519:web:4f9c3a3d9be9ad4941671a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password ) => {

    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user
       await addDoc(collection(db, "user"), {

        uid: user.uid,
        name,
        authProvider: "local",
        email,
       });
    } catch (error) {
        console.log(error);
        alert(error);
        
    }

}
const login = async (email, password) => {
 try {
   await signInWithEmailAndPassword(auth, email, password);

 } catch (error) {
    console.log(error)
    alert(error);
 }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};