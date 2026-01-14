// MENU NAVIGATION
const mobileNav = document.querySelector(".mobile-nav");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});


// CAROUSEL SCROLLING FOR SERVICES AND PROJECTS SECTION
const carousel = document.getElementById("portfolio-card-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", ()=> {
  const cardWidth = carousel.querySelector(".service-card", "portfolio-card").offsetWidth + 15;
  carousel.scrollBy({left: cardWidth, behavior: "smooth"});
});

prev.addEventListener("click", ()=> {
  const cardWidth = carousel.querySelector(".service-card", "portfolio-card").offsetWidth + 15;
  carousel.scrollBy({left: -cardWidth, behavior: "smooth"});
});


// FAQ SECTION
const faqs = document.querySelectorAll(".single-faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faqs.forEach(item => {
      if(item !== faq){
        item.classList.remove("active");
      }
    });

    faq.classList.toggle("active");
  });
});

// CONTACT US SECTION
document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;
        let messages = [];

        if (name.length < 3) {
            isValid = false;
            messages.push("Name too short. Minimum 3 characters required.");
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Invalid email address format.");
        }

        if (message.length < 16) {
            isValid = false;
            messages.push("Message too short. Minimum 16 characters required.");
        }

        feedback.style.display = 'block';

        if (isValid) {
            feedback.textContent = "Message sent successfully!";
            feedback.style.color = '#28a745';
        }

        if (!isValid) {
            feedback.innerHTML = messages.join('<br>');
            feedback.style.color = '#dc3545';
        }
    })
})