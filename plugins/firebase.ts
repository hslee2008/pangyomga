import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBdSbVuDV5SfXZR-MCUJXN82rgaRO5Gb80",
  authDomain: "pangyomga.firebaseapp.com",
  databaseURL:
    "https://pangyomga-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pangyomga",
  storageBucket: "pangyomga.appspot.com",
  messagingSenderId: "665628471769",
  appId: "1:665628471769:web:087998abb985f2de33e9c8",
  measurementId: "G-B5RZ1VZBTG",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getDatabase(app);
const storage = getStorage(app);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:transition:finish", () => {
    getPerformance(app);
    getAnalytics(app);
  });

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("db", db);
  nuxtApp.provide("db", db);

  nuxtApp.vueApp.provide("storage", storage);
  nuxtApp.provide("storage", storage);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});

export { db };
