import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBqkI6ePFGm5xlzJP5BHaqel6onpwl7CE",
  authDomain: "istore-be045.firebaseapp.com",
  projectId: "istore-be045",
  storageBucket: "istore-be045.appspot.com",
  messagingSenderId: "28534449620",
  appId: "1:28534449620:web:7618a728ee0896bb37a241",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
