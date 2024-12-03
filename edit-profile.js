// import { auth } from "./firebase.js";
// import { signOut} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"; 

// window.logout = function() {
//     signOut(auth).then(() => {
//         window.location.href = "index.html"; // Redirect to signup page
//     }).catch((error) => {
//         console.error("Error signing out:", error);
//         Swal.fire("Error", "Failed to log out. Please try again.", "error");
//     });
// };

// function updatePhoto() {
//   const url = document.getElementById('photo-url').value;
//   document.getElementById('profile-photo').src = url;
//   localStorage.setItem('profilePhoto', url);
// }

// function saveProfile(event) {
//   event.preventDefault();
  
//   // Save user data to localStorage
//   const profileData = {
//     firstName: document.getElementById('first-name').value,
//     lastName: document.getElementById('last-name').value,
//     dob: document.getElementById('dob').value,
//     contact: document.getElementById('contact').value,
//     gender: document.getElementById('gender').value
//   };
//   localStorage.setItem('profileData', JSON.stringify(profileData));
//   window.location.href = 'dashboard.html';
// }

// // Load saved profile photo
// window.onload = function() {
//   const savedPhoto = localStorage.getItem('profilePhoto');
//   if (savedPhoto) {
//     document.getElementById('profile-photo').src = savedPhoto;
//   }
// };






// // edit-profile.js
// document.getElementById('save-changes-button').addEventListener('click', function () {
//   // Get user input from form fields
//   const profileData = {
//       firstName: document.getElementById('first-name').value,
//       lastName: document.getElementById('last-name').value,
//       dob: document.getElementById('dob').value,
//       contact: document.getElementById('contact').value,
//       gender: document.getElementById('gender').value,
//       profilePhoto: document.getElementById('photo-url').value
//   };

//   // Store data in localStorage
//   localStorage.setItem('profileData', JSON.stringify(profileData));





// // Get references to the elements
// const saveButton = document.getElementById('save-changes-button');

// // Event listener for the save button
// saveButton.addEventListener('click', async function() {
//     // Collect data from the input fields
//     const photoUrl = document.getElementById('photo-url').value;
//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const dob = document.getElementById('dob').value;
//     const contact = document.getElementById('contact').value;
//     const gender = document.getElementById('gender').value;

//     // Validate form fields
//     if (!firstName || !lastName || !dob || !contact || !gender || !photoUrl) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Please fill in all fields before saving!',
//         });
//         return; // Stop the function if validation fails
//     }

//     const userId = auth.currentUser  ? auth.currentUser .uid : null;

//     if (!userId) {
//         console.error("User  is not authenticated.");
//         alert("You must be logged in to save your profile.");
//         return;
//     }

//     try {
//         // Save data to Firestore
//         await setDoc(doc(db, "users", userId), {
//             photoUrl: photoUrl,
//             firstName: firstName,
//             lastName: lastName,
//             dob: dob,
//             contact: contact,
//             gender: gender
//         });

//         // Redirect to profile.html only if saving was successful
//         window.location.href = 'profile.html';
//     } catch (error) {
//         console.error("Error saving document: ", error);
//         alert("There was an error saving your profile. Please try again.");
//     }
// });




//   // Redirect to the profile page
//   window.location.href = 'profile.html';
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("save-changes-button");
//   if (button) {
//       button.addEventListener("click", async () => {
//           const firstName = document.getElementById("first-name").value;
//           const lastName = document.getElementById("last-name").value;
//           const dob = document.getElementById("dob").value;
//           const contact = document.getElementById("contact").value;
//           const gender = document.getElementById("gender").value;

//           // Get current user
//           const user = auth.currentUser ;

//           if (user) {
//               try {
//                   // Save user data to Firestore
//                   await addDoc(collection(db, "users"), {
//                       uid: user.uid,
//                       firstName,
//                       lastName,
//                       dob,
//                       contact,
//                       gender,
//                   });

//                   // Show SweetAlert notification
//                   await Swal.fire({
//                       icon: 'success',
//                       title: 'Profile Updated!',
//                       text: 'Your changes have been saved successfully.',
//                   });

//                   // Redirect to profile.html
//                   window.location.href = "profile.html";
//               } catch (error) {
//                   console.error("Error saving user data:", error);
//                   await Swal.fire({
//                       icon: 'error',
//                       title: 'Oops...',
//                       text: 'Something went wrong while saving your data.',
//                   });
//               }
//           } else {
//               await Swal.fire({
//                   icon: 'error',
//                   title: 'Not Authenticated',
//                   text: 'Please log in to update your profile.',
//               });
//           }
//       });
//   }
// });


// // app.js
// import {
//   collection,
//   getDocs,
//   updateDoc,
//   doc,
//   setDoc,
//   addDoc,
//   query,orderBy,
//   db,
//   serverTimestamp,
//   arrayUnion,
//   arrayRemove,
//   getDoc,
//   onSnapshot,
//   limit,
//   where
// } from "./firebase.js";

// let submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", async () => {
//   let name = document.getElementById("name");
//   let phone = document.getElementById("phone");
//   let address = document.getElementById("address");
//   let cnic = document.getElementById("cnic");
//   let age = document.getElementById("age");
//   let hobbies = document.getElementById("hobbies");

