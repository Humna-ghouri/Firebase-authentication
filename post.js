// import { db, collection,addDoc,onSnapshot,
//   getDocs,
//   updateDoc,
//   doc,
//   setDoc,
//   query,orderBy,
//   serverTimestamp,
//   arrayUnion,
//   arrayRemove,
//   getDoc,
//   limit,
//   where, } from './firebase.js'; // Ensure this path is correct
//     // import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
    
    const postForm = document.getElementById('postForm');
    const postsList = document.getElementById('postsList');

    postForm.onsubmit = async function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        try {
            // Add a new document with a generated ID
            await addDoc(collection(db, "posts"), {
                title: title,
                description: description,
                timestamp: Date.now()
            });
            postForm.reset();

            // SweetAlert for successful submission
            Swal.fire({
                icon: 'success',
                title: 'Post Submitted!',
                text: 'Your post has been submitted successfully.',
            });
        } catch (error) {
            console.error("Error submitting post:", error);
            
            // SweetAlert for unsuccessful submission
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was an error submitting your post.',
            });
        }
    };

    // Real-time listener for posts
    onSnapshot(collection(db, "posts"), (snapshot) => {
        postsList.innerHTML = ''; // Clear the list before displaying
        snapshot.forEach((doc) => {
            const post = doc.data();
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.description}</p>`;
            postsList.appendChild(postDiv);
        });
    });

// const postlist = document.querySelector('#postsList');
// const postForm = document.querySelector('#postForm');



// db.collection ('posts').get().then((snapshot)) => {

// }


import { db } from "./firebase.js"; // Import db from your firebase.js file
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    setDoc,
    query,
    orderBy,
    serverTimestamp,
    arrayUnion,
    arrayRemove,
    getDoc,
    onSnapshot,
    limit,
    where
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"; // Import Firestore functions from the correct module

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