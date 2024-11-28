// app.js
// import { auth } from "./firebase.js";
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// const signupForm = document.getElementById("sign-up-form");
// const signupEmail = document.getElementById("signupEmail");
// const signupPassword = document.getElementById("signupPassword");

// signupForm.addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevent default form submission

//     const email = signupEmail.value.trim();
//     const password = signupPassword.value.trim();

//     if (email && password) {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log("User created:", user);
//                 alert("Sign-up successful!");

//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;

//                 if (errorCode === "auth/email-already-in-use") {
//                     alert("This email is already in use. Please try a different one.");
//                 } else if (errorCode === "auth/invalid-email") {
//                     alert("Invalid email format.");
//                 } else if (errorCode === "auth/weak-password") {
//                     alert("Password should be at least 6 characters.");
//                 } else {
//                     alert("Error: " + errorMessage);
//                 }
//             });
//     } else {
//         alert("Please fill in all required fields.");
//     }
// });
// app.js
// import { auth } from "./firebase.js";
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// // Get button and form elements
// const openSignInFormBtn = document.getElementById("open-sign-in-form");
// const openSignUpFormBtn = document.getElementById("open-sign-up-form");
// const signInInfo = document.getElementById("sign-in-info");
// const signUpInfo = document.getElementById("sign-up-info");

// // Toggle visibility of sign-in and sign-up forms
// openSignInFormBtn.addEventListener("click", function() {
//     signInInfo.style.display = "block"; // Show sign-in form
//     signUpInfo.style.display = "none"; // Hide sign-up form
// });

// openSignUpFormBtn.addEventListener("click", function() {
//     signInInfo.style.display = "none"; // Hide sign-in form
//     signUpInfo.style.display = "block"; // Show sign-up form
// });

// // Sign-up form handling
// const signupForm = document.getElementById("sign-up-form");
// const signupEmail = document.getElementById("signupEmail");
// const signupPassword = document.getElementById("signupPassword");

// signupForm.addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevent default form submission

//     const email = signupEmail.value.trim();
//     const password = signupPassword.value.trim();

//     if (email && password) {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log("User created:", user);
//                 alert("Sign-up successful!");
//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;

//                 if (errorCode === "auth/email-already-in-use") {
//                     alert("This email is already in use. Please try a different one.");
//                 } else if (errorCode === "auth/invalid-email") {
//                     alert("Invalid email format.");
//                 } else if (errorCode === "auth/weak-password") {
//                     alert("Password should be at least 6 characters.");
//                 } else {
//                     alert("Error: " + errorMessage);
//                 }
//             });
//     } else {
//         alert("Please fill in all required fields.");
//     }
// });








// app.js
// import { auth } from "./firebase.js";
// import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// document.getElementById("show-sign-in-form").addEventListener("click", function() {
//     document.getElementById("sign-in-info").style.display = "block";
//     document.getElementById("sign-up-info").style.display = "none";
// });

// document.getElementById("show-sign-up-form").addEventListener("click", function() {
//     document.getElementById("sign-in-info").style.display = "none";
//     document.getElementById("sign-up-info").style.display = "block";
// });

// const signupForm = document.getElementById("sign-up-form");
// const signupEmail = document.getElementById("signupEmail");
// const signupPassword = document.getElementById("signupPassword");

// signupForm.addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevent default form submission

//     const email = signupEmail.value.trim();
//     const password = signupPassword.value.trim();

//     if (email && password) {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log("User created:", user);
//                 alert("Sign-up successful!");

//                 window.location.href = "dashboard.html";
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;

//                 if (errorCode === "auth/email-already-in-use") {
//                     alert("This email is already in use. Please try a different one.");
//                 } else if (errorCode === "auth/invalid-email") {
//                     alert("Invalid email format.");
//                 } else if (errorCode === "auth/weak-password") {
//                     alert("Password should be at least 6 characters.");
//                 } else {
//                     alert("Error: " + errorMessage);
//                 }
//             });
//     } else {
//         alert("Please fill in all required fields.");
//     }
// });
// const signInForm = document.getElementById("sign-in-form");
// const signInEmail = document.getElementById("signinEmail");
// const signInPassword = document.getElementById("signinPassword");

// signInForm.addEventListener("submit", (event) => {
//     event.preventDefault(); // Prevent default form submission

//     const email = signInEmail.value.trim();
//     const password = signInPassword.value.trim();

//     if (email && password) {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 alert("Sign-in successful!");
//                 window.location.href = "dashboard.html"; // Redirect to dashboard
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;

