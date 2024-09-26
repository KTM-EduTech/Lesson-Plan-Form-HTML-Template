    function openLightbox() {
      // Get the submitted HTML code from the textarea
      const htmlCode = document.getElementById("htmlCode").value;

      // Escape HTML special characters to display as code
      const escapedCode = htmlCode
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // Insert the escaped code into the <pre> tag
      document.getElementById("displayCode").innerHTML = escapedCode;

      // Display the lightbox
      document.getElementById("lightbox").style.display = "block";
    }

    function closeLightbox() {
      // Hide the lightbox when the close button is clicked
      document.getElementById("lightbox").style.display = "none";
    }

// This script adds a unique number to each element with an ID based on its position in the DOM, ensuring no duplicate IDs exist.
document.querySelectorAll('[id]').forEach((element, index) => {
    element.id = element.id + '-' + index;
});
