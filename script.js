
// 1. TYPING ANIMATION

const words = [
    "AI Developer.",
    "Full-Stack Developer.",
    "Technology Enthusiast."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing-text");

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 60 : 100;

    if (!deleting && characterIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

if (typingElement) {
    typeEffect();
}


// 2. CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const recipient = "njagimaxlyne@gmail.com";

        const emailBody =
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

       const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

window.open(gmailLink, "_blank");

        document.getElementById("form-status").textContent =
            "Your email application should open with your message.";
    });
}

// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

