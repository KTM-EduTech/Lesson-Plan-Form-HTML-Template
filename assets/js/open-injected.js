            // Function to open the lightbox and inject the template content
            function openLightbox() {
                var templateContent = document.getElementById("template").innerHTML;
                document.getElementById("lightbox-content").innerHTML = templateContent;
                document.getElementById("lightbox").style.display = "flex";
            }

            // Function to close the lightbox
            function closeLightbox() {
                document.getElementById("lightbox").style.display = "none";
            }