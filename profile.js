// import {auth, db } from './firebase.js'; // Ensure firebase.js exports the Firestore instance `db`
// import { doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// // const firstNameInput = document.getElementById('display-first-name');
// // const lastNameInput = document.getElementById('display-last-name');
// // const dobInput = document.getElementById('display-dob');
// // const contactInput = document.getElementById('display-contact');
// // const genderInput = document.getElementById('display-gender');
// // profile.js
// document.addEventListener('DOMContentLoaded', () => {
//     // Retrieve profile data from localStorage
//     const profileData = JSON.parse(localStorage.getItem('profileData'));

//     // If profile data exists, display it
//     if (profileData) {
//         document.getElementById('profile-name').textContent = `${profileData.firstName} ${profileData.lastName}`;
//         document.getElementById('display-first-name').textContent = profileData.firstName;
//         document.getElementById('display-last-name').textContent = profileData.lastName;
//         document.getElementById('display-dob').textContent = profileData.dob;
//         document.getElementById('display-contact').textContent = profileData.contact;
//         document.getElementById('display-gender').textContent = profileData.gender;

//         // Update profile photo if a URL was provided
//         if (profileData.profilePhoto) {
//             document.getElementById('profile-photo').src = profileData.profilePhoto;
//         }
//     }
// });




// // firebase {database} work
// async function saveProfileData() {
//     try {
//         // Get user input values
//         const firstName = document.getElementById('display-first-name').value;
//         const lastName = document.getElementById('display-last-name').value;
//         const dob = document.getElementById('display-dob').value;
//         const contact = document.getElementById('display-contact').value;
//         const gender = document.getElementById('display-gender').value;

//         // Reference to user document (replace `userId` with the actual user ID)
//         const userId = '8fVFTQBNEJx6SxKgzH4x'; // Replace with your logic for fetching user ID
//         const userDocRef = doc(db, 'users', userId);
// //         const userId = auth.currentUser.uid;  // Get the user UID
// // const userDocRef = doc(db, 'users', userId);

//         // Save data to Firestore
//         await setDoc(userDocRef, {
//             firstName,
//             lastName,
//             dob,
//             contact,
//             gender,
//         });

//         // Update UI
//         displayProfileData();

//         alert('Profile data saved successfully!');
//     } catch (error) {
//         console.error('Error saving profile data:', error);
//         alert('Failed to save profile data.');
//     }
// }

// // Function to fetch and display profile data from Firestore
// async function displayProfileData() {
//     try {
//         // Reference to user document (replace `userId` with the actual user ID)
// //        import { db } from './firebase.js'; // Ensure firebase.js exports the Firestore instance `db`
// // import { doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// const firstNameInput = document.getElementById('display-first-name');
// const lastNameInput = document.getElementById('display-last-name');
// const dobInput = document.getElementById('display-dob');
// const contactInput = document.getElementById('display-contact');
// const genderInput = document.getElementById('display-gender');
// // profile.js
// document.addEventListener('DOMContentLoaded', () => {
//     // Retrieve profile data from localStorage
//     const profileData = JSON.parse(localStorage.getItem('profileData'));

//     // If profile data exists, display it
//     if (profileData) {
//         document.getElementById('profile-name').textContent = `${profileData.firstName} ${profileData.lastName}`;
//         document.getElementById('display-first-name').textContent = profileData.firstName;
//         document.getElementById('display-last-name').textContent = profileData.lastName;
//         document.getElementById('display-dob').textContent = profileData.dob;
//         document.getElementById('display-contact').textContent = profileData.contact;
//         document.getElementById('display-gender').textContent = profileData.gender;

//         // Update profile photo if a URL was provided
//         if (profileData.profilePhoto) {
//             document.getElementById('profile-photo').src = profileData.profilePhoto;
//         }
//     }
// });




// // firebase {database} work
// // async function saveProfileData() {
// //     try {
// //         // Get user input values
// //         const firstName = document.getElementById('display-first-name').value;
// //         const lastName = document.getElementById('display-last-name').value;
// //         const dob = document.getElementById('display-dob').value;
// //         const contact = document.getElementById('display-contact').value;
// //         const gender = document.getElementById('display-gender').value;

