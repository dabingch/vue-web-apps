import firebase from "firebase/app";
import "firebase/database";

const config = {
	// API keys
};

const db = firebase.initializeApp(config);
export default db;
