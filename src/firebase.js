import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig={
    apiKey: "AIzaSyBOlw1m0TRD9C9VpRik0-_ZxdbQnb3ddmQ",
    authDomain: "todo-f4ab7.firebaseapp.com",
    projectId: "todo-f4ab7",
    storageBucket: "todo-f4ab7.appspot.com",
    messagingSenderId: "91492208999",
    appId: "1:91492208999:web:64b96d3e6bab252b7e1fc2",
    measurementId: "G-XFZSR9Y782"
};
const app=initializeApp(firebaseConfig);
const db=getFirestore(app)
export const auth=getAuth(app)
export {db}
export default app;