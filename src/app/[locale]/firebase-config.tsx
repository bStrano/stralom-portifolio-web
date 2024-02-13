import {initializeFirebase} from "@/config/firebase.config";

interface IFirebaseConfigProps {

}

function FirebaseConfig(props: IFirebaseConfigProps) {
    initializeFirebase();

    return null;
}

export default FirebaseConfig;
