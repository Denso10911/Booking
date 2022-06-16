import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDQsP0O4Rf31ES-3SV3pZ-DLl_CuCSiPTg",
  authDomain: "booking-352615.firebaseapp.com",
  projectId: "booking-352615",
  storageBucket: "booking-352615.appspot.com",
  messagingSenderId: "98735641560",
  appId: "1:98735641560:web:ca230d47728e4aadbc18ad",
  measurementId: "G-DRHVJNDB93",
};
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
