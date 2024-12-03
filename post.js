// // import { db, collection,addDoc,onSnapshot,
// //   getDocs,
// //   updateDoc,
// //   doc,
// //   setDoc,
// //   query,orderBy,
// //   serverTimestamp,
// //   arrayUnion,
// //   arrayRemove,
// //   getDoc,
// //   limit,
// //   where, } from './firebase.js'; // Ensure this path is correct
// //     // import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
    
//     const postForm = document.getElementById('postForm');
//     const postsList = document.getElementById('postsList');

//     postForm.onsubmit = async function(event) {
//         event.preventDefault();
//         const title = document.getElementById('title').value;
//         const description = document.getElementById('description').value;

//         try {
//             // Add a new document with a generated ID
//             await addDoc(collection(db, "posts"), {
//                 title: title,
//                 description: description,
//                 timestamp: Date.now()
//             });
//             postForm.reset();

//             // SweetAlert for successful submission
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Post Submitted!',
//                 text: 'Your post has been submitted successfully.',
//             });
//         } catch (error) {
//             console.error("Error submitting post:", error);
            
//             // SweetAlert for unsuccessful submission
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Submission Failed',
//                 text: 'There was an error submitting your post.',
//             });
//         }
//     };

//     // Real-time listener for posts
//     onSnapshot(collection(db, "posts"), (snapshot) => {
//         postsList.innerHTML = ''; // Clear the list before displaying
//         snapshot.forEach((doc) => {
//             const post = doc.data();
//             const postDiv = document.createElement('div');
//             postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`;
//             postsList.appendChild(postDiv);
//         });
//     });

// const postlist = document.querySelector('#postsList');
// const postForm = document.querySelector('#postForm');



// db.collection ('posts').get().then((snapshot)) => {

// }


// import { db } from "./firebase.js"; // Import db from your firebase.js file
// import {
//     collection,
//     addDoc,
//     getDocs,
//     updateDoc,
//     doc,
//     setDoc,
//     query,
//     orderBy,
//     serverTimestamp,
//     arrayUnion,
//     arrayRemove,
//     getDoc,
//     onSnapshot,
//     limit,
//     where
// } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"; // Import Firestore functions from the correct module

// let submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", async () => {
//     let name = document.getElementById("name");
//     let phone = document.getElementById("phone");
//     let address = document.getElementById("address");
//     let cnic = document.getElementById("cnic");
//     let age = document.getElementById("age");
//     let hobbies = document.getElementById("hobbies");

//     hobbies = hobbies.value.split(" ");

//     // Add data with random id
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//             name: name.value,
//             phone: phone.value,
//             address: address.value,
//             cnic: cnic.value,
//             age: age.value,
//             hobbies: arrayUnion(...hobbies),
//             time: serverTimestamp(),
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }

//     // Add additional logic for updating, reading, etc., as needed.
// });

// // Example query to get users older than 18
// const usersRef = collection(db, "users");
// const q = query(usersRef, where("age", ">", "18"));

// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     let userDiv = document.getElementById("userName");
//     userDiv.innerHTML = "";
//     querySnapshot.forEach((doc) => {
//         userDiv.innerHTML += `<p>${doc.data().name}</p>`;
//         console.log(doc.data().name);
//     });
// });

// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtulJ9m1ipfy900f6KpHdMNWTw802KxrE",
    authDomain: "form-validation-bc314.firebaseapp.com",
    projectId: "form-validation-bc314",
    storageBucket: "form-validation-bc314.firebasestorage.app",
    messagingSenderId: "312529142492",
    appId: "1:312529142492:web:500aa6e38c52851467ea19",
    measurementId: "G-3CW57Q1WL8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to create a new user and save profile data
async function createUser (email, password, displayName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user profile data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      displayName: displayName,
      email: email
    });

    console.log("User  profile saved to Firestore");
  } catch (error) {
    console.error("Error creating user: ", error);
  }
}

// Function to display user profile data
async function displayUserProfile() {
  const user = auth.currentUser ;

  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      console.log("User  Profile Data: ", userData);
      // Here you can update your UI with userData
    } else {
      console.log("No such document!");
    }
  } else {
    console.log("No user is signed in.");
  }
}

// Set up an observer on the Auth object to listen for user state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    displayUserProfile();
  } else {
    console.log("User  is signed out.");
  }
});

// Example usage
createUser ("user@example.com", "securePassword", "Jane Doe");