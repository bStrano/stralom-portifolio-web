'use client'
import React, {useEffect} from 'react';
import {initializeFirebase} from "@/config/firebase.config";

interface IFirebaseConfigProps {

}

function FirebaseConfig(props: IFirebaseConfigProps) {
    useEffect(() => {
        initializeFirebase();
    }, []);

    return null;
}

export default FirebaseConfig;
