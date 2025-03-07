document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggleButton");
    const contactDetails = document.getElementById("contact-details");
    
    button.addEventListener("click", function () {
        if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
            contactDetails.style.display = "block";
            button.textContent = "Hide";
        } else {
            contactDetails.style.display = "none";
            button.textContent = "Show more";
        }
    });
});
document.querySelectorAll(".social-icon").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });
});
