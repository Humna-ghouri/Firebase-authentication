import { auth } from "./firebase.js";
import { signOut} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"; 

window.logout = function() {
    signOut(auth).then(() => {
        window.location.href = "index.html"; // Redirect to signup page
    }).catch((error) => {
        console.error("Error signing out:", error);
        Swal.fire("Error", "Failed to log out. Please try again.", "error");
    });
};

function updatePhoto() {
  const url = document.getElementById('photo-url').value;
  document.getElementById('profile-photo').src = url;
  localStorage.setItem('profilePhoto', url);
}

function saveProfile(event) {
  event.preventDefault();
  
  // Save user data to localStorage
  const profileData = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    dob: document.getElementById('dob').value,
    contact: document.getElementById('contact').value,
    gender: document.getElementById('gender').value
  };
  localStorage.setItem('profileData', JSON.stringify(profileData));
  window.location.href = 'dashboard.html';
}

// Load saved profile photo
window.onload = function() {
  const savedPhoto = localStorage.getItem('profilePhoto');
  if (savedPhoto) {
    document.getElementById('profile-photo').src = savedPhoto;
  }
};






// edit-profile.js
document.getElementById('save-changes-button').addEventListener('click', function () {
  // Get user input from form fields
  const profileData = {
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      dob: document.getElementById('dob').value,
      contact: document.getElementById('contact').value,
      gender: document.getElementById('gender').value,
      profilePhoto: document.getElementById('photo-url').value
  };

  // Store data in localStorage
  localStorage.setItem('profileData', JSON.stringify(profileData));





// Get references to the elements
const saveButton = document.getElementById('save-changes-button');

// Event listener for the save button
saveButton.addEventListener('click', async function() {
    // Collect data from the input fields
    const photoUrl = document.getElementById('photo-url').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const gender = document.getElementById('gender').value;

    // Validate form fields
    if (!firstName || !lastName || !dob || !contact || !gender || !photoUrl) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields before saving!',
        });
        return; // Stop the function if validation fails
    }

    const userId = auth.currentUser  ? auth.currentUser .uid : null;

    if (!userId) {
        console.error("User  is not authenticated.");
        alert("You must be logged in to save your profile.");
        return;
    }

    try {
        // Save data to Firestore
        await setDoc(doc(db, "users", userId), {
            photoUrl: photoUrl,
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            contact: contact,
            gender: gender
        });

        // Redirect to profile.html only if saving was successful
        window.location.href = 'profile.html';
    } catch (error) {
        console.error("Error saving document: ", error);
        alert("There was an error saving your profile. Please try again.");
    }
});




  // Redirect to the profile page
  window.location.href = 'profile.html';
});