//                 if (errorCode === "auth/user-not-found") {
//                     alert("No account found with this email. Please sign up first.");
//                 } else if (errorCode === "auth/wrong-password") {
//                     alert("Incorrect password. Please try again.");
//                 } else {
//                     alert("Error: " + errorMessage);
//                 }
//             });
//     } else {
//         alert("Please enter both email and password.");
//     }
// });


import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    // Toggle between Sign In and Sign Up forms
    document.getElementById("show-sign-in-form").addEventListener("click", function () {
        document.getElementById("sign-in-info").style.display = "block";
        document.getElementById("sign-up-info").style.display = "none";
    });

    document.getElementById("show-sign-up-form").addEventListener("click", function () {
        document.getElementById("sign-in-info").style.display = "none";
        document.getElementById("sign-up-info").style.display = "block";
    });

    // Sign Up
    const signupForm = document.getElementById("sign-up-form");
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = signupEmail.value.trim();
        const password = signupPassword.value.trim();

        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User created:", user);
                    alert("Sign-up successful!");
                    // Redirect to dashboard after sign-up
                    setTimeout(() => {
                        window.location.href = "dashboard.html"; // Redirect to dashboard
                    }, 3000); // 30000 milliseconds = 30 seconds
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.error("Sign Up Error:", error); // Debugging line

                    if (errorCode === "auth/email-already-in-use") {
                        alert("This email is already in use. Please try a different one.");
                    } else if (errorCode === "auth/invalid-email") {
                        alert("Invalid email format.");
                    } else if (errorCode === "auth/weak-password") {
                        alert("Password should be at least 6 characters.");
                    } else {
                        alert("Error: " + errorMessage);
                    }
                });
        } else {
            alert("Please fill in all required fields.");
        }
    });

    // Sign In
    const signInForm = document.getElementById("sign-in-form");
    const signInEmail = document.getElementById("signinEmail");
    const signInPassword = document.getElementById("signinPassword");

    signInForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = signInEmail.value.trim();
        const password = signInPassword.value.trim();

        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Sign-in successful!");
                    // Redirect to dashboard after 30 seconds
                    setTimeout(() => {
                        window.location.href = "dashboard.html"; // Redirect to dashboard
                    }, 30000); // 30000 milliseconds = 30 seconds
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.error("Sign In Error:", error); // Debugging line

                    if (errorCode === "auth/user-not-found") {
                        alert("No account found with this email. Please sign up first.");
                    } else if (errorCode === "auth/wrong-password") {
                        alert("Incorrect password. Please try again.");
                    } else {
                        alert("Error: " + errorMessage);
                    }
                });
        } else {
            alert("Please enter both email and password.");
        }
    });
    // /////////////////////////////////////////////
    // const withgoogle = document.getElementById("show-sign-in-form");

    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     const user = result.user;
    //     console.log(user);
    //   }).catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage)
    //     const email = error.customData.email;
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //   });
    
    
    // Verify Email button click event
    const actionCodeSettings = {
        url: 'http://your-app.com/finishSignUp?cartId=1234', // Update this URL to your verification handler
        handleCodeInApp: true
    };

    document.getElementById("verify-acc").addEventListener("click", () => {
        const email = signupEmail.value.trim(); // Use the signup email for verification
        if (email) {
            sendSignInLinkToEmail(auth, email, actionCodeSettings)
                .then(() => {
                    // The link was successfully sent. Inform the user.
                    window.localStorage.setItem('emailForSignIn', email); // Save the email locally
                    alert("Verification email sent! Please check your inbox.");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error sending verification email:", error); // Debugging line
                    alert("Error: " + errorMessage);
                });
        } else {
            alert("Please sign up first to verify your email.");
        }
    });
});




 // Load profile data from localStorage
//  window.onload = function() {
//     const profileData = JSON.parse(localStorage.getItem('profileData'));
//     const profilePhoto = localStorage.getItem('profilePhoto');

//     if (profileData) {
//       document.getElementById('profile-name').textContent = profileData.firstName + ' ' + profileData.lastName;
//       document.getElementById('display-first-name').textContent = profileData.firstName;
//       document.getElementById('display-last-name').textContent = profileData.lastName;
//       document.getElementById('display-dob').textContent = profileData.dob;
//       document.getElementById('display-contact').textContent = profileData.contact;
//       document.getElementById('display-gender').textContent = profileData.gender;
//     }

//     if (profilePhoto) {
//       document.getElementById('profile-photo').src = profilePhoto;
//     }
//   };
// when click on edit button
const editButton = document.getElementById('edit-btn');
if (editButton) {
    editButton.addEventListener('click', function() {
        setTimeout(function() {
            window.location.href = "edit-profile.html"; // Redirect to the Edit Profile page
        }, 5000); // 5000 milliseconds = 5 seconds
    });
} else {
    console.error("Edit button not found in the DOM.");
}