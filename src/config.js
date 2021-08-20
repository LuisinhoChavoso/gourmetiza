import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBm21SNNfebrFF3qQsRPEj705Rqifu5GhE",
  authDomain: "gourmetiza-4251b.firebaseapp.com",
  databaseURL: "https://gourmetiza-4251b-default-rtdb.firebaseio.com",
  projectId: "gourmetiza-4251b",
  storageBucket: "gourmetiza-4251b.appspot.com",
  messagingSenderId: "1003934739951",
  appId: "1:1003934739951:web:491bd767316a473eedda1a",
  measurementId: "G-M4FNTGLGG8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const database = firebaseApp.database();
export { auth, database };

export default firebase;
