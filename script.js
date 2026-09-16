const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const revealElements = document.querySelectorAll(".reveal");


// CONTACT FORM
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent = "Message sent successfully! 🚀";
    formMessage.classList.add("success");

    setTimeout(function() {
        formMessage.textContent = "";
        formMessage.classList.remove("success");
    }, 3000);
});


// SCROLL REVEAL
const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

revealElements.forEach(function(element) {
    observer.observe(element);
});