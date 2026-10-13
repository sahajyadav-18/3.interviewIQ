
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
 apiKey: "AIzaSyBlKWM47uBaupBXfHyr2O0s6qQneFxYzgk",
   authDomain: "fir-505a4.firebaseapp.com",
  projectId: "fir-505a4",
  storageBucket: "fir-505a4.firebasestorage.app",
  messagingSenderId: "1092954543029",
  appId: "1:1092954543029:web:3c35e5d647d11aef4ebffc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}