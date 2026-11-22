
/* =====================================
   IRONCORE FITNESS
   JAVASCRIPT
===================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");

const navigation = document.getElementById("navigation");

const navLinks = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


/* CLOSE MENU AFTER CLICKING A LINK */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});


/* 2. CONTACT FORM */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !phone || !message) {

        formMessage.textContent = "Please complete all fields.";

        formMessage.style.color = "#E63946";

        return;

    }


    formMessage.textContent =
        `Thank you, ${name}! Your enquiry has been received in this demo.`;

    formMessage.style.color = "#003B70";


    contactForm.reset();

});