//   hobbies = hobbies.value.split(" ");

//   // add data with random id
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       name: name.value,
//       phone: phone.value,
//       address: address.value,
//       cnic: cnic.value,
//       age: age.value,
//       hobbies: arrayUnion(...hobbies),
//       time: serverTimestamp(),
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

//   // add data with decided id
//   // try {
//   //   await setDoc(doc(db, "users", "4654654"), {
//   //     name: name.value,
//   //     phone: phone.value,
//   //     address: address.value,
//   //     cnic: cnic.value,
//   //    age:age.value,
//   //    hobbies:arrayUnion(...hobbies),
//   //    time:serverTimestamp()
//   //   });
//   //   console.log("Document written");

//   // } catch (e) {
//   //   console.log(e);
//   // }

//   // update all documents

//   // const userRef = doc(db, "users", "42345454545");
//   // try {
//   //   await updateDoc(userRef, {
//   //     "favorites.subject":"Maths",
//   //   });
//   //   console.log("data updated");
//   // } catch (e) {
//   //   console.log(e);
//   // }

//   // const userRef = doc(db, "users", "64564654654");

//   // try {
//   //   await updateDoc(userRef, {
//   //     colors: arrayUnion("red","blue","yellow")
//   // });
//   //   console.log("array included");
//   // } catch (e) {
//   //   console.log(e);
//   // }

//   // read all documents
//   // try {
//   //   const querySnapshot = await getDocs(collection(db, "users"));

//   //   querySnapshot.forEach((doc) => {
//   //     console.log(`${doc.id} =>` ,doc.data());
//   //   });
//   // } catch (e) {
//   //   console.log(e);
//   // }

//   // get a single doc

//   // const docRef = doc(db, "users", "4654654");
//   // const docSnap = await getDoc(docRef);

//   // if (docSnap.exists()) {
//   //   let time = docSnap.data().time
//   //   console.log("Document data:",`${time.toString()}`);
//   //   // console.log(time);
//   // } else {
//   //   // docSnap.data() will be undefined in this case
//   //   console.log("No such document!");
//   // }
// });

// const usersRef = collection(db, "users");

// // const q = query(usersRef,orderBy("name","desc")) 
// const q = query(usersRef,where("age",">","18")) 

// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//    console.count("calling");
//   let userDiv = document.getElementById("userName");
//   userDiv.innerHTML = "";
//   querySnapshot.forEach((doc) => {
   

//     userDiv.innerHTML += `<p> ${doc.data().name}</p>`;
//     console.log(doc.data().name);
//   });
// });
import {
  collection,
  // getDocs,
  // updateDoc,
  // doc,
  // setDoc,
  addDoc,
  query,orderBy,
  db,
  serverTimestamp,
  // arrayUnion,
  // arrayRemove,
  // getDoc,
  onSnapshot,
  // limit,
  where
} from "./firebase.js";

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async () => {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let cnic = document.getElementById("cnic");
  let age = document.getElementById("age");
  let hobbies = document.getElementById("hobbies");

  hobbies = hobbies.value.split(" ");
  console.log("hobbies");

  // add data with random id
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      phone: phone.value,
      address: address.value,
      cnic: cnic.value,
      age: age.value,
      hobbies: arrayUnion(...hobbies),
      time: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  // add data with decided id
  // try {
  //   await setDoc(doc(db, "users", "4654654"), {
  //     name: name.value,
  //     phone: phone.value,
  //     address: address.value,
  //     cnic: cnic.value,
  //    age:age.value,
  //    hobbies:arrayUnion(...hobbies),
  //    time:serverTimestamp()
  //   });
  //   console.log("Document written");

  // } catch (e) {
  //   console.log(e);
  // }

  // update all documents

  // const userRef = doc(db, "users", "42345454545");
  // try {
  //   await updateDoc(userRef, {
  //     "favorites.subject":"Maths",
  //   });
  //   console.log("data updated");
  // } catch (e) {
  //   console.log(e);
  // }

  // const userRef = doc(db, "users", "64564654654");

  // try {
  //   await updateDoc(userRef, {
  //     colors: arrayUnion("red","blue","yellow")
  // });
  //   console.log("array included");
  // } catch (e) {
  //   console.log(e);
  // }

  // read all documents
  // try {
  //   const querySnapshot = await getDocs(collection(db, "users"));

  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} =>` ,doc.data());
  //   });
  // } catch (e) {
  //   console.log(e);
  // }

  // get a single doc

  // const docRef = doc(db, "users", "4654654");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   let time = docSnap.data().time
  //   console.log("Document data:",`${time.toString()}`);
  //   // console.log(time);
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }
});

const usersRef = collection(db, "users");

// const q = query(usersRef,orderBy("name","desc")) 
const q = query(usersRef,where("age",">","18")) 

const unsubscribe = onSnapshot(q, (querySnapshot) => {
   console.count("calling");
  let userDiv = document.getElementById("userName");
  userDiv.innerHTML = "";
  querySnapshot.forEach((doc) => {
   

    userDiv.innerHTML += `<p> ${doc.data().name}</p>`;
    console.log(doc.data().name);
  });
});