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





// document.getElementById("edit-btn").onclick = function () {
//     window.location.href = "edit-profile.html"; // replace with the correct path to your edit profile file
// };
// document.getElementById('profile-photo').addEventListener('input', function () {
//     document.getElementById('photo-url').src = this.value;
//   });




  // document.getElementById("updateProfile").addEventListener("click", () => {
  //   updateProfile(auth.currentUser, {
  //     displayName: "Saylani",
  //     photoURL:
  //       "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png",
  //   })
  //     .then(() => {
  //       console.log("update");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
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

  // Redirect to the profile page
  window.location.href = 'profile.html';
});
