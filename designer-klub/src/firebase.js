import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyCy_VORvPjnK22siA5BU3WdvT5DvrV9ebE",
  authDomain: "designer-klub-599ad.firebaseapp.com",
  databaseURL: "https://designer-klub-599ad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "designer-klub-599ad",
  storageBucket: "designer-klub-599ad.appspot.com",
  messagingSenderId: "464871451571",
  appId: "1:464871451571:web:ef40c92253074159a979c6"
});

export const dbRef = ref(getDatabase(app));


// onValue(testRef, (snapshot) => {
//     const menus = snapshot.val();
//     console.log("lkik", menus);
//   });


// const dbRef = ref(getDatabase());
// export const getMenu = get(child(dbRef, `menu`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


//   set(testRef, {
//     username: "namde",
//     profile_picture : "imageUrl"
//   });