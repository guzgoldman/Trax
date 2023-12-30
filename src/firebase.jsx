import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkgHHXPHRtKFszydxw1uVsufJIjppC_uw",
    authDomain: "storedb-439cc.firebaseapp.com",
    projectId: "storedb-439cc",
    storageBucket: "storedb-439cc.appspot.com",
    messagingSenderId: "556723789151",
    appId: "1:556723789151:web:9ea2678e54dc45c9edaaea",
    measurementId: "G-Y5FX7FHF7L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)