// //         // Reference to user document (replace `userId` with the actual user ID)
// //         const userId = '8fVFTQBNEJx6SxKgzH4x'; // Replace with your logic for fetching user ID
// //         const userDocRef = doc(db, 'users', userId);

// //         // Save data to Firestore
// //         await setDoc(userDocRef, {
// //             firstName,
// //             lastName,
// //             dob,
// //             contact,
// //             gender,
// //         });

// //         // Update UI
// //         displayProfileData();

// //         alert('Profile data saved successfully!');
// //     } catch (error) {
// //         console.error('Error saving profile data:', error);
// //         alert('Failed to save profile data.');
// //     }
// // }

// // Function to fetch and display profile data from Firestore
// // async function displayProfileData() {
// //     try {
// //         // Reference to user document (replace `userId` with the actual user ID)
// //         const userId = '8fVFTQBNEJx6SxKgzH4x'; // Replace with your logic for fetching user ID
// //         const userDocRef = doc(db, 'users', userId);

// //         // Fetch data
// //         const userDoc = await getDoc(userDocRef);

// //         if (userDoc.exists()) {
// //             const data = userDoc.data();

// //             // Update UI
// //             firstNameInput.textContent = data.firstName || 'Not provided';
// //             lastNameInput.textContent = data.lastName || 'Not provided';
// //             dobInput.textContent = data.dob || 'Not provided';
// //             contactInput.textContent = data.contact || 'Not provided';
// //             genderInput.textContent = data.gender || 'Not provided';
// //         } else {
// //             console.log('No profile data found!');
// //         }
// //     } catch (error) {
// //         console.error('Error fetching profile data:', error);
// //     }
// // }

// // // Add event listener for the "Save" button
// // document.getElementById('save-profile-btn').addEventListener('click', saveProfileData);

// // Display profile data on page load
// displayProfileData();
//         const userDocRef = doc(db, 'users', userId);

//         // Fetch data
//         const userDoc = await getDoc(userDocRef);

//         if (userDoc.exists()) {
//             const data = userDoc.data();

//             // Update UI
//             firstNameInput.textContent = data.firstName || 'Not provided';
//             lastNameInput.textContent = data.lastName || 'Not provided';
//             dobInput.textContent = data.dob || 'Not provided';
//             contactInput.textContent = data.contact || 'Not provided';
//             genderInput.textContent = data.gender || 'Not provided';
//         } else {
//             console.log('No profile data found!');
//         }
//     } catch (error) {
//         console.error('Error fetching profile data:', error);
//     }
// }

// // Add event listener for the "Save" button
// // document.getElementById('save-profile-btn').addEventListener('click', saveProfileData);

// // Display profile data on page load
// // displayProfileData();


// profile.js

// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase Configuration
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
const db = getFirestore(app);

// Function to Save Data to Firestore
async function saveData() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const cnic = document.getElementById("cnic").value;
  const age = document.getElementById("age").value;
  const hobbies = document.getElementById("hobbies").value.split(',').map(hobby => hobby.trim());

  try {
    // Save the data
    await addDoc(collection(db, "users"), {
      name,
      phone,
      address,
      cnic,
      age,
      hobbies
    });

    // Reset the form
    document.getElementById("userForm").reset();

    // Display updated data
    displayData();
    alert("Data saved successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error saving data: " + error.message);
  }
}

// Function to Display Data Below Heading
async function displayData() {
  const userDataDiv = document.getElementById("userData");
  userDataDiv.innerHTML = ''; // Clear previous data

  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const userDiv = document.createElement("div");
      userDiv.style.marginBottom = "10px"; // Add spacing between user data
      userDiv.style.borderBottom = "1px solid #ccc"; // Add styling for separation

      userDiv.innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>CNIC:</strong> ${data.cnic}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Hobbies:</strong> ${data.hobbies.join(', ')}</p>
      `;

      userDataDiv.appendChild(userDiv);
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
}

// Event Listener for Submit Button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitBtn").addEventListener("click", saveData);
  displayData(); // Display existing data on page load
});

