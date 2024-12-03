const cloudName = "de7ovh3kr";
const unsignedUploadPreset = "xaz0x2al";
let fileInput = document.getElementById("fileInput");
let gallery = document.getElementById("gallery");
fileInput.addEventListener("change", () => {
  let file = fileInput.files[0];
  let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  let fd = new FormData();
  fd.append("upload_preset", unsignedUploadPreset);
  fd.append("file", file);
  fetch(url, {
    method: "POST",
    body: fd,
  })
    .then((response) => response.json())
    // .then((data) => {
    //   let resourceURl = data.secure_url;
    //   console.log("uploaded succesfully", resourceURl);
    //     let img = new Image()
    //     img.src = resourceURl
    //     gallery.appendChild(img)
    //     const pdfEmbed = document.createElement("embed")
    //     pdfEmbed.src = resourceURl
    //     pdfEmbed.type = "application/pdf"
    //     gallery.appendChild(pdfEmbed)
    // })
    .then((data) => {
      let resourceURl = data.secure_url;
      console.log("Uploaded successfully:", resourceURl);
  
      let img = new Image();
      img.src = resourceURl;
      img.alt = "Uploaded Image";
      img.className = "uploaded-img"; // Dynamically assign the CSS class
      gallery.appendChild(img);
  })
    .catch((e) => {
      console.log(e);
    });
});
dropArea.addEventListener("drop", (event) => {
  event.stopPropagation();
  event.preventDefault();
  let file = event.dataTransfer.files[0]; // Get the first dropped file
  let fd = new FormData();
  fd.append("upload_preset", unsignedUploadPreset);
  fd.append("file", file);

  fetch(url, {
      method: "POST",
      body: fd,
  })
  .then((response) => response.json())
  .then((data) => {
      let resourceURl = data.secure_url;
      console.log("Uploaded successfully:", resourceURl);
      let img = new Image();
      img.src = resourceURl;
      gallery.appendChild(img);
  })
  .catch((e) => {
      console.error(e);
  });
});