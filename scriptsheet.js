// Select DOM elements safely
const hamburg = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");
const mainContent = document.getElementById("main-content");
const navLinks = document.querySelectorAll(".dropdown .links a");

// Ensure elements exist before adding event listeners
if (hamburg && cancel && dropdown) {
    hamburg.addEventListener("click", () => dropdown.classList.add("active"));
    cancel.addEventListener("click", () => dropdown.classList.remove("active"));
}

// Page Content Data
const tabContent = {
    home: `
        <div class="main_container">
            <div class="image">
                <img src="image3.png" alt="Ayush">
            </div>
            <div class="contents">
                <h1>Hey I'm <span>Ayush</span></h1>
                <div class="typewriter">I'm a <span class="typewriter_text"> Developer</span></div>
                <p>I'm a dedicated and innovative developer with a strong passion for solving real-world problems through technology...</p>
                <div class="social_links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
                <div class="hrme">
                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    `,
    about: `
        <div class="about-section">
            <h2>About Me</h2>
            <p>B.Tech Student at Jaypee Institute of Technology.</p>
            <p>Interned at SAIL, working on Real-time Vehicle Speed Detection using YOLOv8.</p>
        </div>
    `,
    skills: `
        <div class="skills-section">
            <h2>Skills</h2>
            <ul>
                <li>C++</li><li>JavaScript</li><li>CSS</li><li>HTML</li><li>Full Stack Development</li>
                <li>Python</li><li>YOLOv8</li><li>OpenCV</li><li>Data Analysis</li>
            </ul>
        </div>
    `,
    services: `
        <div class="services-section">
            <h2>Services</h2>
            <ul><li>Internships</li><li>Job Opportunities</li><li>Freelance Projects</li></ul>
        </div>
    `,
    contact: `
        <div class="contact-section">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:aykr4438@gmail.com">aykr4438@gmail.com</a></p>
            <p>Phone: <a href="tel:+919142039799">+91 9142039799</a></p>
            <p>WhatsApp: <a href="https://wa.me/919142039799">+91 9142039799</a></p>
        </div>
    `
};

// Function to load the selected tab content
const loadTab = (tab) => {
    if (tabContent[tab] && mainContent) {
        mainContent.innerHTML = tabContent[tab];

        // Reattach event listener to "Hire Me" button
        if (tab === "home") {
            const hireMeBtn = document.querySelector(".hrme button");
            if (hireMeBtn) {
                hireMeBtn.addEventListener("click", () => {
                    window.location.href = "hireme.html";
                });
            }
        }

        // Update active state for navigation
        document.querySelector(".links a.active")?.classList.remove("active");
        document.querySelector(`.dropdown .links a[data-tab="${tab}"]`)?.classList.add("active");
    }
};
// Load default Home tab on page load
document.addEventListener("DOMContentLoaded", () => loadTab("home"));
