document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



// Get the modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".modal .close");

// Attach click event to all zoomable images
document.querySelectorAll(".zoomable").forEach((img) => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.textContent = this.alt;
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when the user clicks outside the image
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
