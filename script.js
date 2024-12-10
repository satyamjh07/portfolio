// Array to store feedback with names
const feedbacks = [
    {
        name: "John Doe",
        feedback: "Sasam is incredibly skilled and dedicated. His project work and attention to detail are impressive!"
    },
    {
        name: "Jane Smith",
        feedback: "Working with Sasam was a fantastic experience. He brings creative solutions and a strong work ethic to every project."
    },
    {
        name: "Mark Lee",
        feedback: "I highly recommend Sasam for his technical proficiency and ability to deliver quality work under tight deadlines."
    }
];

// Function to display feedback
function displayFeedback(index) {
    const testimonialElement = document.getElementById("testimonial");
    const currentFeedback = feedbacks[index];

    testimonialElement.innerHTML = `
        <p>"${currentFeedback.feedback}"</p>
        <h4>- ${currentFeedback.name}</h4>
    `;
}

// Initialize the feedback index and start displaying feedbacks
let currentIndex = 0;

// Display the first feedback
displayFeedback(currentIndex);

// Set an interval to change the feedback every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % feedbacks.length; // Loop back to the first feedback after the last one
    displayFeedback(currentIndex);
}, 5000); // 5000ms = 5 seconds


// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Parallax Scrolling
const parallax = document.querySelector('.parallax');
window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 0.5}px`;
});