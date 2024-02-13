import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
let initialized = false;

const initializeFirebase = () => {
    if(initialized) return firebase;
    if(typeof window !== "undefined") {
        console.log("Initializing Firebase");
        if(process.env.NODE_ENV === 'production'){
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
        }
    }
    initialized = true;
    return firebase;
}
export {initializeFirebase};
export default firebase;
