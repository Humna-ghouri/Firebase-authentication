import {auth, db } from './firebase.js'; // Ensure firebase.js exports the Firestore instance `db`
import { doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// const firstNameInput = document.getElementById('display-first-name');
// const lastNameInput = document.getElementById('display-last-name');
// const dobInput = document.getElementById('display-dob');
// const contactInput = document.getElementById('display-contact');
// const genderInput = document.getElementById('display-gender');
// profile.js
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve profile data from localStorage
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    // If profile data exists, display it
    if (profileData) {
        document.getElementById('profile-name').textContent = `${profileData.firstName} ${profileData.lastName}`;
        document.getElementById('display-first-name').textContent = profileData.firstName;
        document.getElementById('display-last-name').textContent = profileData.lastName;
        document.getElementById('display-dob').textContent = profileData.dob;
        document.getElementById('display-contact').textContent = profileData.contact;
        document.getElementById('display-gender').textContent = profileData.gender;

        // Update profile photo if a URL was provided
        if (profileData.profilePhoto) {
            document.getElementById('profile-photo').src = profileData.profilePhoto;
        }
    }
});




// firebase {database} work
async function saveProfileData() {
    try {
        // Get user input values
        const firstName = document.getElementById('display-first-name').value;
        const lastName = document.getElementById('display-last-name').value;
        const dob = document.getElementById('display-dob').value;
        const contact = document.getElementById('display-contact').value;
        const gender = document.getElementById('display-gender').value;

        // Reference to user document (replace `userId` with the actual user ID)
        const userId = '8fVFTQBNEJx6SxKgzH4x'; // Replace with your logic for fetching user ID
        const userDocRef = doc(db, 'users', userId);
//         const userId = auth.currentUser.uid;  // Get the user UID
// const userDocRef = doc(db, 'users', userId);

        // Save data to Firestore
        await setDoc(userDocRef, {
            firstName,
            lastName,
            dob,
            contact,
            gender,
        });

        // Update UI
        displayProfileData();

        alert('Profile data saved successfully!');
    } catch (error) {
        console.error('Error saving profile data:', error);
        alert('Failed to save profile data.');
    }
}

// Function to fetch and display profile data from Firestore
async function displayProfileData() {
    try {
        // Reference to user document (replace `userId` with the actual user ID)
//        import { db } from './firebase.js'; // Ensure firebase.js exports the Firestore instance `db`
// import { doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

const firstNameInput = document.getElementById('display-first-name');
const lastNameInput = document.getElementById('display-last-name');
const dobInput = document.getElementById('display-dob');
const contactInput = document.getElementById('display-contact');
const genderInput = document.getElementById('display-gender');
// profile.js
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve profile data from localStorage
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    // If profile data exists, display it
    if (profileData) {
        document.getElementById('profile-name').textContent = `${profileData.firstName} ${profileData.lastName}`;
        document.getElementById('display-first-name').textContent = profileData.firstName;
        document.getElementById('display-last-name').textContent = profileData.lastName;
        document.getElementById('display-dob').textContent = profileData.dob;
        document.getElementById('display-contact').textContent = profileData.contact;
        document.getElementById('display-gender').textContent = profileData.gender;

        // Update profile photo if a URL was provided
        if (profileData.profilePhoto) {
            document.getElementById('profile-photo').src = profileData.profilePhoto;
        }
    }
});




// firebase {database} work
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

// Function to fetch and display profile data from Firestore
// async function displayProfileData() {
//     try {
//         // Reference to user document (replace `userId` with the actual user ID)
//         const userId = '8fVFTQBNEJx6SxKgzH4x'; // Replace with your logic for fetching user ID
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
// document.getElementById('save-profile-btn').addEventListener('click', saveProfileData);

// Display profile data on page load
displayProfileData();
        const userDocRef = doc(db, 'users', userId);

        // Fetch data
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const data = userDoc.data();

            // Update UI
            firstNameInput.textContent = data.firstName || 'Not provided';
            lastNameInput.textContent = data.lastName || 'Not provided';
            dobInput.textContent = data.dob || 'Not provided';
            contactInput.textContent = data.contact || 'Not provided';
            genderInput.textContent = data.gender || 'Not provided';
        } else {
            console.log('No profile data found!');
        }
    } catch (error) {
        console.error('Error fetching profile data:', error);
    }
}

// Add event listener for the "Save" button
// document.getElementById('save-profile-btn').addEventListener('click', saveProfileData);

// Display profile data on page load
// displayProfileData();








