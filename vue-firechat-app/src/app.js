import { initializeApp } from "firebase/app";
import "firebase/database";

const firebaseConfig = {
	// API keys
	apiKey: "AIzaSyCKBt8L7XTiVGAX4-HRaQrxFPK1gRC2yck",
	authDomain: "vue-firechat-app.firebaseapp.com",
	databaseURL: "https://vue-firechat-app-default-rtdb.firebaseio.com",
	projectId: "vue-firechat-app",
	storageBucket: "vue-firechat-app.appspot.com",
	messagingSenderId: "419683661459",
	appId: "1:419683661459:web:65f18a9d1d5de3a265bf66",
};

const app = initializeApp(firebaseConfig);
export default app;
