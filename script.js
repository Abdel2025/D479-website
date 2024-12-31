// Select all question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle display of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Select elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle active class on click
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
