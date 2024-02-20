import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9eNrc1uyXdrACi1lVMftW2wXryS42k3I",
  authDomain: "test-user-profile-ea6c5.firebaseapp.com",
  projectId: "test-user-profile-ea6c5",
  storageBucket: "test-user-profile-ea6c5.appspot.com",
  messagingSenderId: "231455113463",
  appId: "1:231455113463:web:86cf5d93d5af12a560d3f2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);